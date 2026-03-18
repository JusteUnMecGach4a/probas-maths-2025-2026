function loadNavbar() {
    const navHTML = `
        <nav>
            <a href="index.html" id="nav-index">Accueil</a>
            <a href="conditionnelles.html" id="nav-cond">Conditionnelles</a>
            <a href="binomiale.html" id="nav-bin">Binomiale</a>
            <a href="poisson.html" id="nav-poi">Poisson</a>
            <a href="quiz.html" id="nav-quiz">Quiz</a>
            <button class="theme-toggle" onclick="toggleTheme()">🌓 Mode</button>
        </nav>
    `;
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) placeholder.innerHTML = navHTML;

    // Lien actif
    const page = window.location.pathname.split("/").pop() || "index.html";
    const mapping = {"index.html":"nav-index", "conditionnelles.html":"nav-cond", "binomiale.html":"nav-bin", "poisson.html":"nav-poi", "quiz.html":"nav-quiz"};
    if (mapping[page]) document.getElementById(mapping[page]).classList.add('active');
}

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    loadNavbar();
});
