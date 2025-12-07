// Live time clock functionality
export class TimeClockManager {
    constructor() {
        this.timeElement = document.getElementById('live-time');
        this.timeZone = 'Asia/Kolkata';
        this.started = false;
        this.observer = null;

        // Attempt immediate start; otherwise observe DOM for late-loaded component
        this.attachClockElement();
    }

    attachClockElement() {
        if (this.timeElement && !this.started) {
            this.startClock();
            return;
        }

        // If element not present yet, observe DOM changes until it appears
        if (!this.timeElement && !this.started) {
            this.observer = new MutationObserver(() => {
                const el = document.getElementById('live-time');
                if (el) {
                    this.timeElement = el;
                    this.startClock();
                    if (this.observer) this.observer.disconnect();
                }
            });
            this.observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    startClock() {
        if (this.started) return;
        this.started = true;
        this.updateTime();
        this.intervalId = setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        const options = {
            timeZone: this.timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        const timeString = now.toLocaleTimeString('en-US', options);

        // Try to find the current-time span first, then fall back to live-time element
        const currentTimeSpan = document.getElementById('current-time');
        if (currentTimeSpan) {
            currentTimeSpan.textContent = timeString;
        } else if (this.timeElement) {
            const location = 'Barrackpore, West Bengal, India';
            this.timeElement.innerHTML = `<i data-lucide="map-pin" class="inline w-4 h-4 mr-1"></i> ${location} • ${timeString}`;
            // Re-initialize lucide icons for the new content
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    setTimeZone(timeZone) {
        this.timeZone = timeZone;
    }
}





