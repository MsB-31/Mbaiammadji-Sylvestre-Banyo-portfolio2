// ═══════════════════════════════════════════════════════
//  PORTFOLIO — Script principal
//  Sylvestre Banyo
// ═══════════════════════════════════════════════════════

// ── 1. Barres de compétences ───────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".progress").forEach(progress => {
    const value   = parseInt(progress.style.getPropertyValue("--progress-value"));
    const bar     = progress.querySelector(".progress-in");
    const percent = progress.querySelector(".skill-percent");
    if (isNaN(value)) return;
    setTimeout(() => {
      bar.style.transition = "width 1.5s ease";
      bar.style.width = value + "%";
    }, 300);
    let current = 0;
    const totalFrames = Math.round(1500 / (1000 / 30));
    const increment   = value / totalFrames;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) { current = value; clearInterval(interval); }
      percent.textContent = Math.round(current) + "%";
    }, 1000 / 30);
  });
});

// ── 2. Animation timeline (Éducation / Expériences) ───
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".timeline-item").forEach(item => observer.observe(item));
});

// ── 3. Navigation — section unique ─────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.querySelector(".nav-toggler");
  const aside      = document.querySelector(".aside");
  const overlay    = document.getElementById("nav-overlay");
  const navLinks   = document.querySelectorAll(".nav a");
  const sections   = document.querySelectorAll("section[id]");

  // Afficher une seule section
  function showSection(targetId) {
    sections.forEach(s => {
      s.style.display = ("#" + s.id === targetId) ? "block" : "none";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Lien actif
  function setActiveLink(targetId) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === targetId);
    });
  }

  // Ouvrir / Fermer menu mobile
  function openMenu()  { aside.classList.add("open");    if (overlay) overlay.classList.add("active"); }
  function closeMenu() { aside.classList.remove("open"); if (overlay) overlay.classList.remove("active"); }

  if (navToggler) {
    navToggler.addEventListener("click", e => {
      e.stopPropagation();
      aside.classList.contains("open") ? closeMenu() : openMenu();
    });
  }
  if (overlay) overlay.addEventListener("click", closeMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      showSection(targetId);
      setActiveLink(targetId);
      closeMenu();
    });
  });

  // Initialisation : afficher #home
  showSection("#home");
  setActiveLink("#home");
});

// ── 4. Typewriter — professions défilantes ─────────────
(function () {
  const el = document.getElementById("typed-profession");
  if (!el) return;

  const professionsByLang = {
    fr: ["Ingénieur de conception", "Data Scientist", "CEO de The Strategy"],
    en: ["Design Engineer",         "Data Scientist", "CEO of The Strategy"]
  };

  let professions = professionsByLang[localStorage.getItem("portfolio-lang") || "en"];
  let profIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  window.updateTypedProfessions = function (lang) {
    professions = professionsByLang[lang] || professionsByLang["en"];
    profIndex   = 0;
    charIndex   = 0;
    isDeleting  = false;
  };

  function type() {
    const current = professions[profIndex];
    if (!isDeleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 80);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        profIndex  = (profIndex + 1) % professions.length;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, 40);
    }
  }
  // Démarrer après que i18n ait eu le temps d'appliquer la langue
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("portfolio-lang") || "en";
    professions = professionsByLang[savedLang];
    setTimeout(type, 800);
  });
})();

// ── 5. Formulaire de contact — EmailJS ─────────────────
document.addEventListener("DOMContentLoaded", function () {
  const btn    = document.getElementById("contact-submit");
  const status = document.getElementById("contact-status");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const name    = document.getElementById("contact-name").value.trim();
    const email   = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      showStatus("Veuillez remplir tous les champs.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus("Adresse email invalide.", "error");
      return;
    }

    btn.disabled     = true;
    btn.textContent  = "Envoi en cours…";

    emailjs.send("service_opt0nbr", "template_ljkpouu", {
      from_name:  name,
      from_email: email,
      subject:    subject,
      message:    message,
      reply_to:   email
    }).then(() => {
      showStatus("✓ Message envoyé ! Je vous répondrai très bientôt.", "success");
      document.getElementById("contact-name").value    = "";
      document.getElementById("contact-email").value   = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";
      btn.textContent = "Envoyer le message";
      btn.disabled    = false;
    }, err => {
      showStatus("Une erreur est survenue. Contactez-moi directement par email.", "error");
      console.error("EmailJS error:", err);
      btn.textContent = "Envoyer le message";
      btn.disabled    = false;
    });
  });

  function showStatus(msg, type) {
    status.textContent  = msg;
    status.style.display = "block";
    status.style.color   = type === "success" ? "#28a745" : "#dc3545";
    if (type === "success") setTimeout(() => { status.style.display = "none"; }, 6000);
  }
});

// ── 6. Assistant virtuel ────────────────────────────────
(function () {
  const openBtn    = document.getElementById("open-assistant");
  const closeBtn   = document.getElementById("close-assistant");
  const popup      = document.getElementById("assistant-popup");
  const nameScreen = document.getElementById("name-screen");
  const chatScreen = document.getElementById("chat-screen");
  const nameInput  = document.getElementById("visitor-name-input");
  const startBtn   = document.getElementById("start-chat-btn");
  const chatForm   = document.getElementById("chat-form");
  const chatBox    = document.getElementById("chat-box");
  const chatInput  = document.getElementById("chat-input");

  if (!openBtn) return;

  let visitorName = "";
  let chatHistory = [];
  let isTyping    = false;

  openBtn.addEventListener("click", () => popup.classList.toggle("hidden"));

  window.addEventListener("beforeunload", () => sendReportSilently());

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    sendReportSilently();
  });

  function startChat() {
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.style.borderColor = "#e53e3e";
      nameInput.placeholder = "Veuillez entrer votre nom...";
      return;
    }
    visitorName = name;
    nameScreen.classList.add("hidden");
    chatScreen.classList.remove("hidden");
    addMessage(`Bonjour **${visitorName}** ! 👋 Je suis l'assistant virtuel de Mbaiammadji Sylvestre Banyo, ingénieur en génie logiciel et Data Science. Comment puis-je vous aider ?`, "bot");
  }

  startBtn.addEventListener("click", startChat);
  nameInput.addEventListener("keydown", e => { if (e.key === "Enter") startChat(); });

  chatForm.addEventListener("submit", async e => {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (!msg || isTyping) return;
    chatInput.value = "";

    addMessage(msg, "user");
    chatHistory.push({ role: "user", content: msg });

    const typing = showTyping();
    isTyping = true;

    try {
      const res  = await fetch("/.netlify/functions/chat", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ message: msg, history: chatHistory.slice(-10), visitorName })
      });
      const data = await res.json();
      typing.remove();
      const reply = data.reply || "Désolé, je n'ai pas pu générer une réponse.";
      addMessage(reply, "bot");
      chatHistory.push({ role: "assistant", content: reply });
    } catch {
      typing.remove();
      addMessage("⚠️ Erreur de connexion. Veuillez réessayer.", "bot");
    }
    isTyping = false;
  });

  async function sendReportSilently() {
    if (!visitorName || chatHistory.length < 2) return;
    try {
      await fetch("/.netlify/functions/chat", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ sendReport: true, visitorName, history: chatHistory })
      });
    } catch { /* silencieux */ }
  }

  function addMessage(text, sender) {
    const wrapper = document.createElement("div");
    wrapper.className = `message-wrapper ${sender}`;

    if (sender === "bot") {
      const av = document.createElement("img");
      av.src = "images/bot.jpg"; av.className = "avatar"; av.alt = "Assistant";
      wrapper.appendChild(av);
    }

    const bubble = document.createElement("div");
    bubble.className = `msg ${sender}`;
    bubble.innerHTML = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
    wrapper.appendChild(bubble);

    if (sender === "user") {
      const av = document.createElement("img");
      av.src = "images/Sylvestre-Banyo.jpg"; av.className = "avatar"; av.alt = visitorName || "Vous";
      wrapper.appendChild(av);
    }

    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showTyping() {
    const wrapper = document.createElement("div");
    wrapper.className = "message-wrapper bot";
    const av = document.createElement("img");
    av.src = "images/bot.jpg"; av.className = "avatar"; av.alt = "Assistant";
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    wrapper.appendChild(av);
    wrapper.appendChild(typing);
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
    return wrapper;
  }
})();
