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