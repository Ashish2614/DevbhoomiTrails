import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Calendar, 
  Users, 
  Car, 
  Building2, 
  ShieldCheck, 
  Check, 
  MessageCircle, 
  ArrowRight,
  Info
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { saveCustomTripToSupabase } from '../lib/supabase';

export function TripCalculator({ onCustomBooking }) {

  const [destination, setDestination] = useState('Manali & Solang');
  const [days, setDays] = useState(5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [stayTier, setStayTier] = useState('deluxe'); // budget, deluxe, luxury
  const [transportType, setTransportType] = useState('suv'); // sedan, suv, 4x4, tempo

  // Base calculation logic
  const destBaseRates = {
    'Manali & Solang': 2200,
    'Spiti Valley & Chandratal': 2900,
    'Kedarnath & Badrinath': 2800,
    'Rishikesh & Haridwar': 1900,
    'Auli & Chopta': 2600,
    'Shimla & Kufri': 2300,
    'Kasol & Jibhi': 2100,
    'Dharamshala & Bir': 2200,
  };

  const stayMultipliers = {
    budget: 0.85,
    deluxe: 1.0,
    luxury: 1.45,
  };

  const transportPerDay = {
    sedan: 2800,
    suv: 3800,
    '4x4': 4600,
    tempo: 6200,
  };

  const baseRate = destBaseRates[destination] || 2200;
  const stayCostPerPersonPerDay = baseRate * stayMultipliers[stayTier];
  const totalDays = days;
  const totalTravelers = adults + (children * 0.6); // child concession

  const totalStayMealsCost = stayCostPerPersonPerDay * totalTravelers * totalDays;
  const totalCabCost = transportPerDay[transportType] * totalDays;
  const totalEstimatedCost = Math.round(totalStayMealsCost + totalCabCost);
  const costPerPerson = Math.round(totalEstimatedCost / (adults + children || 1));

  const handleWhatsAppCustomQuote = async () => {
    // Automatically record custom trip lead in Supabase
    await saveCustomTripToSupabase({
      destination,
      days,
      adults,
      children,
      stay_tier: stayTier,
      transport_type: transportType,
      estimated_cost: totalEstimatedCost,
      created_at: new Date().toISOString()
    });

    const text = `*New Custom Trip Plan Inquiry via Devbhoomi Trails Website*
📍 *Destination:* ${destination}
⏱️ *Duration:* ${days} Days / ${days - 1} Nights
👥 *Travelers:* ${adults} Adults, ${children} Children
🏨 *Stay Tier:* ${stayTier.toUpperCase()}
🚗 *Transport:* ${transportType.toUpperCase()}
💰 *Estimated Budget:* ₹${totalEstimatedCost.toLocaleString('en-IN')} (approx ₹${costPerPerson.toLocaleString('en-IN')}/person)

Please share customized day-by-day plan and availability!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };


  return (
    <section id="calculator" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-[30px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-700/50">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Form Inputs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Trip Architect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Calculate Your Custom Trip Cost
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-8 font-normal">
              Get an instant transparent estimate for your Himachal or Uttarakhand vacation. Choose your valley, comfort level, and ride.
            </p>

            <div className="space-y-6">
              {/* 1. Destination */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Valley / Region
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.keys(destBaseRates).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDestination(d)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                        destination === d
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Duration & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      2. Trip Duration
                    </label>
                    <span className="text-xs font-bold text-emerald-400">
                      {days} Days / {days - 1} Nights
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>3 Days (Quick Weekend)</span>
                    <span>10 Days (Grand Circuit)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    3. Travelers Count
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl p-2 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">Adults:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-emerald-400 w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl p-2 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">Kids:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-emerald-400 w-4 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Stay Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Stay Tier & Meals
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setStayTier('budget')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'budget'
                        ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400'
                        : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">Homestay / Camp</p>
                    <p className="text-[11px] text-slate-400">Cozy local vibe & dinner</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStayTier('deluxe')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'deluxe'
                        ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400'
                        : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">3-Star Deluxe</p>
                    <p className="text-[11px] text-slate-400">Valley view + BF & Dinner</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStayTier('luxury')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'luxury'
                        ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400'
                        : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">Luxury Wooden Chalet</p>
                    <p className="text-[11px] text-slate-400">4/5-star suite & jacuzzi</p>
                  </button>
                </div>
              </div>

              {/* 4. Transport Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  5. Private Mountain Vehicle
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'sedan', name: 'Sedan (Dzire)', note: 'Up to 4 pax' },
                    { id: 'suv', name: 'SUV (Innova)', note: 'Comfort family' },
                    { id: '4x4', name: '4x4 Thar/Scorpio', note: 'High Passes' },
                    { id: 'tempo', name: 'Tempo Traveller', note: '9-16 Pax' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTransportType(t.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        transportType === t.id
                          ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <p className="text-xs font-bold text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-400">{t.note}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Estimate Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Estimated Quote
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {destination}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {days}D / {days - 1}N
                </div>
              </div>

              {/* Cost Highlight */}
              <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Estimated Total Package Cost:</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    ₹{totalEstimatedCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    (approx ₹{costPerPerson.toLocaleString('en-IN')}/person)
                  </span>
                </div>
                <p className="text-[11px] text-emerald-600 mt-1 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" /> Includes stays, all breakfasts & dinners, cab & tolls
                </p>
              </div>

              {/* What's Included Quick Checklist */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Stay & Meals ({days - 1} Nights):</span>
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹{Math.round(totalStayMealsCost).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Private {transportType.toUpperCase()} Cab & Fuel:</span>
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹{Math.round(totalCabCost).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Driver Allowance, Toll & Taxes:</span>
                  </span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>24x7 Ground Concierge Support:</span>
                  </span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppCustomQuote}
                  className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Detailed Plan on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onCustomBooking({
                    destination,
                    days,
                    adults,
                    children,
                    stayTier,
                    transportType,
                    estimatedCost: totalEstimatedCost
                  })}
                  className="w-full py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Custom Booking Callback</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                <Info className="w-3 h-3" />
                <span>Zero advance to plan • Flexible dates</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
