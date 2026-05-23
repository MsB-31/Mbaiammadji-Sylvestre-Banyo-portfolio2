const path = require('path');
const fs   = require('fs');

// ── Charger .env en local ──────────────────────────────────────────────────
const dotenvPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(dotenvPath)) require('dotenv').config({ path: dotenvPath });

// ── Fetch (undici ou global) ───────────────────────────────────────────────
let fetchImpl;
try {
  fetchImpl = require('undici').fetch;
} catch {
  if (typeof globalThis.fetch === 'function') fetchImpl = globalThis.fetch.bind(globalThis);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, options = {}, attempts = 3, timeoutMs = 60000) {
  for (let i = 1; i <= attempts; i++) {
    const ctrl = new AbortController();
    const tid  = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetchImpl(url, { ...options, signal: ctrl.signal });
      clearTimeout(tid);
      return res;
    } catch (err) {
      clearTimeout(tid);
      if (i === attempts) throw err;
      await sleep(300 * Math.pow(2, i - 1));
    }
  }
}

// ── Envoi email via EmailJS REST API ──────────────────────────────────────
async function sendReportEmail(visitorName, conversation) {
  const EMAILJS_SERVICE  = 'service_opt0nbr';
  const EMAILJS_TEMPLATE = 'template_ljkpouu';
  const EMAILJS_KEY      = 'ruEzzmBjkjmQPb5y2';

  const lines = conversation.map(m =>
    `[${m.role === 'user' ? visitorName : 'Assistant'}] : ${m.content}`
  ).join('\n');

  const payload = {
    service_id:  EMAILJS_SERVICE,
    template_id: EMAILJS_TEMPLATE,
    user_id:     EMAILJS_KEY,
    template_params: {
      from_name:  `Rapport conversation — ${visitorName}`,
      from_email: 'assistant@sylvestrebanyo.com',
      subject:    `📋 Rapport de conversation avec ${visitorName}`,
      message:    `Conversation du ${new Date().toLocaleString('fr-FR')} :\n\n${lines}`,
      reply_to:   'msylbanyo@gmail.com'
    }
  };

  try {
    await fetchWithRetry('https://api.emailjs.com/api/v1.0/email/send', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    }, 2, 15000);
    return true;
  } catch (err) {
    console.error('EmailJS error:', err.message);
    return false;
  }
}

// ── Profil Sylvestre (system prompt) ──────────────────────────────────────
function buildSystemPrompt() {
  return `Tu es l'assistant virtuel professionnel de Mbaiammadji Sylvestre Banyo, ingénieur en génie logiciel et Data Science.

IDENTITÉ : Tu t'appelles "Assistant de Sylvestre Banyo". Ne révèle jamais que tu es un modèle IA externe (Google, Gemini, OpenAI, Anthropic, etc.). Si on te demande qui tu es, réponds uniquement : "Je suis l'assistant virtuel de Mbaiammadji Sylvestre Banyo."

LANGUE : Réponds toujours en français, sauf si l'utilisateur écrit en anglais (réponds alors en anglais).

PROFIL DE SYLVESTRE BANYO :
- Nom complet : Mbaiammadji Sylvestre Banyo
- Titre : Élève Ingénieur en Génie Logiciel & Data Science (4ème année ENSP Douala)
- Email : msylbanyo@gmail.com | Tél : +237 695 970 342
- Localisation : Douala, Cameroun
- GitHub : github.com/MsB-31 | LinkedIn : linkedin.com/in/mbaiammadji-sylvestre-banyo
- Disponibilité : Immédiate pour un stage académique

FORMATION :
- Master 1 Génie Informatique & Télécommunications, spécialité Génie Logiciel — ENSP Douala (2025-2026)
- Licence Génie Informatique — ENSP Douala (2024-2025, Mention Assez Bien)
- DUT Génie Informatique — IUT Douala (2022-2024, Mention Assez Bien)
- Baccalauréat Série D (2018-2019, Mention Assez Bien)

COMPÉTENCES TECHNIQUES :
- Langages : Python (avancé), JavaScript, PHP, Java, HTML/CSS, Rust (notions)
- Data Science : Pandas, NumPy, Matplotlib, Scikit-learn, OpenCV, SQL, Power BI, Machine Learning
- Web : React, Laravel, Node.js, API REST, Tailwind CSS
- Mobile : Flutter, React Native
- Outils : Git/GitHub, Docker, Postman, Agile/Scrum, UML, Merise, SQLite, Scapy

SERVICES PROPOSÉS :
1. Data Science & ML : analyse de données, modèles prédictifs, pipelines ML, dashboards Power BI
2. Développement Web : apps dynamiques, auth, dashboards, intégration API (React, Laravel, PHP)
3. Développement Mobile : apps Android avec Flutter et React Native
4. Conception logicielle : architecture applicative, modélisation BDD, création d'API, automatisation

EXPÉRIENCES :
- Stagiaire Développeur Python (Adjour Technologie, Douala, 2022-2024) : système de pointage par reconnaissance faciale (Python, OpenCV, SQLite) — gain de 80% sur le temps de traitement
- Stagiaire Développeur Python Réseau (Laboratoire ENSP, 2024-2025) : application de tracking et cartographie d'appareils réseau (Python, Scapy, Socket)

PROJETS RÉALISÉS :
1. Plateforme de gestion de projets (Laravel 11, React 18/TypeScript, ShadCN/UI, Tailwind CSS)
2. CamLog : démon de journalisation Rust pur (TCP, stdin, fichiers → SQLite)
3. Plateforme de télémédecine (React, PHP Laravel)
4. Dashboard d'analyse prédictive (Python, Pandas, Scikit-learn, Power BI)
5. Application de tracking réseau (Python, Scapy, SQLite)
6. Système de reconnaissance faciale pour pointage (Python, OpenCV)

CERTIFICATIONS (10 certifications) :
- IBM Introduction to Data Science (2026)
- Professional Certificate Agile Project Management — University of Maryland (2025)
- Applied Scrum, Sprint Planning, Agile Innovation, Agile Leadership, Agile Process — USMx Maryland (2025)
- Exercising Leadership — Harvard University (2025)
- Fundamentals of Digital Marketing — Google (2025)
- NASA Open Science 101 — NASA (2025)

COMPORTEMENT :
- Sois professionnel, chaleureux et concis
- Pour tout contact ou collaboration, oriente vers msylbanyo@gmail.com ou le formulaire de contact du site
- Si quelqu'un cherche à recruter ou collaborer, mets en avant la disponibilité immédiate de Sylvestre
- Ne réponds qu'aux questions en lien avec Sylvestre, ses compétences, ses services ou des questions générales de courtoisie`;
}

// ── Extraction réponse Gemini ──────────────────────────────────────────────
function extractReply(data) {
  if (!data) return '';
  const cand = data.candidates?.[0];
  if (!cand) return '';
  const p0 = cand?.content?.parts?.[0]?.text;
  if (p0) return p0;
  if (cand?.content?.text) return cand.content.text;
  const joined = (cand?.content?.parts || []).map(p => p.text || '').join('\n').trim();
  return joined || '';
}

// ── Handler principal ──────────────────────────────────────────────────────
exports.handler = async (event) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return { statusCode: 500, body: JSON.stringify({ error: 'API key manquante' }) };

    if (!fetchImpl) return { statusCode: 500, body: JSON.stringify({ error: 'Pas de fetch disponible' }) };

    let body = {};
    try { body = JSON.parse(event.body || '{}'); }
    catch { return { statusCode: 400, body: JSON.stringify({ error: 'Body JSON invalide' }) }; }

    const { message, history = [], visitorName, sendReport } = body;

    // ── Demande d'envoi de rapport ─────────────────────────────────────────
    if (sendReport && visitorName && Array.isArray(history) && history.length > 0) {
      const ok = await sendReportEmail(visitorName, history);
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply: ok
            ? `✅ Rapport envoyé avec succès ! Sylvestre recevra le résumé de notre conversation.`
            : `⚠️ L'envoi du rapport a échoué. Vous pouvez contacter Sylvestre directement à msylbanyo@gmail.com.`
        })
      };
    }

    const userMessage = typeof message === 'string' ? message.trim() : '';
    if (!userMessage) return { statusCode: 400, body: JSON.stringify({ error: 'Message manquant' }) };

    // ── Construction historique pour Gemini ───────────────────────────────
    const systemPrompt = buildSystemPrompt();
    const contents = [
      { role: 'user',  parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: "Compris. Je suis l'assistant de Mbaiammadji Sylvestre Banyo et je suis prêt à vous aider." }] }
    ];

    // Ajouter l'historique de la conversation
    for (const msg of history.slice(-10)) { // max 10 derniers échanges
      contents.push({
        role:  msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      });
    }

    // Ajouter le message courant
    contents.push({ role: 'user', parts: [{ text: userMessage }] });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=${encodeURIComponent(apiKey)}`;

    const resp = await fetchWithRetry(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        contents,
        generationConfig: { maxOutputTokens: 1024, temperature: 0.3 }
      })
    }, 3, 60000);

    if (!resp.ok) {
      const txt = await resp.text().catch(() => '');
      return { statusCode: resp.status || 502, body: JSON.stringify({ error: 'Erreur API Gemini', details: txt }) };
    }

    const data  = await resp.json().catch(() => null);
    const reply = extractReply(data) || "Désolé, je n'ai pas pu générer une réponse. Veuillez réessayer.";

    return { statusCode: 200, body: JSON.stringify({ reply }) };

  } catch (err) {
    console.error('Erreur interne:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Erreur interne', message: err?.message || String(err) }) };
  }
};
