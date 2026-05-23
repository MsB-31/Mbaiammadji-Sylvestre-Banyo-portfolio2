// ═══════════════════════════════════════════════════════════════
//  i18n — Système de traduction EN / FR
//  Langue par défaut : EN (anglais)
// ═══════════════════════════════════════════════════════════════

const translations = {

  en: {
    // ── Navigation ──────────────────────────────────────────────
    "nav-home":          "Home",
    "nav-about":         "About",
    "nav-services":      "Services",
    "nav-portfolio":     "Portfolio",
    "nav-contact":       "Contact",
    "nav-curriculum":    "Resume",
    "nav-certification": "Certifications",

    // ── Home ────────────────────────────────────────────────────
    "home-hello":   "Hi! I am",
    "label-iam":    "I am",
    "home-intro":   "Design Engineer in computer science and telecommunications, specializing in software engineering, data science, and AI. Founder and CEO of the startup <strong>The Strategy</strong>, I drive digital innovation by combining software architecture, intelligent data processing, and strategic decision-making. Known for strong project management skills, blending rigor, leadership, and the ability to lead teams toward objectives.",
    "home-hire":    "I'm ready to join your team",

    // ── About ───────────────────────────────────────────────────
    "about-title":       "About Me",
    "about-subtitle":    "I am Mbaiammadji Sylvestre Banyo",
    "about-role":        "Design Engineer & CEO of The Strategy",
    "about-text":        "I am a software engineer passionate about data science and intelligent technologies. As the founder and CEO of the startup <strong>The Strategy</strong>, I drive projects combining digital innovation, software architecture, and data-driven solutions. My career has led me to develop a rigorous analytical approach, blending software design, data processing, and intelligent automation. I place great importance on code quality, system scalability, and the performance of analytical models. Curious and solution-oriented, I enjoy exploring the intersections between artificial intelligence, big data, and software engineering to transform data into strategic assets. My goal is to create reliable, efficient, and sustainable applications capable of generating real value from information.",
    "info-birthdate":    "Date of birth:",
    "info-age":          "Age:",
    "info-website":      "Website:",
    "info-email":        "Email:",
    "info-degree":       "Degree:",
    "info-phone":        "Phone number:",
    "info-city":         "City:",
    "info-freelance":    "Freelance:",
    "info-available":    "Available",
    "info-city-val":     "Douala, Cameroon",
    "btn-download-cv":   "Download my Resume",
    "btn-hire":          "Hire me",

    // ── Skills / Education / Experience ─────────────────────────
    "education-title":   "Education",
    "experience-title":  "Experience",
    "edu-1-title":       "Master's in Computer Engineering & Telecommunications",
    "edu-1-text":        "At the École Nationale Supérieure Polytechnique de Douala, specialization in Software Engineering.",
    "edu-2-title":       "Bachelor's in Computer Engineering & Telecommunications",
    "edu-2-text":        "At the École Nationale Supérieure Polytechnique de Douala, specialization in Software Engineering.<br>Grade: Merit",
    "edu-3-title":       "DUT — University Diploma in Computer Engineering",
    "edu-3-text":        "University Diploma of Technology obtained at the Institut Universitaire de Technologie de Douala (IUT).<br>Grade: Merit",
    "edu-4-title":       "High School Diploma — Series D",
    "edu-4-text":        "Obtained at Lycée-Collège le Bon Berger. Options: Philosophy, Mathematics, Physics-Chemistry and Biology.<br>Grade: Merit",
    "exp-1-title":       "Professional Certifications",
    "exp-1-text":        "— <strong>Leadership</strong>: <em>Exercising Leadership Foundational Principles</em> — HarvardX, Harvard University.<br>— <strong>Agile Project Management</strong>: <em>Applied Scrum for Agile Project Management</em> — USMx, University of Maryland.<br>— <strong>NASA Open Science 101</strong>: Training in open science and collaborative research practices — NASA.<br>— <strong>Fundamentals of Digital Marketing</strong>: Mastery of digital marketing fundamentals and Google tools — Google Digital Garage.<br>— <strong>Introduction to Data Science</strong>: Foundations of data science, data project lifecycle and analytical tools — IBM / edX.",
    "exp-2-title":       "Academic Internship — ENSP Douala",
    "exp-2-text":        "Theme: Design and development of a network device tracking application — locating connected equipment and network cartography.",
    "exp-3-title":       "Academic Internship — Adjour Technology",
    "exp-3-text":        "Theme: Design and development of a facial recognition attendance system, to address issues of tardiness, absenteeism, and traditional attendance methods.",

    // ── Services ────────────────────────────────────────────────
    "services-title":    "My Services",
    "serv-1-title":      "Data Science & Machine Learning",
    "serv-1-text":       "Data analysis, predictive model design and Machine Learning solutions, visualization and interactive dashboards for decision-making. Tools: Python (Pandas, NumPy, Scikit-learn, Matplotlib), R and Power BI.",
    "serv-2-title":      "Mobile Development",
    "serv-2-text":       "Development of modern Android mobile applications with smooth, interactive and performant interfaces, using Flutter and React Native for an optimal user experience.",
    "serv-3-title":      "Web Development",
    "serv-3-text":       "Development of dynamic, user-experience-oriented web applications: authentication, dashboards, data management and API integration. Stack: HTML, CSS, JavaScript, React, PHP and Python.",
    "serv-4-title":      "Software Design & Development",
    "serv-4-text":       "Application architecture, database modeling, API creation and process automation. UML, Merise and Agile methods — strengthened by a professional Scrum project management certification.",

    // ── Portfolio ───────────────────────────────────────────────
    "portfolio-title":   "My Portfolio",
    "portfolio-heading": "My latest projects:",
    "proj-1-title":      "Project Management Platform",
    "proj-1-desc":       "All-in-one collaborative platform — Laravel 11, React 18 / TypeScript, ShadCN/UI, Tailwind CSS, RESTful API.",
    "proj-1-btn":        "View on GitHub",
    "proj-2-title":      "CamLog — Logging Daemon",
    "proj-2-desc":       "Pure Rust daemon receiving logs from TCP, stdin and files, structuring and persisting them in SQLite. GL4 Systems Programming project.",
    "proj-2-btn":        "View on GitHub",
    "proj-3-title":      "Telemedicine Platform",
    "proj-3-desc":       "Web telemedicine application with appointment management, video consultations and patient records — React, PHP Laravel.",
    "proj-3-btn":        "View on GitHub",
    "proj-4-title":      "Predictive Analytics Dashboard",
    "proj-4-desc":       "Complete ML pipeline: data cleaning, Random Forest models, Matplotlib visualizations and interactive Power BI dashboard.",
    "proj-4-btn":        "View on GitHub",
    "proj-5-title":      "Network Tracking & Mapping",
    "proj-5-desc":       "Automated local network scan, IP/MAC collection, anomaly detection and monitoring dashboard — Python, Scapy, SQLite. ENSP internship 2024–2025.",
    "proj-6-title":      "Facial Recognition Attendance System",
    "proj-6-desc":       "Complete real-time face detection and recognition pipeline, automated attendance tracking — Python, OpenCV, face_recognition, SQLite. 80% reduction in processing time.",

    // ── Contact ─────────────────────────────────────────────────
    "contact-title":     "Contact Me",
    "contact-q":         "Do you have any questions?",
    "contact-sub":       "I am at your service",
    "contact-mail-title":"Send me an email",
    "contact-mail-sub":  "I respond very quickly",
    "contact-call":      "Call me",
    "contact-location":  "Location",
    "contact-city":      "Douala, Cameroon",
    "placeholder-name":  "Name",
    "placeholder-email": "Email",
    "placeholder-subject":"Subject",
    "placeholder-msg":   "Message",
    "btn-send":          "Send message",

    // ── Curriculum ──────────────────────────────────────────────
    "curriculum-title":  "Resume",
    "cv-fr-title":       "Resume in French",
    "cv-en-title":       "Resume in English",
    "btn-dl":            "Download",

    // ── Certifications ──────────────────────────────────────────
    "certif-title":      "My Certifications",
    "certif-heading":    "My current certifications:",
  },

  fr: {
    // ── Navigation ──────────────────────────────────────────────
    "nav-home":          "Accueil",
    "nav-about":         "À propos",
    "nav-services":      "Services",
    "nav-portfolio":     "Portfolio",
    "nav-contact":       "Contact",
    "nav-curriculum":    "Curriculum vitae",
    "nav-certification": "Mes certifications",

    // ── Home ────────────────────────────────────────────────────
    "home-hello":   "Salut ! je suis",
    "label-iam":    "Je suis",
    "home-intro":   "Ingénieur de conception en génie informatique et télécommunications, avec une spécialisation en génie logiciel, data science et intelligence artificielle. Fondateur et CEO de la startup <strong>The Strategy</strong>, je pilote l'innovation numérique en combinant architecture logicielle, traitement intelligent des données et prise de décision stratégique. Reconnu pour mes solides compétences en gestion de projet, alliant rigueur, leadership et capacité à piloter des équipes vers l'atteinte des objectifs.",
    "home-hire":    "Je suis prêt à rejoindre votre équipe",

    // ── About ───────────────────────────────────────────────────
    "about-title":       "À propos de moi",
    "about-subtitle":    "Je suis Mbaiammadji Sylvestre Banyo",
    "about-role":        "Ingénieur de conception & CEO de The Strategy",
    "about-text":        "Je suis ingénieur logiciel passionné par la data science et les technologies intelligentes. Fondateur et CEO de la startup <strong>The Strategy</strong>, je pilote des projets combinant innovation numérique, architecture logicielle et solutions orientées données. Mon parcours m'a conduit à développer une approche analytique rigoureuse, mêlant conception logicielle, traitement des données et automatisation intelligente. J'accorde une importance particulière à la qualité du code, à la scalabilité des systèmes et à la performance des modèles analytiques. Curieux et orienté solution, j'aime explorer les interactions entre intelligence artificielle, big data et ingénierie logicielle pour transformer les données en leviers décisionnels. Mon objectif est de créer des applications fiables, efficaces et durables, capables de générer une réelle valeur à partir de l'information.",
    "info-birthdate":    "Date de naissance :",
    "info-age":          "Âge :",
    "info-website":      "Site web :",
    "info-email":        "Email :",
    "info-degree":       "Diplôme :",
    "info-phone":        "Numéro de téléphone :",
    "info-city":         "Ville :",
    "info-freelance":    "Freelance :",
    "info-available":    "Disponible",
    "info-city-val":     "Douala, Cameroun",
    "btn-download-cv":   "Télécharger mon CV",
    "btn-hire":          "Recrutez-moi",

    // ── Skills / Education / Experience ─────────────────────────
    "education-title":   "Éducation",
    "experience-title":  "Expériences",
    "edu-1-title":       "Master en Génie Informatique et Télécommunication",
    "edu-1-text":        "À l'École Nationale Supérieure Polytechnique de Douala, spécialité Génie Logiciel.",
    "edu-2-title":       "Licence en Génie Informatique et Télécommunication",
    "edu-2-text":        "À l'École Nationale Supérieure Polytechnique de Douala, spécialité Génie Logiciel.<br>Mention : Assez bien",
    "edu-3-title":       "DUT en Génie Informatique",
    "edu-3-text":        "Diplôme Universitaire de Technologie obtenu à l'Institut Universitaire de Technologie de Douala (IUT).<br>Mention : Assez bien",
    "edu-4-title":       "Baccalauréat de l'Enseignement du Second Degré — Série D",
    "edu-4-text":        "Obtenu au Lycée-Collège le Bon Berger. Option : Philosophie, Mathématiques, Sciences Physiques-Chimie et Biologie.<br>Mention : Assez bien",
    "exp-1-title":       "Formations professionnelles certifiantes",
    "exp-1-text":        "— <strong>Leadership</strong> : <em>Exercising Leadership Foundational Principles</em> — HarvardX, Harvard University.<br>— <strong>Gestion de projet Agile</strong> : <em>Applied Scrum for Agile Project Management</em> — USMx, University of Maryland.<br>— <strong>NASA Open Science 101</strong> : Formation à la science ouverte et aux pratiques de recherche collaborative — NASA.<br>— <strong>Fundamentals of Digital Marketing</strong> : Maîtrise des fondamentaux du marketing digital et des outils Google — Google Digital Garage.<br>— <strong>Introduction to Data Science</strong> : Fondements de la science des données, cycle de vie d'un projet data et outils analytiques — IBM / edX.",
    "exp-2-title":       "Stage académique — ENSP Douala",
    "exp-2-text":        "Thème : Conception et réalisation d'une application de tracking d'appareils dans un réseau — localisation des équipements connectés et cartographie du réseau.",
    "exp-3-title":       "Stage académique — Adjour-Technologie",
    "exp-3-text":        "Thème : Conception et réalisation d'une application de pointage par reconnaissance faciale, pour pallier aux problèmes de retard, d'absence et aux méthodes traditionnelles de pointage.",

    // ── Services ────────────────────────────────────────────────
    "services-title":    "Mes Services",
    "serv-1-title":      "Data Science & Machine Learning",
    "serv-1-text":       "Analyse de données, conception de modèles prédictifs et solutions de Machine Learning, visualisation et tableaux de bord interactifs pour la prise de décision. Outils : Python (Pandas, NumPy, Scikit-learn, Matplotlib), R et Power BI.",
    "serv-2-title":      "Développement Mobile",
    "serv-2-text":       "Conception d'applications mobiles Android modernes avec des interfaces fluides, interactives et performantes, en utilisant Flutter et React Native pour une expérience utilisateur optimale.",
    "serv-3-title":      "Développement Web",
    "serv-3-text":       "Développement d'applications web dynamiques orientées expérience utilisateur : authentification, tableaux de bord, gestion de données et intégration d'API. Stack : HTML, CSS, JavaScript, React, PHP et Python.",
    "serv-4-title":      "Conception & Développement logiciel",
    "serv-4-text":       "Architecture applicative, modélisation de bases de données, création d'API et automatisation de processus. Méthodes UML, Merise et Agile — renforcées par une certification professionnelle en gestion de projet Scrum.",

    // ── Portfolio ───────────────────────────────────────────────
    "portfolio-title":   "Mon Portfolio",
    "portfolio-heading": "Mes derniers projets :",
    "proj-1-title":      "Plateforme de gestion de projets",
    "proj-1-desc":       "Application collaborative tout-en-un — Laravel 11, React 18 / TypeScript, ShadCN/UI, Tailwind CSS, API RESTful.",
    "proj-1-btn":        "Voir sur GitHub",
    "proj-2-title":      "CamLog — Démon de journalisation",
    "proj-2-desc":       "Démon Rust pur recevant des logs TCP, stdin et fichiers, les structurant et les persistant dans SQLite. Projet GL4 Programmation Système.",
    "proj-2-btn":        "Voir sur GitHub",
    "proj-3-title":      "Plateforme de télémédecine",
    "proj-3-desc":       "Application web de télémédecine avec gestion de rendez-vous, consultations vidéo et dossiers patients — React, PHP Laravel.",
    "proj-3-btn":        "Voir sur GitHub",
    "proj-4-title":      "Dashboard d'analyse prédictive",
    "proj-4-desc":       "Pipeline ML complet : nettoyage de données, modèles Random Forest, visualisations Matplotlib et tableau de bord Power BI interactif.",
    "proj-4-btn":        "Voir sur GitHub",
    "proj-5-title":      "Tracking & Cartographie réseau",
    "proj-5-desc":       "Scan automatisé du réseau local, collecte IP/MAC, détection d'anomalies et dashboard de suivi — Python, Scapy, SQLite. Stage ENSP 2024–2025.",
    "proj-6-title":      "Pointage par reconnaissance faciale",
    "proj-6-desc":       "Pipeline complet de détection et reconnaissance faciale en temps réel, suivi de présence automatisé — Python, OpenCV, face_recognition, SQLite. Gain de 80% sur le temps de traitement.",

    // ── Contact ─────────────────────────────────────────────────
    "contact-title":     "Me contacter",
    "contact-q":         "Avez-vous des questions ?",
    "contact-sub":       "Je suis à votre service",
    "contact-mail-title":"Envoyez-moi un email",
    "contact-mail-sub":  "Je suis très réactif",
    "contact-call":      "Appelez-moi",
    "contact-location":  "Localisation",
    "contact-city":      "Douala, Cameroun",
    "placeholder-name":  "Nom",
    "placeholder-email": "Email",
    "placeholder-subject":"Objet",
    "placeholder-msg":   "Message",
    "btn-send":          "Envoyer le message",

    // ── Curriculum ──────────────────────────────────────────────
    "curriculum-title":  "Curriculum vitae",
    "cv-fr-title":       "Curriculum vitae en français",
    "cv-en-title":       "Curriculum vitae en anglais",
    "btn-dl":            "Télécharger",

    // ── Certifications ──────────────────────────────────────────
    "certif-title":      "Mes certifications",
    "certif-heading":    "Mes certifications actuelles :",
  }
};

// ── Langue courante ───────────────────────────────────────────────────────
let currentLang = localStorage.getItem("portfolio-lang") || "en";

// ── Appliquer la traduction ───────────────────────────────────────────────
function applyTranslation(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  const t = translations[lang];

  // Tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // Mettre à jour le bouton
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.querySelector(".lang-active").textContent = lang.toUpperCase();
    btn.querySelector(".lang-other").textContent  = lang === "fr" ? "EN" : "FR";
  }

  // Mettre à jour l'attribut lang de la page
  document.documentElement.lang = lang;

  // Mettre à jour les professions du typewriter
  if (window.updateTypedProfessions) window.updateTypedProfessions(lang);
}

// ── Initialisation ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      applyTranslation(currentLang === "en" ? "fr" : "en");
    });
  }
  applyTranslation(currentLang);
});
