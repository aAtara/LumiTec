/* ============================================
   Proxy de IA de LumiTec (Cloudflare Worker)
   Recibe la pregunta del chatbot y la reenvía a Gemini.
   La clave vive como secreto (env.GEMINI_API_KEY), nunca en el sitio.
   ============================================ */

import { INSTITUTIONAL_CONTEXT } from './context.js';

// Modelos vigentes: https://ai.google.dev/gemini-api/docs/models
// (gemini-2.0-flash fue dado de baja el 1 de junio de 2026)
const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const MAX_MESSAGE_LENGTH = 500;

const ALLOWED_ORIGINS = [
  'https://aatara.github.io',
  'http://localhost:8090',
  'http://127.0.0.1:8090',
];

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function jsonResponse(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

async function askGemini(message, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: INSTITUTIONAL_CONTEXT }]
      },
      contents: [{
        parts: [{ text: message }]
      }],
      generationConfig: {
        // Incluye los tokens de razonamiento: si es muy bajo la respuesta llega vacía
        maxOutputTokens: 1024,
        temperature: 0.7,
        thinkingConfig: { thinkingLevel: 'minimal' }
      }
    })
  });

  if (!response.ok) {
    console.error('Gemini respondió', response.status, await response.text());
    return null;
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  const text = parts.map(part => part.text || '').join('')
    // El chat muestra texto plano: quitar negritas de Markdown por si el modelo las usa
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .trim();
  return text || null;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Origen no permitido', { status: 403 });
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Método no permitido' }, 405, origin);
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'local';
    const { success } = await env.RATE_LIMITER.limit({ key: ip });
    if (!success) {
      return jsonResponse({ error: 'Demasiadas preguntas seguidas, espera un momento' }, 429, origin);
    }

    let message;
    try {
      ({ message } = await request.json());
    } catch {
      return jsonResponse({ error: 'JSON inválido' }, 400, origin);
    }
    if (typeof message !== 'string' || !message.trim() || message.length > MAX_MESSAGE_LENGTH) {
      return jsonResponse({ error: 'Mensaje inválido' }, 400, origin);
    }

    if (!env.GEMINI_API_KEY) {
      console.error('Falta el secreto GEMINI_API_KEY');
      return jsonResponse({ error: 'IA no configurada' }, 503, origin);
    }

    const reply = await askGemini(message.trim(), env.GEMINI_API_KEY);
    if (!reply) {
      return jsonResponse({ error: 'La IA no está disponible' }, 502, origin);
    }
    return jsonResponse({ reply }, 200, origin);
  },
};
