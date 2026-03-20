// Configuration Tailwind pour le mode sombre
tailwind.config = { darkMode: 'class' }

function loadNavbar() {
    const navHTML = `
        <nav class="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center py-3">
                <div class="flex flex-wrap gap-1 md:gap-2 lg:gap-4">
                    <a href="index.html" id="nav-index" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Accueil</a>
                    <a href="bases.html" id="nav-bases" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Bases</a>
                    <a href="conditionnelles.html" id="nav-cond" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Cond.</a>
                    <a href="binomiale.html" id="nav-bin" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Binomiale</a>
                    <a href="poisson.html" id="nav-poi" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Poisson</a>
                    <a href="outils.html" id="nav-outils" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Outils</a>
                    <a href="quiz.html" id="nav-quiz" class="px-2 md:px-3 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm md:text-base">Quiz</a>
                </div>
                <button onclick="toggleTheme()" class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-110 transition">
                    <span id="theme-icon">🌓</span>
                </button>
            </div>
        </nav>
    `;
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) placeholder.innerHTML = navHTML;

    // Gestion de l'état actif
    const page = window.location.pathname.split("/").pop() || "index.html";
    const mapping = {
        "index.html":"nav-index", "bases.html":"nav-bases", "conditionnelles.html":"nav-cond", 
        "binomiale.html":"nav-bin", "poisson.html":"nav-poi", "outils.html":"nav-outils", "quiz.html":"nav-quiz"
    };
    if (mapping[page]) {
        document.getElementById(mapping[page])?.classList.add('text-blue-600', 'dark:text-blue-400', 'bg-blue-50', 'dark:bg-blue-900/30');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
    loadNavbar();
});
