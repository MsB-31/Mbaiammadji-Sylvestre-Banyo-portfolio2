// Récupération des éléments
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyles = document.querySelectorAll(".alternate-style");

// Toggle du style switcher
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// Fermeture automatique lors du scroll
window.addEventListener("scroll", () => {
    styleSwitcher.classList.remove("open");
});

// Gestion des thèmes
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        style.disabled = (color !== style.getAttribute("title"));
    });
    // Sauvegarde du thème choisi
    localStorage.setItem("themeColor", color);
}

// Charger le thème sauvegardé ou appliquer le vert par défaut
const savedTheme = localStorage.getItem("themeColor");
if (savedTheme) {
    setActiveStyle(savedTheme);
} else {
    setActiveStyle("color-3"); // thème par défaut
}
//   theme light and dark mode
// Sélecteurs
const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");

// Toggle du mode clair/sombre
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Met à jour l'icône
    if(document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("themeMode", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("themeMode", "light");
    }
});

// Initialisation au chargement
window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("themeMode");

    if(savedMode === "dark") {
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});