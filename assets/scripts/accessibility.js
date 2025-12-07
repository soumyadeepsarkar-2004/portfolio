// Accessibility Manager for Portfolio
export class AccessibilityManager {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.addSkipLinks();
        this.enhanceFocusManagement();
        this.addKeyboardNavigation();
        this.announcePageChanges();
        this.improveFormAccessibility();
        this.addLiveRegions();
    }

    addSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: #0ea5e9;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 9999;
            transition: top 0.3s;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure main content has ID
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main-content';
        }
    }

    enhanceFocusManagement() {
        // Add visible focus indicators
        const style = document.createElement('style');
        style.textContent = `
            *:focus-visible {
                outline: 3px solid #0ea5e9;
                outline-offset: 2px;
                border-radius: 4px;
            }
            
            button:focus-visible,
            a:focus-visible {
                box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.4);
            }
        `;
        document.head.appendChild(style);

        // Trap focus in modals
        document.addEventListener('keydown', (e) => {
            const modal = document.querySelector('[role="dialog"]:not(.hidden)');
            if (modal && e.key === 'Tab') {
                this.trapFocus(e, modal);
            }
        });
    }

    trapFocus(event, element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    addKeyboardNavigation() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Alt + H: Go to home
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Alt + P: Go to projects
            if (e.altKey && e.key === 'p') {
                e.preventDefault();
                const projects = document.getElementById('projects');
                if (projects) {
                    projects.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Alt + C: Go to contact
            if (e.altKey && e.key === 'c') {
                e.preventDefault();
                const contact = document.getElementById('contact');
                if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Escape: Close modals
            if (e.key === 'Escape') {
                const modal = document.querySelector('[role="dialog"]:not(.hidden)');
                if (modal) {
                    const closeButton = modal.querySelector('[data-close]');
                    if (closeButton) {
                        closeButton.click();
                    }
                }
            }
        });

        // Make cards keyboard navigable
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.project-card, .spotlight-card, .blog-card');
                if (card) {
                    e.preventDefault();
                    card.click();
                }
            }
        });
    }

    announcePageChanges() {
        // Create ARIA live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'aria-announcer';
        document.body.appendChild(liveRegion);

        // Announce when navigating to detail pages
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const detailPage = document.getElementById('detail-page');
                    if (detailPage && !detailPage.classList.contains('hidden')) {
                        const title = detailPage.querySelector('h1')?.textContent;
                        if (title) {
                            this.announce(`Navigated to ${title} details page`);
                        }
                    }
                }
            });
        });

        const detailPage = document.getElementById('detail-page');
        if (detailPage) {
            observer.observe(detailPage, { attributes: true });
        }
    }

    announce(message) {
        const announcer = document.getElementById('aria-announcer');
        if (announcer) {
            announcer.textContent = '';
            setTimeout(() => {
                announcer.textContent = message;
            }, 100);
        }
    }

    improveFormAccessibility() {
        // Add aria-required to required fields
        document.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
            field.setAttribute('aria-required', 'true');
        });

        // Add aria-invalid for error states
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.tagName === 'FORM') {
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    field.setAttribute('aria-invalid', 'true');
                });
            }
        }, true);

        // Remove aria-invalid when field becomes valid
        document.addEventListener('input', (e) => {
            const field = e.target;
            if (field.validity.valid) {
                field.removeAttribute('aria-invalid');
            }
        });
    }

    addLiveRegions() {
        // Add screen reader only class
        const style = document.createElement('style');
        style.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
            }
        `;
        document.head.appendChild(style);
    }

    // Add ARIA labels to unlabeled interactive elements
    addAriaLabels() {
        // Cards without accessible names
        document.querySelectorAll('.project-card, .blog-card, .spotlight-card').forEach((card, index) => {
            if (!card.hasAttribute('aria-label') && !card.hasAttribute('aria-labelledby')) {
                const heading = card.querySelector('h3, h4');
                if (heading) {
                    const id = `card-title-${index}`;
                    heading.id = id;
                    card.setAttribute('aria-labelledby', id);
                } else {
                    card.setAttribute('aria-label', `Card ${index + 1}`);
                }
            }
        });

        // Buttons without labels
        document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
            const icon = button.querySelector('[data-lucide]');
            if (icon && button.textContent.trim() === '') {
                const iconName = icon.getAttribute('data-lucide');
                button.setAttribute('aria-label', this.getLabelForIcon(iconName));
            }
        });
    }

    getLabelForIcon(iconName) {
        const labels = {
            'menu': 'Open menu',
            'x': 'Close',
            'arrow-left': 'Go back',
            'arrow-right': 'Go forward',
            'external-link': 'Open in new tab',
            'github': 'View on GitHub',
            'linkedin': 'View on LinkedIn',
            'mail': 'Send email',
            'sun': 'Switch to light mode',
            'moon': 'Switch to dark mode',
            'share-2': 'Share',
            'chevron-up': 'Scroll to top'
        };
        return labels[iconName] || iconName.replace('-', ' ');
    }
}

export default AccessibilityManager;
