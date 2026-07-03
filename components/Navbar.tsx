import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Terminal className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span>Opera-<span className="text-indigo-600 dark:text-indigo-400">AI</span></span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="#architecture" className="hover:text-indigo-600 transition-colors">Architecture</Link>
          <Link href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}