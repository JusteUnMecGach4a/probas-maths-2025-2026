// --- GESTION DU MENU (NAV) ---
function loadNavbar() {
    const navHTML = `
        <nav>
            <a href="index.html" id="nav-index">Accueil</a>
            <a href="conditionnelles.html" id="nav-conditionnelles">Conditionnelles</a>
            <a href="binomiale.html" id="nav-binomiale">Binomiale</a>
            <a href="poisson.html" id="nav-poisson">Poisson</a>
            <a href="quiz.html" id="nav-quiz">Quiz</a>
            <button class="theme-toggle" onclick="toggleTheme()">🌓 Thème</button>
        </nav>
    `;
    
    // On injecte le HTML dans la balise <div id="nav-placeholder"></div>
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }

    // Gestion automatique du lien "actif" (souligné)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = {
        "index.html": "nav-index",
        "conditionnelles.html": "nav-conditionnelles",
        "binomiale.html": "nav-binomiale",
        "poisson.html": "nav-poisson",
        "quiz.html": "nav-quiz"
    };
    
    const activeId = navLinks[currentPage];
    if (activeId) {
        document.getElementById(activeId).classList.add('active');
    }
}

// --- GESTION DU THÈME ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

// --- INITIALISATION AU CHARGEMENT ---
window.addEventListener('DOMContentLoaded', () => {
    // 1. Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // 2. Charger le menu
    loadNavbar();
});
