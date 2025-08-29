import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield } from 'lucide-react';

const products = [
  {
    name: 'Astra Home X',
    tagline: 'Your household co‑pilot',
    price: '$1,999',
    badge: 'Best Seller',
    gradient: 'from-cyan-500/20 to-fuchsia-500/20',
    features: ['Autonomous cleaning', 'Voice + app control', 'Self-docking']
  },
  {
    name: 'Astra Guard',
    tagline: 'Patrol and protect',
    price: '$3,499',
    badge: 'New',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    features: ['24/7 monitoring', 'Thermal vision', 'Smart alerts']
  },
  {
    name: 'Astra Flex Pro',
    tagline: 'Modular workforce',
    price: '$6,799',
    badge: 'Pro',
    gradient: 'from-violet-500/20 to-indigo-500/20',
    features: ['6‑axis arm', 'Tool‑less modules', 'Factory ready']
  },
  {
    name: 'Astra Rover',
    tagline: 'All‑terrain utility',
    price: '$4,299',
    badge: 'Outdoor',
    gradient: 'from-amber-500/20 to-rose-500/20',
    features: ['Rugged build', 'GPS nav', 'Weatherproof']
  }
];

export default function ProductsGrid() {
  return (
    <section id="products" className="relative py-20">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(80%_60%_at_20%_0%,rgba(56,189,248,0.10)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Shop our flagship robots</h2>
            <p className="text-white/70 mt-2">Powerful hardware, refined design, and AI that just works.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70 text-sm">
            <Shield className="h-4 w-4" />
            2‑year warranty on all models
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="relative p-5 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{p.badge}</span>
                  <Rocket className="h-4 w-4 text-white/70" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.tagline}</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.price}</div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-sm">
                    Add to cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
