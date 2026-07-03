import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google'; // 1. Import Inter
import { Providers } from './providers';
import '@/app/globals.css';

// 2. Configure the Inter font weights and subsets
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans', // This matches Tailwind's default sans variable name
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Opera-AI | Multi-Tenant AI Agent & Workspace Orchestrator',
  description: 'Deploy, isolate, and scale autonomous corporate AI agents inside secure enterprise workspaces.',
  metadataBase: new URL('https://opera-ai.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Apply the font class to the body */}
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 text-neutral-900 dark:text-neutral-50`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}