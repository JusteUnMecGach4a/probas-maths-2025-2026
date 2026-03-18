// --- CONFIGURATION TAILWIND DARK MODE ---
tailwind.config = {
  darkMode: 'class',
}

// --- GESTION DU MENU (NAV) ---
function loadNavbar() {
    const navHTML = `
        <nav class="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-2 md:gap-6 py-3">
                <a href="index.html" id="nav-index" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Accueil</a>
                <a href="bases.html" id="nav-bases" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Bases</a>
                <a href="conditionnelles.html" id="nav-cond" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Conditionnelles</a>
                <a href="binomiale.html" id="nav-bin" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Binomiale</a>
                <a href="poisson.html" id="nav-poi" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Poisson</a>
                <a href="quiz.html" id="nav-quiz" class="px-3 py-2 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Quiz</a>
                
                <button onclick="toggleTheme()" class="ml-2 p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:scale-110 transition">
                    <span id="theme-icon">🌓</span>
                </button>
            </div>
        </nav>
    `;
    
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) placeholder.innerHTML = navHTML;

    // Lien actif
    const page = window.location.pathname.split("/").pop() || "index.html";
    const mapping = {
        "index.html": "nav-index", "bases.html": "nav-bases",
        "conditionnelles.html": "nav-cond", "binomiale.html": "nav-bin",
        "poisson.html": "nav-poi", "quiz.html": "nav-quiz"
    };
    if (mapping[page]) {
        const el = document.getElementById(mapping[page]);
        el.classList.add('text-blue-600', 'dark:text-blue-400', 'border-b-2', 'border-blue-600');
    }
}

// --- GESTION DU THÈME ---
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// --- INITIALISATION ---
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
    loadNavbar();
});
