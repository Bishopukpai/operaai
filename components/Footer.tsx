import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Opera-AI Inc. All rights reserved. Secure Workspace Isolation.
        </p>
        <div className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Security Architecture</Link>
        </div>
      </div>
    </footer>
  );
}