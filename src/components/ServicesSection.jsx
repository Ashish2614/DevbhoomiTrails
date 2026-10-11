import React from 'react';
import { 
  Compass, 
  Sun, 
  Car, 
  Mountain, 
  Heart, 
  Tent, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES } from '../data/travelData';

export function ServicesSection({ onOpenBooking }) {
  const iconMap = {
    Compass: <Compass className="w-6 h-6 text-emerald-600" />,
    Sun: <Sun className="w-6 h-6 text-amber-500" />,
    Car: <Car className="w-6 h-6 text-sky-600" />,
    Mountain: <Mountain className="w-6 h-6 text-indigo-600" />,
    Heart: <Heart className="w-6 h-6 text-rose-500" />,
    Tent: <Tent className="w-6 h-6 text-teal-600" />,
  };

  return (
    <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 rounded-[36px] my-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Complete Travel Offerings</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Services We Offer Across The Himalayas
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
          From turnkey family packages and sacred pilgrimage yatras to extreme 4x4 off-roading, we manage every detail with native mountain precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Icon & Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[srv.icon] || <Compass className="w-6 h-6 text-emerald-600" />}
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  {srv.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {srv.desc}
              </p>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onOpenBooking({ title: srv.title })}
                className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Book This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-medium text-slate-400">
                100% Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
