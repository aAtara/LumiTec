/* ============================================
   Motor del Chatbot LumiTec
   ============================================ */

const Chatbot = (() => {
  const messagesContainer = document.getElementById('chatMessages');

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
  ]);

  function isSignificantWord(word) {
    return word.length > 2 && !STOP_WORDS.has(word);
  }

  function findBestMatch(userInput) {
    const normalized = normalizeText(userInput);
    const words = normalized.split(/\s+/);
    const significantWords = words.filter(isSignificantWord);
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, entry] of Object.entries(KNOWLEDGE_BASE)) {
      let score = 0;

      for (const keyword of entry.keywords) {
        const normalizedKeyword = normalizeText(keyword);

        if (normalized === normalizedKeyword) {
          score += 10;
          continue;
        }

        if (normalized.includes(normalizedKeyword) && normalizedKeyword.length > 3) {
          score += 5 + normalizedKeyword.length;
          continue;
        }

        if (normalizedKeyword.includes(normalized) && normalized.length > 3) {
          score += 5;
          continue;
        }

        const keywordWords = normalizedKeyword.split(/\s+/).filter(isSignificantWord);
        for (const kw of keywordWords) {
          for (const w of significantWords) {
            if (w === kw) {
              score += 4;
            } else if (w.length > 3 && kw.includes(w)) {
              score += 2;
            } else if (kw.length > 3 && w.includes(kw)) {
              score += 2;
            }
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return bestScore >= 3 ? bestMatch : null;
  }

  function getDefaultResponse() {
    const responses = [
      'No tengo información sobre eso, pero puedo ayudarte con ubicaciones del campus, trámites escolares u horarios. ¿Qué necesitas?',
      'No encontré una respuesta para tu pregunta. Te sugiero acudir directamente a Servicios Escolares (L-V 9:00-15:00) o llamar al (639) 474 5640.',
      'Hmm, no tengo esa información. Prueba preguntándome sobre: carreras, ubicaciones de edificios, trámites o horarios del Tec.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

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

  function processInput(userText) {
    if (!userText.trim()) return;

    addMessage(userText, 'user');

    const typing = createTypingIndicator();
    messagesContainer.appendChild(typing);
    scrollToBottom();

    const delay = 400 + Math.random() * 600;

    setTimeout(() => {
      typing.remove();
      const match = findBestMatch(userText);

      if (match) {
        addMessage(match.response, 'bot', match.building || null);
      } else {
        addMessage(getDefaultResponse(), 'bot');
      }
    }, delay);
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
