// Lightweight analytics wiring for Vercel Analytics
export class AnalyticsManager {
    constructor() {
        this.pulseEl = null;
        this.initPulse();
    }

    init() {
        // Track a page view when initialized
        this.track('page_view', { path: window.location.pathname });
        this.observeNewElements();
        this.bindGlobalLinkTracking();
    }

    // Create a small pulse indicator that animates when events are tracked
    initPulse() {
        const el = document.createElement('div');
        el.className = 'analytics-pulse';
        document.body.appendChild(el);
        this.pulseEl = el;
    }

    pulse() {
        if (!this.pulseEl) return;
        this.pulseEl.classList.remove('active');
        // Force reflow to restart animation
        void this.pulseEl.offsetWidth;
        this.pulseEl.classList.add('active');
    }

    track(name, data = {}) {
        try {
            // Vercel Web Analytics exposes window.va in supported environments
            if (typeof window.va === 'function') {
                // Different integrations may expect different signatures; try common ones safely
                try { window.va('event', { name, ...data }); } catch (_) { }
                try { window.va(name, data); } catch (_) { }
            }
        } catch (_) { }
        // Dev feedback (browser-safe)
        if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production') {
            console.debug('[analytics]', name, data);
        }
        this.pulse();
    }

    // Attach listeners to dynamically loaded components
    observeNewElements() {
        // Track clicks on project cards
        document.querySelectorAll('.spotlight-card').forEach(card => {
            const projectId = card.getAttribute('data-project-id') || 'unknown';
            if (!card.__analyticsBound) {
                card.addEventListener('click', () => this.track('project_open', { projectId }));
                card.__analyticsBound = true;
            }
        });

        // Track outbound social links
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            if (!link.__analyticsBound) {
                link.addEventListener('click', () => this.track('outbound_click', { href: link.href }));
                link.__analyticsBound = true;
            }
        });
    }

    bindGlobalLinkTracking() {
        // Basic route change tracking for hash navigation or internal links
        window.addEventListener('hashchange', () => this.track('route_change', { hash: window.location.hash }));
        document.addEventListener('click', (e) => {
            const a = e.target.closest('a[href]');
            if (!a) return;
            const internal = a.origin === window.location.origin;
            this.track(internal ? 'nav_click' : 'outbound_click', { href: a.href });
        }, { capture: true });
    }
}
