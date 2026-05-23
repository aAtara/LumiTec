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

  // Elementos de IA
  const aiSettingsBtn = document.getElementById('aiSettingsBtn');
  const aiConfig = document.getElementById('aiConfig');
  const aiConfigClose = document.getElementById('aiConfigClose');
  const saveApiKey = document.getElementById('saveApiKey');
  const apiKeyInput = document.getElementById('apiKeyInput');

  function init() {
    // Pestañas
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Formulario del chat
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (text) {
        Chatbot.processInput(text);
        chatInput.value = '';
        chatInput.focus();
      }
    });

    // Respuestas rápidas
    quickReplies.addEventListener('click', (e) => {
      const btn = e.target.closest('.quick-btn');
      if (btn) {
        const query = btn.dataset.query;
        Chatbot.processInput(query);
      }
    });

    // Modal de privacidad
    privacyBtn.addEventListener('click', () => {
      privacyModal.classList.add('modal-overlay--visible');
    });

    closePrivacy.addEventListener('click', closeModal);
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeAIConfig();
      }
    });

    // Configuración de IA
    aiSettingsBtn.addEventListener('click', toggleAIConfig);
    aiConfigClose.addEventListener('click', closeAIConfig);

    saveApiKey.addEventListener('click', handleSaveApiKey);
    apiKeyInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSaveApiKey();
      }
    });

    // Restaurar API key si existia en session
    const savedKey = sessionStorage.getItem('lumitec_api_key');
    if (savedKey) {
      apiKeyInput.value = savedKey;
    }

    // Inicializar componentes
    CampusMap.init();
    Chatbot.sendWelcomeMessage();
    Chatbot.updateAIBadge();
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
  }

  function toggleAIConfig() {
    aiConfig.classList.toggle('ai-config--visible');
    if (aiConfig.classList.contains('ai-config--visible')) {
      apiKeyInput.focus();
    }
  }

  function closeAIConfig() {
    aiConfig.classList.remove('ai-config--visible');
  }

  function handleSaveApiKey() {
    const key = apiKeyInput.value.trim();
    Chatbot.setApiKey(key);
    if (key) {
      closeAIConfig();
      Chatbot.addMessage('✨ Motor de IA activado. Ahora puedo responder preguntas más complejas sobre el Tec de Delicias.', 'bot');
    } else {
      Chatbot.addMessage('Motor de IA desactivado. Seguiré respondiendo con mi base de conocimiento local.', 'bot');
    }
  }

  return {
    init,
    switchTab,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
