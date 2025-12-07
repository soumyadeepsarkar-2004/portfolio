// Performance Optimization Manager
export class PerformanceManager {
    constructor() {
        this.metrics = {};
        this.initialize();
    }

    initialize() {
        this.measurePageLoad();
        this.optimizeImages();
        this.deferNonCriticalCSS();
        this.preconnectToOrigins();
        this.enableServiceWorker();
        this.monitorPerformance();
    }

    measurePageLoad() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];

                    this.metrics = {
                        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
                        tcp: perfData.connectEnd - perfData.connectStart,
                        request: perfData.responseStart - perfData.requestStart,
                        response: perfData.responseEnd - perfData.responseStart,
                        dom: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        load: perfData.loadEventEnd - perfData.loadEventStart,
                        total: perfData.loadEventEnd - perfData.fetchStart
                    };

                    console.log('⚡ Performance Metrics:', this.metrics);
                    this.reportWebVitals();
                }, 0);
            });
        }
    }

    reportWebVitals() {
        // Measure Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint (LCP)
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('📊 LCP:', lastEntry.renderTime || lastEntry.loadTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                // LCP not supported
            }

            // First Input Delay (FID)
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        console.log('📊 FID:', entry.processingStart - entry.startTime);
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                // FID not supported
            }

            // Cumulative Layout Shift (CLS)
            try {
                let clsScore = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsScore += entry.value;
                            console.log('📊 CLS:', clsScore);
                        }
                    });
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                // CLS not supported
            }
        }
    }

    optimizeImages() {
        // Add intersection observer for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        // Decode image before displaying
                        if (img.decode) {
                            img.decode()
                                .then(() => {
                                    img.classList.add('loaded');
                                })
                                .catch(() => {
                                    img.classList.add('error');
                                });
                        }

                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            document.querySelectorAll('img').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    deferNonCriticalCSS() {
        // Load non-critical CSS asynchronously
        const nonCriticalCSS = [
            // Add any non-critical stylesheets here
        ];

        nonCriticalCSS.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.media = 'print';
            link.onload = function () {
                this.media = 'all';
            };
            document.head.appendChild(link);
        });
    }

    preconnectToOrigins() {
        const origins = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
            'https://cdn.tailwindcss.com',
            'https://unpkg.com'
        ];

        origins.forEach(origin => {
            const existing = document.querySelector(`link[href="${origin}"]`);
            if (!existing) {
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = origin;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            }
        });
    }

    enableServiceWorker() {
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            window.addEventListener('load', () => {
                // Service worker registration can be added here for PWA
                console.log('💡 Service Worker support detected');
            });
        }
    }

    monitorPerformance() {
        // Monitor long tasks
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        if (entry.duration > 50) {
                            console.warn('⚠️ Long Task detected:', {
                                duration: entry.duration,
                                startTime: entry.startTime
                            });
                        }
                    });
                });
                observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
                // Long tasks not supported
            }
        }

        // Monitor memory usage (Chrome only)
        if (performance.memory) {
            setInterval(() => {
                const used = performance.memory.usedJSHeapSize / 1048576;
                const total = performance.memory.totalJSHeapSize / 1048576;

                if (used / total > 0.9) {
                    console.warn('⚠️ High memory usage:', {
                        used: `${used.toFixed(2)} MB`,
                        total: `${total.toFixed(2)} MB`
                    });
                }
            }, 30000); // Check every 30 seconds
        }
    }

    // Resource hints
    prefetchResource(url) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }

    preloadResource(url, as) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = as;
        document.head.appendChild(link);
    }

    // Optimize third-party scripts
    loadScriptAsync(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;

        if (callback) {
            script.onload = callback;
        }

        document.body.appendChild(script);
    }

    // Debounce expensive operations
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle scroll/resize handlers
    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Get performance score
    getPerformanceScore() {
        const metrics = this.metrics;
        let score = 100;

        // Deduct points based on load times
        if (metrics.total > 3000) score -= 20;
        else if (metrics.total > 2000) score -= 10;
        else if (metrics.total > 1000) score -= 5;

        if (metrics.dom > 1000) score -= 10;
        if (metrics.response > 500) score -= 10;

        return Math.max(0, score);
    }
}

export default PerformanceManager;
