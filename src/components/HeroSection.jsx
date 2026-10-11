import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ChevronDown,
  Check
} from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export function HeroSection({ onSearch, onOpenPlanner }) {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);

  const handleSearchClick = () => {
    onSearch({
      destination: selectedDestination,
      date: travelDate,
      adults,
      children,
      totalGuests: adults + children
    });
  };

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Banner Card matching the Reference Image */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex flex-col justify-between shadow-2xl shadow-slate-900/10 border border-slate-200/50">
        {/* Background Image with optimized Himalayan Vista */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-[1.02]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Ambient Gradient Overlays for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

        {/* Top & Hero Content */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl">
          {/* Pill Badge matching reference "New | Checkout new features ->" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 transition-colors cursor-pointer group">
            <span className="px-2 py-0.5 rounded-full bg-white text-slate-900 text-[11px] font-bold">
              New
            </span>
            <span className="text-slate-100 group-hover:text-white">
              Checkout 2026 Himachal & Uttarakhand Seasonal Escapes
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Heading matching reference typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Discover The Himalayas <br />
            <span className="text-white font-medium">With Confidence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl font-normal leading-relaxed mb-8">
            Plan your next adventure with Devbhoomi Trails. From snow-kissed passes of Manali & Spiti to divine sacred valleys of Rishikesh & Kedarnath, we make every mountain journey effortless, authentic, and unforgettable.
          </p>

          {/* CTA Buttons matching reference design */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <a
              href="#destinations"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-slate-900 text-sm sm:text-base font-semibold shadow-lg hover:bg-slate-100 transition-all hover:scale-[1.02] group"
            >
              <span>Explore Destinations</span>
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-sm sm:text-base font-semibold transition-all hover:scale-[1.02] group"
            >
              <span>Plan Your Trip</span>
              <div className="w-6 h-6 rounded-full bg-white/30 text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Floating Search & Booking Filter Box positioned at the bottom */}
        <div className="relative z-20 p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 backdrop-blur-xl">
            {/* Top row of filters: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-slate-100">
              {/* Destination Dropdown */}
              <div className="relative">
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  Destination?
                </label>
                <div 
                  onClick={() => setDestDropdownOpen(!destDropdownOpen)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300 transition-all text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">
                      {selectedDestination || "Select Valley or City"}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                </div>

                {destDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
                    <button
                      onClick={() => { setSelectedDestination(''); setDestDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-slate-50 font-medium text-slate-600 flex items-center justify-between"
                    >
                      <span>All Destinations (Himachal & Uttarakhand)</span>
                      {!selectedDestination && <Check className="w-4 h-4 text-emerald-600" />}
                    </button>
                    {DESTINATIONS.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => { setSelectedDestination(d.name); setDestDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-slate-50 font-medium text-slate-800 flex items-center justify-between"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{d.name}</p>
                          <p className="text-[11px] text-slate-500">{d.state} • {d.avgDays}</p>
                        </div>
                        {selectedDestination === d.name && <Check className="w-4 h-4 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* When Start Date Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  When Start?
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:border-slate-400"
                    placeholder="Select date"
                  />
                </div>
              </div>

              {/* Many People Guest Selector */}
              <div className="relative">
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  Many People?
                </label>
                <div 
                  onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300 transition-all text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{adults} Adults{children > 0 ? `, ${children} Kids` : ''}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                </div>

                {guestDropdownOpen && (
                  <div className="absolute right-0 left-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Adults</p>
                        <p className="text-[10px] text-slate-500">Ages 12 and above</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-900">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Children</p>
                        <p className="text-[10px] text-slate-500">Ages 2 to 11</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-900">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setGuestDropdownOpen(false)}
                      className="w-full mt-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row: Travelers filter chips & Search button exactly matching the reference */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-600 mr-1">Travelers:</span>
                
                {/* Adults Pill Chip */}
                <button
                  type="button"
                  onClick={() => setAdults(prev => prev === 1 ? 2 : prev === 2 ? 4 : 2)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm hover:bg-slate-800 transition-colors"
                >
                  Adults ({adults})
                </button>

                {/* Children Pill Chip */}
                <button
                  type="button"
                  onClick={() => setChildren(prev => prev === 0 ? 1 : prev === 1 ? 2 : 0)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    children > 0 
                      ? 'bg-slate-900 text-white border-slate-900' 
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Children ({children})
                </button>

                <span className="hidden md:inline-block text-[11px] text-slate-400 ml-2">
                  • Instant WhatsApp Quotes & Best Price Guarantee
                </span>
              </div>

              {/* Search Pill Button matching the reference image */}
              <button
                type="button"
                onClick={handleSearchClick}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
