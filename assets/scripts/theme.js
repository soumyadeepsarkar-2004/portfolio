// Theme Manager for Dark/Light Mode Toggle
export class ThemeManager {
    constructor() {
        this.currentTheme = 'dark'; // Default theme
        this.themeKey = 'portfolio-theme';
        this.initialize();
    }

    initialize() {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem(this.themeKey);
        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.currentTheme = prefersDark ? 'dark' : 'light';
        }

        this.applyTheme(this.currentTheme);
        this.createToggleButton();
        this.watchSystemPreference();
    }

    applyTheme(theme) {
        const root = document.documentElement;
        const body = document.body;

        if (theme === 'light') {
            root.classList.add('light-theme');
            root.classList.remove('dark-theme');
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            body.style.backgroundColor = '#FFFFFF';
            body.style.color = '#1F2937';
        } else {
            root.classList.add('dark-theme');
            root.classList.remove('light-theme');
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            body.style.backgroundColor = '#0A0A0A';
            body.style.color = '#E5E7EB';
        }

        this.currentTheme = theme;
        localStorage.setItem(this.themeKey, theme);

        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'light' ? '#FFFFFF' : '#0A0A0A');
        }

        // Force re-render by triggering reflow
        void document.body.offsetHeight;

        // Dispatch custom event for other components to react
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);

        // Add transition animation
        document.body.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    createToggleButton() {
        // Wait for DOM to be ready
        const checkAndCreate = () => {
            const header = document.querySelector('header');
            if (!header) {
                setTimeout(checkAndCreate, 100);
                return;
            }

            // Check if button already exists
            if (document.getElementById('theme-toggle')) {
                this.updateToggleButton();
                return;
            }

            const button = document.createElement('button');
            button.id = 'theme-toggle';
            button.setAttribute('aria-label', `Toggle to ${this.currentTheme === 'dark' ? 'light' : 'dark'} theme`);
            button.setAttribute('title', `Switch to ${this.currentTheme === 'dark' ? 'light' : 'dark'} mode`);
            button.className = 'theme-toggle-btn fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95';

            button.innerHTML = `
                <i data-lucide="${this.currentTheme === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5 text-white theme-icon"></i>
            `;

            button.addEventListener('click', () => {
                this.toggleTheme();
                this.updateToggleButton();
            });

            // Keyboard accessibility
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleTheme();
                    this.updateToggleButton();
                }
            });

            document.body.appendChild(button);

            // Initialize Lucide icons for the button
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        };

        checkAndCreate();
    }

    updateToggleButton() {
        const button = document.getElementById('theme-toggle');
        if (button) {
            const isDark = this.currentTheme === 'dark';
            button.innerHTML = `
                <i data-lucide="${isDark ? 'sun' : 'moon'}" class="w-5 h-5 ${isDark ? 'text-white' : 'text-gray-700'} theme-icon"></i>
            `;
            button.setAttribute('aria-label', `Toggle to ${isDark ? 'light' : 'dark'} theme`);
            button.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);

            // Update button styling for light mode
            if (!isDark) {
                button.classList.remove('bg-white/10', 'hover:bg-white/20', 'border-white/20');
                button.classList.add('bg-gray-900/10', 'hover:bg-gray-900/20', 'border-gray-900/20');
            } else {
                button.classList.remove('bg-gray-900/10', 'hover:bg-gray-900/20', 'border-gray-900/20');
                button.classList.add('bg-white/10', 'hover:bg-white/20', 'border-white/20');
            }

            // Re-initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            const savedTheme = localStorage.getItem(this.themeKey);
            if (!savedTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(newTheme);
                this.updateToggleButton();
            }
        });
    }

    getTheme() {
        return this.currentTheme;
    }
}

// Auto-initialize on import
export default ThemeManager;
