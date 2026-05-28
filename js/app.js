/* ============================================
   App principal - LumiTec
   Inicialización y navegación entre pestañas
   ============================================ */

const App = (() => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const quickReplies = document.getElementById('quickReplies');
  const privacyBtn = document.getElementById('privacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const closePrivacy = document.getElementById('closePrivacy');
  const qrBtn = document.getElementById('qrBtn');
  const qrModal = document.getElementById('qrModal');
  const closeQr = document.getElementById('closeQr');

  function init() {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (text) {
        Chatbot.processInput(text);
        chatInput.value = '';
        chatInput.focus();
      }
    });

    quickReplies.addEventListener('click', (e) => {
      const btn = e.target.closest('.quick-btn');
      if (btn) {
        const query = btn.dataset.query;
        Chatbot.processInput(query);
      }
    });

    privacyBtn.addEventListener('click', () => {
      privacyModal.classList.add('modal-overlay--visible');
    });

    closePrivacy.addEventListener('click', closeModal);
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) closeModal();
    });

    qrBtn.addEventListener('click', () => {
      qrModal.classList.add('modal-overlay--visible');
    });

    closeQr.addEventListener('click', closeModal);
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    CampusMap.init();
    Chatbot.sendWelcomeMessage();
  }

  function switchTab(tabName) {
    tabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('tab-btn--active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });

    tabPanels.forEach(panel => {
      const isActive = panel.id === `tab-${tabName}`;
      panel.classList.toggle('tab-panel--active', isActive);
    });

    if (tabName === 'chat') {
      chatInput.focus();
    }
  }

  function closeModal() {
    privacyModal.classList.remove('modal-overlay--visible');
    qrModal.classList.remove('modal-overlay--visible');
  }

  return {
    init,
    switchTab,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
