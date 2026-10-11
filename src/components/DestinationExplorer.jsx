import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Compass, 
  Mountain, 
  Sparkles 
} from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export function DestinationExplorer({ onSelectDestination }) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Himachal Pradesh', 'Uttarakhand', 'Adventure & Trek', 'Spiritual & Yatras'];

  const filteredDestinations = activeTab === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeTab || (activeTab === 'Himachal Pradesh' && d.state === 'Himachal Pradesh') || (activeTab === 'Uttarakhand' && d.state === 'Uttarakhand'));

  return (
    <section id="destinations" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handpicked Mountain Circuits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Popular Destinations in <br />
            <span className="text-emerald-700">Himachal & Uttarakhand</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="group bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

              {/* State Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                  {dest.state}
                </span>
              </div>

              {/* Altitude & Time */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium">
                <Mountain className="w-3 h-3 text-emerald-400" />
                <span>{dest.altitude}</span>
              </div>

              {/* Destination Name on bottom of image */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider mb-1">
                  {dest.highlight}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {dest.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 font-normal">
                  {dest.tagline}
                </p>

                {/* Popular spots chips */}
                <div className="mb-5">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Must-Visit Attractions:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularSpots.slice(0, 4).map((spot) => (
                      <span
                        key={spot}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700"
                      >
                        {spot}
                      </span>
                    ))}
                    {dest.popularSpots.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-slate-50 text-slate-500">
                        +{dest.popularSpots.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Best: {dest.bestTime}</span>
                </div>

                <button
                  onClick={() => onSelectDestination(dest.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Explore Tours</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
