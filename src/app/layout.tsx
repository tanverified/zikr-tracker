import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: '#3F51B5'
};

export const metadata: Metadata = {
  title: 'Zikr Counter',
  description: 'An elegant app to help you keep track of your zikr with targets and progress.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zikr Counter',
  },
  formatDetection: {
    telephone: false,
  }
};

const NoFlash = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function() {
          try {
            const theme = localStorage.getItem('zikr-app-theme') || 'default';
            document.documentElement.setAttribute('data-theme', theme);
          } catch (e) {}
        })();`
      }}
    />
  );
};

const PWADebug = () => {
  return <script src="/pwa-debug.js" />;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&family=Noto+Naskh+Arabic:wght@400..700&display=swap" rel="stylesheet" />
        <meta name="application-name" content="Zikr Counter" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zikr Counter" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#3F51B5" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <NoFlash />
        <PWADebug />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
