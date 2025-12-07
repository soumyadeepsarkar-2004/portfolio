// Animation and interaction effects
export class AnimationManager {
    constructor() {
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.initializeSpotlightCards();
        this.initializeScrollReveal();
    }

    initializeSpotlightCards() {
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            let rafId = null;
            let lastEvent = null;

            const update = () => {
                rafId = null;
                if (!lastEvent) return;
                const e = lastEvent;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                if (!this.prefersReducedMotion) {
                    card.style.setProperty('--mouseX', `${x}px`);
                    card.style.setProperty('--mouseY', `${y}px`);
                }
            };

            card.addEventListener('mousemove', (e) => {
                lastEvent = e;
                if (rafId === null) {
                    rafId = requestAnimationFrame(update);
                }
            }, { passive: true });

            card.addEventListener('mouseleave', () => {
                lastEvent = null;
                card.style.removeProperty('--mouseX');
                card.style.removeProperty('--mouseY');
            });
        });
    }

    initializeScrollReveal() {
        const elements = document.querySelectorAll('.reveal:not(.observed)');
        if (!elements.length) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: this.prefersReducedMotion ? 0 : 0.15,
            rootMargin: this.prefersReducedMotion ? '0px' : '0px 0px -20% 0px'
        });

        elements.forEach(element => {
            element.classList.add('observed');
            observer.observe(element);
        });
    }

    // Utility method to add reveal animation to dynamically created elements
    observeNewElements() {
        this.initializeScrollReveal();
    }
}
