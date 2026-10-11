import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  Check, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Sparkles, 
  Eye, 
  Send 
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/travelData';

export function TourPackagesSection({ onOpenBooking, onViewItinerary, externalFilter }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(externalFilter || '');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All',
    'Himachal Pradesh',
    'Uttarakhand',
    'Adventure & Trek',
    'Spiritual & Yatras',
    'Honeymoon Specials'
  ];

  // Filtering
  let filtered = TOUR_PACKAGES.filter((pkg) => {
    const matchesCategory = activeCategory === 'All' 
      ? true 
      : pkg.category === activeCategory || (activeCategory === 'Himachal Pradesh' && pkg.state === 'Himachal Pradesh') || (activeCategory === 'Uttarakhand' && pkg.state === 'Uttarakhand');

    const matchesSearch = searchQuery === '' 
      ? true 
      : pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'duration') {
    filtered.sort((a, b) => a.durationDays - b.durationDays);
  }

  return (
    <section id="packages" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Curated Himalayan Itineraries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Featured Tour & Travel Packages
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
          Transparent prices, verified mountain stays, private sanitized vehicles, and local Pahadi trip leaders. Reserve your dream escape with just 25% token advance.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input + Sort Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search package or valley..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 font-medium"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium focus:outline-none"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="duration">Shortest Trips</option>
            </select>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-base font-bold text-slate-800 mb-2">No packages match your search filter</p>
          <p className="text-xs text-slate-500 mb-4">Try clearing filters or customize a custom trip with our tour architect.</p>
          <button
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-full"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Image & Badges */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Duration Chip */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Destination on image bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="flex items-center gap-1 text-xs font-medium text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{pkg.destination}</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold bg-amber-500/90 text-white px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    <span>{pkg.rating} ({pkg.reviews})</span>
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  {/* Inclusions Highlights */}
                  <div className="mb-5 space-y-1.5">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Buttons */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-400 font-medium line-through mr-2">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-2xl font-black text-slate-900">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-slate-500 ml-1">/ person</span>
                    </div>

                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onViewItinerary(pkg)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Itinerary</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(pkg)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <span>Book Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
