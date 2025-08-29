import React from 'react';

export default function Footer() {
  return (
    <footer id="support" className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(139,92,246,0.15)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-bold">Astra Robotics</div>
            <p className="text-white/70 mt-3 text-sm max-w-sm">
              We build autonomous systems that are safe, helpful, and delightful. Designed in California. Shipped worldwide.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Support</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Astra Robotics, Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
