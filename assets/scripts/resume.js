// Resume modal manager
class ResumeManager {
  constructor() {
    this.modal = null;
    this.backdrop = null;
    this.closeBtn = null;
    this.closeBtn2 = null;
    this.openBtns = [];
    this.frame = null;
    this.fallback = null;
    this.downloadBtn = null;
    this.boundEscHandler = null;
  }

  init() {
    // Elements may be loaded after index component loader runs
    this.modal = document.getElementById('resume-modal');
    if (!this.modal) return; // component not loaded yet
    this.backdrop = document.getElementById('resume-backdrop');
    this.closeBtn = document.getElementById('resume-close-btn');
    this.closeBtn2 = document.getElementById('resume-close-btn-2');
    this.frame = document.getElementById('resume-frame');
    this.fallback = document.getElementById('resume-fallback');
    this.downloadBtn = document.getElementById('resume-download-btn');
    this.openBtns = [
      document.getElementById('resume-open-btn'),
      document.getElementById('mobile-resume-open-btn'),
      document.getElementById('hero-resume-open-btn'),
    ].filter(Boolean);

    // Wire events
    this.openBtns.forEach(btn => btn.addEventListener('click', () => this.open()));
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.closeBtn2) this.closeBtn2.addEventListener('click', () => this.close());
    if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());

    this.boundEscHandler = (e) => {
      if (e.key === 'Escape') this.close();
    };

    // Validate file presence (HEAD request)
    this.validateFile();
  }

  async validateFile() {
    const url = 'assets/resume/SS_Resume_img.pdf';
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        this.showFallback();
      }
    } catch (err) {
      this.showFallback();
    }
  }

  showFallback() {
    if (this.fallback) this.fallback.classList.remove('hidden');
    if (this.downloadBtn) {
      this.downloadBtn.setAttribute('aria-disabled', 'true');
      this.downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.remove('hidden');
    document.addEventListener('keydown', this.boundEscHandler);
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    document.removeEventListener('keydown', this.boundEscHandler);
  }
}

// Initialize after components load
document.addEventListener('DOMContentLoaded', () => {
  // Components load async; retry init after a tick
  const rm = new ResumeManager();
  const tryInit = () => {
    rm.init();
    // If modal not found yet, observe DOM mutations briefly
    if (!rm.modal) {
      const mo = new MutationObserver(() => {
        rm.init();
        if (rm.modal) mo.disconnect();
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  };
  tryInit();
  // expose for debugging if needed
  window.resumeManager = rm;

  // Expose global function for onclick handlers (e.g., footer button)
  window.openResumeModal = () => rm.open();
  window.closeResumeModal = () => rm.close();
});
