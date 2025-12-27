const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const disconnectScreen = document.getElementById('disconnect-screen');

    function showDisconnectScreen() {
        disconnectScreen.classList.add('visible');
        body.classList.add('no-scroll');
    }
    function hideDisconnectScreen() {
        disconnectScreen.classList.remove('visible');
        body.classList.remove('no-scroll');
    }

    window.addEventListener('online', hideDisconnectScreen);
    if (!navigator.onLine) {
        showDisconnectScreen();
    }
});