import React from 'react';
import { Rocket, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-md bg-gradient-to-tr from-cyan-400 to-violet-500 grid place-items-center">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Astra Robotics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#products" className="hover:text-white transition-colors">Robots</a>
            <a href="#why" className="hover:text-white transition-colors">Why Astra</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
            <a href="#products" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-colors text-sm font-medium">
              Shop Robots
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
