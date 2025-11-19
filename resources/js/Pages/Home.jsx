import {
    ArrowLeftRight,
    ArrowRight,
    Banknote,
    Bird,
    CheckCircle2,
    Gift,
    Handshake,
    MessageCircle,
    Search,
    SearchCheck,
    UserPlus,
} from "lucide-react";

import { Head } from "@inertiajs/react";

import Layout from "../Layouts/Layout";

export default function Home() {
  return (
    <>
      <Head title="Trade Skills, Build Partnerships" />
      <Layout>
        {/* Hero Section */}
        <header className="relative pt-10 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-nature-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 left-0 -ml-20 mt-40 w-72 h-72 bg-earth-300 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-nature-100 text-nature-700 text-sm font-bold tracking-wider mb-6 border border-nature-200">
              <Bird size={16} className="inline mr-1 mb-1" />
              The Spirit of SDG 17
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-nature-900 leading-tight mb-6">
              Trade Skills.
              <br />
              <span className="text-nature-600 italic relative">
                Grow Together.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-nature-300/50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C58.5002 3.99999 147.5 -2.50002 198 2.99997" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-xl text-nature-700/80 leading-relaxed font-light">
              A community marketplace where talent is the currency. No money changes hands - just genuine exchange and local partnerships.
            </p>

            <div className="mt-10 max-w-3xl mx-auto relative z-10">
              <div className="bg-white p-2 rounded-xl shadow-xl shadow-nature-200/50 border border-nature-100 flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative flex items-center px-4 py-2 bg-earth-50 rounded-lg border border-transparent hover:border-nature-200 transition-colors">
                  <Search size={20} className="text-nature-400 mr-3" />
                  <input type="text" placeholder="I need help with..." className="w-full bg-transparent border-none focus:ring-0 text-nature-800 placeholder-nature-400 outline-none" />
                </div>
                <div className="hidden md:flex items-center justify-center px-2 text-nature-300">
                  <ArrowLeftRight size={20} />
                </div>
                <div className="flex-1 relative flex items-center px-4 py-2 bg-earth-50 rounded-lg border border-transparent hover:border-nature-200 transition-colors">
                  <Gift size={20} className="text-nature-400 mr-3" />
                  <input type="text" placeholder="I can offer..." className="w-full bg-transparent border-none focus:ring-0 text-nature-800 placeholder-nature-400 outline-none" />
                </div>
                <button className="bg-nature-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-nature-800 transition-all flex items-center justify-center">
                  Find Match
                </button>
              </div>
              <p className="mt-3 text-sm text-nature-600">
                Popular: <span className="underline decoration-nature-400 cursor-pointer">Web Design</span>, <span className="underline decoration-nature-400 cursor-pointer">Photography</span>, <span className="underline decoration-nature-400 cursor-pointer">Baking</span>
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-7xl mx-auto px-4 relative hidden md:block">
            <div className="grid grid-cols-12 gap-4 items-center opacity-90">
              <div className="col-span-3 col-start-2 transform translate-y-8">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Meeting" className="rounded-2xl shadow-lg border-4 border-white -rotate-2" />
              </div>
              <div className="col-span-4 transform -translate-y-4 z-10">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students Collaboration" className="rounded-2xl shadow-xl border-4 border-white" />
              </div>
              <div className="col-span-3 transform translate-y-6">
                <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Baker" className="rounded-2xl shadow-lg border-4 border-white rotate-3" />
              </div>
            </div>
          </div>
        </header>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-nature-800">Bartering Made Simple</h2>
              <p className="mt-4 text-nature-600 max-w-2xl mx-auto">No complex currencies. Just people helping people.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-nature-200 border-t-2 border-dashed border-nature-300 z-0"></div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-earth-100 rounded-full flex items-center justify-center border-2 border-nature-200 shadow-sm group-hover:border-nature-500 group-hover:scale-110 transition-all duration-300 mb-6">
                  <UserPlus size={40} className="text-nature-600" />
                </div>
                <h3 className="text-xl font-bold text-nature-900 mb-2">1. List Your Skills</h3>
                <p className="text-nature-600 leading-relaxed px-4">Create a profile detailing what you're great at, and what you need help with.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-earth-100 rounded-full flex items-center justify-center border-2 border-nature-200 shadow-sm group-hover:border-nature-500 group-hover:scale-110 transition-all duration-300 mb-6">
                  <SearchCheck size={40} className="text-nature-600" />
                </div>
                <h3 className="text-xl font-bold text-nature-900 mb-2">2. Find a Match</h3>
                <p className="text-nature-600 leading-relaxed px-4">Search the board. Found a graphic designer who needs your accounting skills? Perfect.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-earth-100 rounded-full flex items-center justify-center border-2 border-nature-200 shadow-sm group-hover:border-nature-500 group-hover:scale-110 transition-all duration-300 mb-6">
                  <Banknote size={40} className="text-nature-600" />
                </div>
                <h3 className="text-xl font-bold text-nature-900 mb-2">3. Agree &amp; Swap</h3>
                <p className="text-nature-600 leading-relaxed px-4">Define the terms in a simple agreement, do the work, and leave a review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-20 bg-nature-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-nature-800">Community Board</h2>
                <p className="mt-2 text-nature-600">Recent requests and offers from your area.</p>
              </div>

              <div className="mt-6 md:mt-0 bg-white p-1 rounded-lg shadow-sm border border-nature-200 inline-flex">
                <button className="px-6 py-2 rounded-md bg-nature-700 text-white text-sm font-bold shadow-sm">All</button>
                <button className="px-6 py-2 rounded-md text-nature-600 hover:bg-nature-50 text-sm font-bold transition-colors">Offers</button>
                <button className="px-6 py-2 rounded-md text-nature-600 hover:bg-nature-50 text-sm font-bold transition-colors">Requests</button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-nature-100 shadow-lg shadow-nature-100/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-nature-100 text-nature-700 text-xs font-bold rounded-full uppercase tracking-wide">Offering</span>
                    <span className="text-xs text-nature-400">2h ago</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-nature-900 mb-2">Professional Logo Design</h3>
                  <p className="text-nature-600 text-sm line-clamp-3">I'm a senior graphic designer offering a full logo branding package. Includes vector files and brand guidelines.</p>

                  <div className="mt-4 pt-4 border-t border-nature-100">
                    <p className="text-xs font-bold text-nature-400 uppercase mb-1">Seeking in return:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-earth-200 text-nature-800 text-xs rounded">Home made bread</span>
                      <span className="px-2 py-1 bg-earth-200 text-nature-800 text-xs rounded">Gardening help</span>
                    </div>
                  </div>
                </div>
                <div className="bg-earth-50 px-6 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/150?u=1" alt="User" className="w-8 h-8 rounded-full border border-nature-200" />
                    <span className="text-sm font-medium text-nature-800">Sarah Jenkins</span>
                  </div>
                  <button className="text-nature-600 hover:text-nature-800 transition-colors">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-nature-100 shadow-lg shadow-nature-100/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-earth-200 text-nature-800 text-xs font-bold rounded-full uppercase tracking-wide">Requesting</span>
                    <span className="text-xs text-nature-400">5h ago</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-nature-900 mb-2">Help with Social Media Marketing</h3>
                  <p className="text-nature-600 text-sm line-clamp-3">I run a small local bakery (UMKM) and struggle with Instagram. Need someone to set up templates.</p>

                  <div className="mt-4 pt-4 border-t border-nature-100">
                    <p className="text-xs font-bold text-nature-400 uppercase mb-1">Offering in return:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-nature-100 text-nature-800 text-xs rounded">Sourdough Bread</span>
                      <span className="px-2 py-1 bg-nature-100 text-nature-800 text-xs rounded">Baking Lessons</span>
                    </div>
                  </div>
                </div>
                <div className="bg-earth-50 px-6 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/150?u=2" alt="User" className="w-8 h-8 rounded-full border border-nature-200" />
                    <span className="text-sm font-medium text-nature-800">Budi Santoso</span>
                  </div>
                  <button className="text-nature-600 hover:text-nature-800 transition-colors">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-nature-100 shadow-lg shadow-nature-100/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-nature-100 text-nature-700 text-xs font-bold rounded-full uppercase tracking-wide">Offering</span>
                    <span className="text-xs text-nature-400">1d ago</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-nature-900 mb-2">Guitar Lessons (Beginner)</h3>
                  <p className="text-nature-600 text-sm line-clamp-3">I can teach acoustic guitar basics. I have 10 years of experience playing in bands.</p>

                  <div className="mt-4 pt-4 border-t border-nature-100">
                    <p className="text-xs font-bold text-nature-400 uppercase mb-1">Seeking in return:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-earth-200 text-nature-800 text-xs rounded">Portrait Photography</span>
                    </div>
                  </div>
                </div>
                <div className="bg-earth-50 px-6 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/150?u=3" alt="User" className="w-8 h-8 rounded-full border border-nature-200" />
                    <span className="text-sm font-medium text-nature-800">Alex Chen</span>
                  </div>
                  <button className="text-nature-600 hover:text-nature-800 transition-colors">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="inline-flex items-center text-nature-700 font-bold hover:text-nature-900 border-b-2 border-nature-200 hover:border-nature-500 transition-all pb-1">
                View All Listings
                {' '}
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* SDG 17 */}
        <section className="py-20 bg-nature-800 text-earth-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-nature-700 p-3 rounded-lg mb-6">
                  <Handshake size={32} className="text-nature-300" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Partnerships for the Goals</h2>
                <p className="text-nature-100 text-lg leading-relaxed mb-6 font-light">
                  SkillSwap is built on the spirit of
                  {' '}
                  <strong className="text-white">SDG 17</strong>
                  . By removing financial barriers, we empower students, freelancers, and small businesses (UMKM) to access the essential skills they need to grow.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="text-nature-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-nature-50">Promote local economic growth through resource sharing.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="text-nature-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-nature-50">Build resilient community networks.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="text-nature-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-nature-50">Equal opportunity for skill acquisition.</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-nature-600/30 rounded-2xl transform rotate-6"></div>
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Community Impact" className="relative rounded-2xl shadow-2xl border-2 border-nature-600" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-earth-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-nature-900 mb-6">Ready to Swap?</h2>
            <p className="text-xl text-nature-700 mb-10 font-light">Join thousands of community members trading skills and growing together today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-nature-700 text-earth-100 px-8 py-4 rounded-xl font-bold hover:bg-nature-800 transition-all shadow-lg shadow-nature-300/50 text-lg">
                Create Free Profile
              </button>
              <button className="bg-transparent border-2 border-nature-700 text-nature-800 px-8 py-4 rounded-xl font-bold hover:bg-nature-700 hover:text-earth-100 transition-all text-lg">
                Browse Listings
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
