import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Award, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export function TrustedCompanionSection({ onExplorePackages }) {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title matching reference image */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Your Trusted Travel Companion
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
          Crafting unforgettable mountain memories across the serene landscapes of Himachal Pradesh and Uttarakhand with local Pahadi wisdom.
        </p>
      </div>

      {/* Asymmetric layout matching reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Large Hero Vertical Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative h-[380px] sm:h-[480px] lg:h-full min-h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-slate-200/60">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
              alt="Himalayan mountain hikers overlooking scenic valley"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Floating Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Himachal Tourism Registered & Certified
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Trusted by 18,500+ Indian families & adventurers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 2 Top Images + About Us Content */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 sm:gap-8">
          {/* Top row: 2 rounded image cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Bir Billing Paragliding / Hot Air Balloon */}
            <div className="relative h-56 sm:h-64 rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-md border border-slate-200/60 group">
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80"
                alt="Adventure in Himalayas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                  Thrill & Sports
                </span>
                <p className="text-white text-sm font-semibold mt-1">
                  Bir Billing & Rishikesh Rapids
                </p>
              </div>
            </div>

            {/* Card 2: Luxury Wooden Cottage / Riverside Glamping */}
            <div className="relative h-56 sm:h-64 rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-md border border-slate-200/60 group">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                alt="Cozy Himalayan wooden chalets and river retreats"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                  Scenic Stays
                </span>
                <p className="text-white text-sm font-semibold mt-1">
                  Jibhi Treehouses & Riverside Resorts
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section: About Us */}
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-slate-200/70 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                About Devbhoomi Trails
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
              At <strong className="font-semibold text-slate-900">Devbhoomi Trails</strong>, we believe travel in the majestic Himalayas is not just another holiday—it is a soulful journey of rediscovery. Born and rooted in Himachal Pradesh, our native mountain guides and travel architects curate immersive escapes across Himachal Pradesh and Uttarakhand.
            </p>

            {/* 4 Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  100% Native Pahadi Guides & Drivers
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Transparent Pricing & Zero Hidden Costs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Customizable Private & Family Packages
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  24x7 Real-Time Weather & Road Concierge
                </span>
              </div>
            </div>

            {/* Quick Stats Bar & Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 sm:gap-8">
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {BUSINESS_INFO.stats.happyTravelers}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">Guests Guided</p>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {BUSINESS_INFO.stats.rating} ★
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">{BUSINESS_INFO.stats.reviewsCount} Reviews</p>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {BUSINESS_INFO.stats.yearsExperience}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">Years in Hills</p>
                </div>
              </div>

              <button
                onClick={onExplorePackages}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <span>View All Tour Packages</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
