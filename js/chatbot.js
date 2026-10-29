/* ============================================
   Motor del Chatbot LumiTec
   Con integración de IA (Google Gemini - GRATIS)
   ============================================ */

const Chatbot = (() => {
  const messagesContainer = document.getElementById('chatMessages');

  // ====================================================
  // CONFIGURACIÓN DE IA
  // La clave de Gemini NO va en el sitio (es público y Google la bloquea).
  // Vive como secreto en el proxy de Cloudflare: ver worker/
  // ====================================================
  const AI_PROXY_URL = 'https://lumitec-ia.lumitec-ia.workers.dev';
  // ====================================================

  // --- Normalización de texto ---
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[¿?¡!.,;:()]/g, '')
      .trim();
  }

  const STOP_WORDS = new Set([
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
    'de', 'del', 'al', 'a', 'en', 'con', 'por', 'para',
    'es', 'son', 'esta', 'estan', 'hay', 'tiene',
    'que', 'como', 'donde', 'cuando', 'cual', 'quien',
    'me', 'mi', 'te', 'se', 'lo', 'le', 'nos',
    'y', 'o', 'e', 'u', 'ni', 'pero', 'si', 'no',
    'mas', 'muy', 'tan', 'ya', 'tambien', 'puede', 'puedo',
    'ser', 'hago', 'hacer', 'tengo', 'quiero', 'necesito',
    // Todo es sobre el Tec: estas palabras no distinguen una respuesta de otra
    'tec', 'tecnologico', 'instituto', 'campus',
  ]);

  function isSignificantWord(word) {
    return word.length > 2 && !STOP_WORDS.has(word);
  }

  // --- Motor de búsqueda local ---
  // Puntaje de cada entrada = la mejor frase clave que aparece en la pregunta
  // + la mejor coincidencia de cada palabra del usuario. Cada palabra cuenta
  // una sola vez, para que las entradas con muchas variantes (con y sin acento)
  // no acumulen puntos de más.
  function findBestMatch(userInput) {
    const normalized = normalizeText(userInput);
    const significantWords = normalized.split(/\s+/).filter(isSignificantWord);
    const paddedInput = ` ${normalized} `;
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of Object.values(KNOWLEDGE_BASE)) {
      let phraseScore = 0;
      const wordScores = new Map();

      for (const keyword of entry.keywords) {
        const normalizedKeyword = normalizeText(keyword);
        // Las claves cortas ("sii", "isc") solo cuentan como palabra completa
        const appearsInInput = normalizedKeyword.length > 3
          ? normalized.includes(normalizedKeyword)
          : paddedInput.includes(` ${normalizedKeyword} `);

        if (normalized === normalizedKeyword) {
          phraseScore = Math.max(phraseScore, 10 + normalizedKeyword.length);
        } else if (appearsInInput) {
          phraseScore = Math.max(phraseScore, 5 + normalizedKeyword.length);
        } else if (normalizedKeyword.includes(normalized) && normalized.length > 3) {
          phraseScore = Math.max(phraseScore, 5);
        }

        const keywordWords = normalizedKeyword.split(/\s+/).filter(isSignificantWord);
        for (const kw of keywordWords) {
          for (const w of significantWords) {
            let wordScore = 0;
            if (w === kw) {
              wordScore = 4;
            } else if ((w.length > 3 && kw.includes(w)) || (kw.length > 3 && w.includes(kw))) {
              wordScore = 2;
            }
            if (wordScore > (wordScores.get(w) || 0)) {
              wordScores.set(w, wordScore);
            }
          }
        }
      }

      const wordsTotal = [...wordScores.values()].reduce((sum, s) => sum + s, 0);
      // Sin una frase clave completa hacen falta al menos dos palabras en común:
      // una sola palabra suelta ("clases", "hora") no basta para elegir respuesta
      const score = (phraseScore > 0 || wordsTotal >= 6) ? phraseScore + wordsTotal : 0;

      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return bestMatch;
  }

  // --- Motor de IA (Google Gemini vía proxy) ---
  function isAIActive() {
    return AI_PROXY_URL.length > 0;
  }

  async function callAI(userText) {
    if (!isAIActive()) return null;

    try {
      const response = await fetch(AI_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText.slice(0, 500) })
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        console.warn('LumiTec IA - Error:', response.status, data.error || '');
        return null;
      }
      return data.reply || null;
    } catch (err) {
      console.error('LumiTec IA - Error de conexión:', err);
      return null;
    }
  }

  // --- Respuesta por defecto ---
  function getDefaultResponse() {
    const responses = [
      'No tengo información sobre eso, pero puedo ayudarte con ubicaciones del campus, trámites escolares u horarios. ¿Qué necesitas?',
      'No encontré una respuesta para tu pregunta. Te sugiero acudir directamente a Servicios Escolares (L-V 9:00-15:00) o llamar al 639 132 6500.',
      'Hmm, no tengo esa información. Prueba preguntándome sobre: carreras, ubicaciones de edificios, trámites o horarios del Tec.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // --- Elementos de UI ---
  function createMessageElement(text, type, buildingId) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('msg', `msg--${type}`);

    if (type === 'bot') {
      const label = document.createElement('span');
      label.classList.add('msg__label');
      label.textContent = 'LumiTec';
      wrapper.appendChild(label);
    }

    const content = document.createElement('span');
    content.textContent = text;
    wrapper.appendChild(content);

    if (type === 'bot' && buildingId) {
      const mapLink = document.createElement('button');
      mapLink.classList.add('msg__map-link');
      mapLink.textContent = '📍 Ver en el mapa';
      mapLink.addEventListener('click', () => {
        CampusMap.showBuilding(buildingId);
        App.switchTab('mapa');
      });
      wrapper.appendChild(mapLink);
    }

    return wrapper;
  }

  function createTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.classList.add('typing-indicator');
    indicator.id = 'typingIndicator';
    for (let i = 0; i < 3; i++) {
      indicator.appendChild(document.createElement('span'));
    }
    return indicator;
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function addMessage(text, type, buildingId) {
    const msg = createMessageElement(text, type, buildingId);
    messagesContainer.appendChild(msg);
    scrollToBottom();
  }

  // --- Procesamiento principal ---
  async function processInput(userText) {
    if (!userText.trim()) return;

    addMessage(userText, 'user');

    const typing = createTypingIndicator();
    messagesContainer.appendChild(typing);
    scrollToBottom();

    // Paso 1: Buscar en la base de conocimiento local
    const match = findBestMatch(userText);

    if (match) {
      // Respuesta local encontrada (rápida)
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        typing.remove();
        addMessage(match.response, 'bot', match.building || null);
      }, delay);
    } else if (isAIActive()) {
      // Paso 2: Fallback a Gemini cuando no hay respuesta local
      const aiResponse = await callAI(userText);
      typing.remove();

      if (aiResponse) {
        addMessage(aiResponse, 'bot');
      } else {
        addMessage(getDefaultResponse(), 'bot');
      }
    } else {
      // Sin IA, respuesta por defecto
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        typing.remove();
        addMessage(getDefaultResponse(), 'bot');
      }, delay);
    }
  }

  function sendWelcomeMessage() {
    setTimeout(() => {
      addMessage(
        '¡Hola! Soy LumiTec, tu asistente del Tec de Delicias. Puedo ayudarte con ubicaciones, trámites, horarios y más. ¡Pregúntame lo que necesites!',
        'bot'
      );
    }, 500);
  }

  return {
    processInput,
    sendWelcomeMessage,
    addMessage,
  };
})();
