import React, { useState } from 'react';
import { 
  Mountain, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Menu, 
  X, 
  Globe, 
  ChevronDown, 
  Compass, 
  Calendar, 
  ShieldCheck,
  User
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export function Navbar({ onOpenBooking, onSelectDestination }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('En');

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Trip Calculator', href: '#calculator' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#0F172A] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Manali & Rishikesh On-Ground Teams</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>HP Tourism Govt Approved</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Devbhoomi Trails! I want to plan a tour to Himachal / Uttarakhand.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo matching reference elegance */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F172A] to-slate-800 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
              <Mountain className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  Devbhoomi<span className="text-emerald-600">Trails</span>
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                Himachal & Uttarakhand Specialists
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions matching Reference: Language, User Profile, Menu / WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors border border-slate-200"
                aria-label="Language selector"
              >
                <span>{currentLang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                  <button
                    onClick={() => { setCurrentLang('En'); setLangOpen(false); }}
                    className="w-full text-left px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    English (En)
                  </button>
                  <button
                    onClick={() => { setCurrentLang('हिन्दी'); setLangOpen(false); }}
                    className="w-full text-left px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    हिन्दी (HI)
                  </button>
                </div>
              )}
            </div>

            {/* Profile Avatar as in Reference */}
            <div className="hidden sm:flex items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Traveler Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-slate-200"
              />
            </div>

            {/* Quick WhatsApp Button */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! I would like to inquire about tour packages for Himachal/Uttarakhand.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Quote</span>
            </a>

            {/* Pill Menu Button as seen in reference image */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-full border border-slate-300 shadow-sm transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[113px] bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto p-5 animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-100">
              <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Explore</p>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Mountain Hotline
              </h4>
              <p className="text-xs text-slate-500 mb-3">Speak with local Manali & Rishikesh tour architects</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-4 bg-[#0F172A] text-white rounded-xl text-sm font-semibold shadow-md text-center"
                >
                  Book / Inquire Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
