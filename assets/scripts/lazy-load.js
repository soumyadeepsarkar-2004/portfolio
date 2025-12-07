// Lazy Loading Manager for Images and Components
export class LazyLoadManager {
    constructor() {
        this.imageObserver = null;
        this.componentObserver = null;
        this.initialize();
    }

    initialize() {
        // Initialize Intersection Observer for images
        this.setupImageLazyLoading();

        // Initialize Intersection Observer for components
        this.setupComponentLazyLoading();
    }

    setupImageLazyLoading() {
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                root: null,
                rootMargin: '50px',
                threshold: 0.01
            });

            // Observe all images with data-src attribute
            this.observeImages();
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.loadAllImages();
        }
    }

    setupComponentLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.componentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('loaded');
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            // Observe all lazy-load components
            this.observeLazyComponents();
        }
    }

    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
        lazyImages.forEach(img => {
            this.imageObserver.observe(img);
        });
    }

    observeLazyComponents() {
        const lazyComponents = document.querySelectorAll('.lazy-component');
        lazyComponents.forEach(component => {
            this.componentObserver.observe(component);
        });
    }

    loadImage(img) {
        // Add loading skeleton
        img.classList.add('loading');

        // Load the image
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;

        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }

        if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
        }

        // Handle load event
        img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
        });

        // Handle error event
        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.classList.add('error');

            // Set fallback image
            if (!img.src.includes('placeholder')) {
                img.src = 'assets/images/placeholder.svg';
            }
        });
    }

    loadAllImages() {
        // Fallback: Load all images immediately
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
                img.removeAttribute('data-srcset');
            }
        });
    }

    // Method to manually observe new images added to the DOM
    observeNewImages() {
        if (this.imageObserver) {
            this.observeImages();
        }
    }

    // Method to manually observe new components added to the DOM
    observeNewComponents() {
        if (this.componentObserver) {
            this.observeLazyComponents();
        }
    }

    // Preload critical images
    preloadImages(imageUrls) {
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
}

// Export singleton instance
export default LazyLoadManager;
