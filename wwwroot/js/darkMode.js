
// Função para definir o modo escuro.
function setDarkMode(darkMode) {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('dark-mode', darkMode);
    document.getElementById('dark-mode-status').textContent = darkMode ? '(Modo Escuro)' : '(Modo Claro)';
    const navbar = document.getElementById('navbar');
    const table = document.getElementById("table");
    console.log(table);
    if (darkMode) {
        navbar.classList.add('navbar-dark', 'bg-dark');
        table.classList.add("table-dark");
    } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        table.classList.remove("table-dark");
    }
}

// Função para alternar o modo escuro.
function toggleDarkMode() {
    const currentMode = document.body.classList.contains('dark-mode');
    setDarkMode(!currentMode);
}

// Evento de clique para o botão "Dark Mode".
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Verifique se o usuário tinha o modo escuro ativado anteriormente.
const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
setDarkMode(savedDarkMode);
