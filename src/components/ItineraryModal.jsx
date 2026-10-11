import React from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Check, 
  AlertCircle, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  MessageCircle 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export function ItineraryModal({ isOpen, onClose, packageData, onBookNow }) {
  if (!isOpen || !packageData) return null;

  const handleWhatsAppInquiry = () => {
    const text = `*Inquiry regarding Itinerary:* ${packageData.title} (${packageData.duration})
I would like more information and dates availability for this package!`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with image banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title & Info */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                {packageData.badge || 'Verified Itinerary'}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-200">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{packageData.duration}</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {packageData.title}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>{packageData.destination}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 flex-1 space-y-6">
          {/* Price & Overview */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="text-[11px] font-semibold text-slate-500">Package Starting Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">
                  ₹{packageData.price?.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{packageData.originalPrice?.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ person</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                <span>Ask on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Day by Day Plan */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Day-by-Day Detailed Plan
              </h4>
            </div>

            <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {packageData.itinerary && packageData.itinerary.map((dayPlan, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white" />
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {dayPlan.day}
                  </span>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {dayPlan.title}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {dayPlan.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions and Exclusions side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {/* Inclusions */}
            <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>What's Included</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {packageData.inclusions?.map((inc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>What's Not Included</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {packageData.exclusions?.map((exc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Footer Action Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-white sticky bottom-0 z-10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookNow(packageData);
            }}
            className="flex-1 sm:flex-initial px-8 py-2.5 rounded-full bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Book This Tour Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
