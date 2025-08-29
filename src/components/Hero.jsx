import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Cpu, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6bqX3qQwD7lB7HnQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(99,102,241,0.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/10 mb-5">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Next‑gen autonomous robotics
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Meet the robots that work while you dream
            </h1>
            <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl">
              From household helpers to industrial powerhouses — Astra robots blend precision engineering with real intelligence to elevate how you live and work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="#products" className="pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-colors font-semibold">
                Explore Robots
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#why" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium text-white/90">
                Why Astra
              </a>
            </div>

            <div id="why" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Feature icon={<Shield className="h-4 w-4" />} title="Enterprise‑grade safety" subtitle="Certified failsafes & privacy" />
              <Feature icon={<Cpu className="h-4 w-4" />} title="Edge AI" subtitle="On‑device autonomy, low latency" />
              <Feature icon={<Sparkles className="h-4 w-4" />} title="Modular design" subtitle="Swap tools in seconds" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
      <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-white/70 text-xs">{subtitle}</div>
      </div>
    </div>
  );
}
