// Social Share Manager
export class ShareManager {
    constructor() {
        this.baseUrl = window.location.origin;
        this.initialize();
    }

    initialize() {
        // Add share buttons to project cards
        this.addShareButtonsToProjects();

        // Listen for dynamically added content
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => this.addShareButtonsToProjects(), 1000);
        });
    }

    addShareButtonsToProjects() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            // Skip if share button already exists
            if (card.querySelector('.share-button')) return;

            const title = card.querySelector('h3')?.textContent || 'Check out this project';
            const description = card.querySelector('p')?.textContent || 'Amazing project by Soumyadeep Sarkar';

            // Create share button
            const shareBtn = document.createElement('button');
            shareBtn.className = 'share-button absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10';
            shareBtn.setAttribute('aria-label', 'Share this project');
            shareBtn.innerHTML = '<i data-lucide="share-2" class="w-4 h-4 text-white"></i>';

            shareBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showShareMenu(shareBtn, title, description);
            });

            card.style.position = 'relative';
            card.appendChild(shareBtn);

            // Re-initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }

    showShareMenu(button, title, description) {
        // Remove existing menu if any
        const existingMenu = document.querySelector('.share-menu');
        if (existingMenu) {
            existingMenu.remove();
            return;
        }

        const menu = document.createElement('div');
        menu.className = 'share-menu absolute top-full right-0 mt-2 bg-[#111] border border-white/20 rounded-xl p-3 shadow-2xl z-50 min-w-[200px]';

        const shareUrl = this.baseUrl;
        const encodedTitle = encodeURIComponent(title);
        const encodedDescription = encodeURIComponent(description);
        const encodedUrl = encodeURIComponent(shareUrl);

        menu.innerHTML = `
            <div class="flex flex-col gap-2">
                <button onclick="window.shareManager.shareToTwitter('${encodedTitle}', '${encodedUrl}')" 
                        class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left">
                    <i data-lucide="twitter" class="w-4 h-4 text-sky-400"></i>
                    <span class="text-white text-sm">Twitter</span>
                </button>
                <button onclick="window.shareManager.shareToLinkedIn('${encodedUrl}')" 
                        class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left">
                    <i data-lucide="linkedin" class="w-4 h-4 text-blue-400"></i>
                    <span class="text-white text-sm">LinkedIn</span>
                </button>
                <button onclick="window.shareManager.shareToFacebook('${encodedUrl}')" 
                        class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left">
                    <i data-lucide="facebook" class="w-4 h-4 text-indigo-400"></i>
                    <span class="text-white text-sm">Facebook</span>
                </button>
                <button onclick="window.shareManager.copyToClipboard('${shareUrl}')" 
                        class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left">
                    <i data-lucide="copy" class="w-4 h-4 text-green-400"></i>
                    <span class="text-white text-sm">Copy Link</span>
                </button>
            </div>
        `;

        button.parentElement.appendChild(menu);

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Close menu on outside click
        setTimeout(() => {
            document.addEventListener('click', function closeMenu(e) {
                if (!menu.contains(e.target) && e.target !== button) {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            });
        }, 100);
    }

    shareToTwitter(title, url) {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=sarkar58153`;
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        this.trackShare('twitter');
    }

    shareToLinkedIn(url) {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        window.open(linkedInUrl, '_blank', 'width=600,height=400');
        this.trackShare('linkedin');
    }

    shareToFacebook(url) {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        this.trackShare('facebook');
    }

    async copyToClipboard(url) {
        try {
            await navigator.clipboard.writeText(url);
            this.showNotification('Link copied to clipboard!', 'success');
            this.trackShare('copy');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = url;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                this.showNotification('Link copied to clipboard!', 'success');
                this.trackShare('copy');
            } catch (err) {
                this.showNotification('Failed to copy link', 'error');
            }
            document.body.removeChild(textArea);
        }

        // Remove share menu after copying
        const menu = document.querySelector('.share-menu');
        if (menu) menu.remove();
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-6 right-6 z-[100] px-6 py-3 rounded-xl shadow-2xl transform transition-all duration-300 ${type === 'success'
                ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`;

        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5"></i>
                <span class="font-semibold">${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Animate in
        setTimeout(() => notification.classList.add('translate-y-0'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    trackShare(platform) {
        // Track share analytics
        if (window.analyticsManager) {
            console.log(`Shared via ${platform}`);
            // Analytics tracking can be added here
        }
    }

    // Native Web Share API (for mobile)
    async nativeShare(title, text, url) {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: url
                });
                this.trackShare('native');
            } catch (err) {
                console.log('Share cancelled or failed:', err);
            }
        } else {
            // Fallback to custom share menu
            this.showShareMenu(null, title, text);
        }
    }
}

export default ShareManager;
