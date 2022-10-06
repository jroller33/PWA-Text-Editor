const butInstall = document.getElementById('buttonInstall');

// for installing the PWA, event listener triggers btnInstalEl to show
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    btnInstallEl.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const btnEvent = window.deferredPrompt;
    if (!btnEvent) {
        return;
    }
    btnEvent.prompt();
    window.deferredPrompt = null;
    btnInstallEl.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { });
