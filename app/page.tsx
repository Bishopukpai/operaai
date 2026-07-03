import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Shield, Cpu, Layers, BarChart3, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Opera-AI',
    'applicationCategory': 'BusinessApplication, AI',
    'operatingSystem': 'Cloud',
    'description': 'Multi-tenant B2B platform managing isolated enterprise workspaces and automated AI agents.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 text-center lg:pt-36">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl max-w-4xl mx-auto leading-[1.15]">
            Deploy Secure, Isolated <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">AI Workspaces</span> for Business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
            Opera-AI provides multi-tenant operational environments. Provision distinct workspaces, execute dedicated autonomous agents, and retain strict log boundaries automatically.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="group rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 flex items-center gap-2 transition-all"
            >
              Build Your Workspace 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </section>

        {/* Features Core Grid */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-neutral-100 dark:border-neutral-900">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Multi-Tenancy Architecture</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Enterprise Control, Out of the Box
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
              
              <div className="flex flex-col items-start">
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 mb-5">
                  <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Strict Workspace Isolation</dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Every organization gets an isolated context layer. Users, workflows, documents, and configuration scopes never mix or spill across parameters.
                </dd>
              </div>

              <div className="flex flex-col items-start">
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 mb-5">
                  <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Autonomous Agent Factories</dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Provision task-specific AI runtimes customized directly around distinct organizational needs, sandboxed securely inside tenant perimeters.
                </dd>
              </div>

              <div className="flex flex-col items-start">
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 mb-5">
                  <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Dynamic Workflow Pipelines</dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Chain multi-step automation engines together. Design workflows connecting data repositories to custom communication triggers easily.
                </dd>
              </div>

              <div className="flex flex-col items-start">
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 mb-5">
                  <BarChart3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Immutable Event Auditing</dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Track every calculation, prompt output, and workspace token usage in clean, real-time cryptographic audit logs for maximum compliance.
                </dd>
              </div>

            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}