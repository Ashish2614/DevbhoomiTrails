import React from 'react';
import { 
  Mountain, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ArrowUpRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export function Footer() {
  return (
    <footer className="bg-[#0B1320] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Devbhoomi<span className="text-emerald-400">Trails</span>
                </span>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Himalayan Escapes & Expeditions
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted travel companion for Himachal Pradesh and Uttarakhand. Crafting authentic, safe, and soulful mountain journeys with verified Pahadi hospitality since 2014.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                {BUSINESS_INFO.registration}
              </span>
            </div>
          </div>

          {/* Himachal Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Himachal Circuits
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Manali & Solang Valley</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Spiti Valley 4x4 Circuit</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Shimla, Kufri & Narkanda</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Dharamshala & Bir Billing</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Kasol & Jibhi Treehouses</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Kinnaur & Kalpa Valley</a></li>
            </ul>
          </div>

          {/* Uttarakhand Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Uttarakhand Circuits
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Kedarnath & Badrinath Yatra</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Rishikesh & Ganga Rafting</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Auli Skiing & Snow Views</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Chopta & Tungnath Trek</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Nainital & Jim Corbett</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Mussoorie & Dhanaulti</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-medium">{BUSINESS_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">WhatsApp: {BUSINESS_INFO.whatsapp}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>The Mall Road, Manali (HP) 175131</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React & Vite</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
