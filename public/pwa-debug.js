// PWA Debug Script
console.log('[PWA Debug] Script loaded');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('[PWA Debug] ServiceWorker registration successful with scope: ', registration.scope);
            
            // Log installation status
            if (registration.installing) {
                console.log('[PWA Debug] Service worker installing');
            } else if (registration.waiting) {
                console.log('[PWA Debug] Service worker installed');
            } else if (registration.active) {
                console.log('[PWA Debug] Service worker active');
            }
        }).catch(function(err) {
            console.error('[PWA Debug] ServiceWorker registration failed: ', err);
        });
    });

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('[PWA Debug] beforeinstallprompt event fired');
        // Optionally, show your own install button
        e.preventDefault();
        // Store the event for later use
        window.deferredPrompt = e;
    });

    // Listen for the appinstalled event
    window.addEventListener('appinstalled', (evt) => {
        console.log('[PWA Debug] App was installed');
    });
} else {
    console.log('[PWA Debug] Service workers are not supported');
}
