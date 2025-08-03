"use client";

import { useState, useEffect } from "react";
import type { Zikr } from "@/lib/types";
import { ZikrCard } from "@/components/zikr/zikr-card";
import { initialZikrs } from "@/lib/zikr-data";
import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/zikr/language-switcher";
import { ThemeProvider } from "@/contexts/theme-context";
import { ThemeSwitcher } from "@/components/zikr/theme-switcher";
import { translations } from "@/lib/translations";
import { Activity, Download } from "lucide-react";
import { CounterModeProvider } from "@/contexts/counter-mode-context";
import { CounterModeSwitcher } from "@/components/zikr/counter-mode-switcher";

function ZikrApp() {
  const [zikrs, setZikrs] = useState<Zikr[]>(initialZikrs);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    console.log('[PWA Debug] Component mounted');
    
    const handleBeforeInstallPrompt = (e: any) => {
      console.log('[PWA Debug] beforeinstallprompt event fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Store the event so it can be triggered later.
      setInstallPrompt(e);
      console.log('[PWA Debug] Install prompt stored');
    };

    if ('serviceWorker' in navigator) {
      console.log('[PWA Debug] Service Worker is supported');
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      
      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('[PWA Debug] ServiceWorker registration successful:', registration);

          // Handle service worker state changes
          const handleStateChange = (worker: ServiceWorker) => {
            worker.addEventListener('statechange', () => {
              console.log('[PWA Debug] ServiceWorker state changed:', worker.state);
              if (worker.state === 'activated') {
                console.log('[PWA Debug] Service Worker is now activated');
              }
            });
          };

          if (registration.installing) {
            console.log('[PWA Debug] Service Worker is installing');
            handleStateChange(registration.installing);
          }

          if (registration.waiting) {
            console.log('[PWA Debug] Service Worker is waiting');
            handleStateChange(registration.waiting);
          }

          if (registration.active) {
            console.log('[PWA Debug] Service Worker is active');
            handleStateChange(registration.active);
          }
        })
        .catch((err) => {
          console.error('[PWA Debug] ServiceWorker registration failed:', err);
        });

      // Listen for controllerchange
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[PWA Debug] Service Worker controller changed');
      });

      // Listen for message events
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('[PWA Debug] Received message from Service Worker:', event.data);
      });
    } else {
      console.log('[PWA Debug] Service Worker is not supported');
    }

    return () => {
      if ('serviceWorker' in navigator) {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  // Separate useEffect for monitoring installPrompt changes
  useEffect(() => {
    console.log('[PWA Debug] ✅✅Install prompt state changed:', installPrompt);
  }, [installPrompt]);

  const handleIncrement = (id: number) => {
    setZikrs((prevZikrs) =>
      prevZikrs.map((zikr) =>
        zikr.id === id ? { ...zikr, count: zikr.count + 1 } : zikr
      )
    );
  };

  const handleReset = (id: number) => {
    setZikrs((prevZikrs) =>
      prevZikrs.map((zikr) =>
        zikr.id === id ? { ...zikr, count: 0 } : zikr
      )
    );
  };

  const handleTargetChange = (id: number, newTarget: number) => {
    setZikrs((prevZikrs) =>
      prevZikrs.map((zikr) =>
        zikr.id === id ? { ...zikr, target: newTarget >= 0 ? newTarget : 0 } : zikr
      )
    );
  };

  const handleCountChange = (id: number, newCount: number) => {
    setZikrs((prevZikrs) =>
      prevZikrs.map((zikr) =>
        zikr.id === id ? { ...zikr, count: newCount >= 0 ? newCount : 0 } : zikr
      )
    );
  };


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground" dir={language === 'ar' || language === 'ur' ? 'rtl' : 'ltr'}>
      <div className="sticky top-0 z-20 text-center py-4 bg-background/80 backdrop-blur-sm">
        <p className="text-2xl font-arabic text-foreground/80">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
      </div>
      <header className="sticky top-[64px] z-10 w-full bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-primary">
              {t.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {installPrompt && (
              <button
                onClick={async () => {
                  if (installPrompt) {
                    console.log('[PWA Debug] Triggering install prompt');
                    await (installPrompt as any).prompt();
                    setInstallPrompt(null);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 animate-pulse"
              >
                <Download className="h-4 w-4" />
                Install App
              </button>
            )}
            <CounterModeSwitcher />
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zikrs.map((zikr) => (
              <ZikrCard
                key={zikr.id}
                zikr={zikr}
                onIncrement={() => handleIncrement(zikr.id)}
                onReset={() => handleReset(zikr.id)}
                onTargetChange={(e) => handleTargetChange(zikr.id, parseInt(e.target.value, 10) || 0)}
                onCountChange={(e) => handleCountChange(zikr.id, parseInt(e.target.value, 10) || 0)}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CounterModeProvider>
          <ZikrApp />
        </CounterModeProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
