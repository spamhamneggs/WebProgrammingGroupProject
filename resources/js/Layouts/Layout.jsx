import { useState } from "react";

import {
    Menu,
    RefreshCw,
} from "lucide-react";

import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-earth-100/90 backdrop-blur-md border-b border-nature-200 shadow-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-nature-700 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-earth-100">
                <RefreshCw size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-nature-800">SkillSwap</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-nature-700 hover:text-nature-500 font-medium transition-colors">Explore Skills</a>
              <a href="#" className="text-nature-700 hover:text-nature-500 font-medium transition-colors">Community</a>
              <a href="#" className="text-nature-700 hover:text-nature-500 font-medium transition-colors">SDG 17 Impact</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-nature-700 font-bold hover:text-nature-900">Log In</a>
              <a href="#" className="bg-nature-700 text-earth-100 px-6 py-2.5 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200">
                Join Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-nature-800 hover:text-nature-600 focus:outline-none"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-earth-100 border-t border-nature-200 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              <a href="#" className="block px-3 py-3 text-base font-medium text-nature-700 hover:bg-nature-50 rounded-md">Explore Skills</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-nature-700 hover:bg-nature-50 rounded-md">Community</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-nature-700 hover:bg-nature-50 rounded-md">Impact</a>
              <div className="pt-4 border-t border-nature-200 flex flex-col gap-3">
                <a href="#" className="block text-center text-nature-700 font-bold">Log In</a>
                <a href="#" className="block text-center bg-nature-700 text-white px-4 py-3 rounded-lg">Join Now</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-nature-900 text-nature-200 pt-16 pb-8 border-t border-nature-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <RefreshCw size={24} className="text-nature-300" />
                <span className="font-display font-bold text-xl text-earth-100">SkillSwap</span>
              </div>
              <p className="text-sm text-nature-400 leading-relaxed">
                Connecting talent, building community, and empowering growth through the power of exchange.
              </p>
            </div>

            <div>
              <h4 className="text-earth-100 font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-nature-300 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-nature-300 transition-colors">Browse Skills</a></li>
                <li><a href="#" className="hover:text-nature-300 transition-colors">Trust & Safety</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-earth-100 font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-nature-300 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-nature-300 transition-colors">SDG 17 Initiative</a></li>
                <li><a href="#" className="hover:text-nature-300 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-earth-100 font-bold mb-4">Newsletter</h4>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Your email" className="bg-nature-800 border border-nature-700 text-nature-100 px-4 py-2 rounded focus:outline-none focus:border-nature-500 text-sm" />
                <button className="bg-nature-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-nature-500 transition-colors">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="border-t border-nature-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-nature-500">
            <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-nature-300">Privacy</a>
              <a href="#" className="hover:text-nature-300">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
