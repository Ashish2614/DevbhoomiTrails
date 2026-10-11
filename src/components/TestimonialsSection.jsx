import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/travelData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Verified Guest Stories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Loved by 18,500+ Travelers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
          Real experiences shared by families, solo explorers, pilgrims, and honeymooners who explored the Himalayas with Devbhoomi Trails.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic mb-6">
                "{t.text}"
              </p>
            </div>

            {/* User Info */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/20"
              />
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-slate-900 truncate flex items-center gap-1">
                  <span>{t.name}</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                </h4>
                <p className="text-[11px] text-slate-500 truncate">{t.city}</p>
                <p className="text-[10px] text-emerald-700 font-semibold truncate mt-0.5">{t.trip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
