import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { saveInquiryToSupabase } from '../lib/supabase';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Manali & Solang Valley',
    travelDate: '',
    guests: '2 Adults',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Save directly to Supabase
    await saveInquiryToSupabase({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      destination: formData.destination,
      travel_date: formData.travelDate,
      guests: formData.guests,
      message: formData.message,
      created_at: new Date().toISOString()
    });
  };


  const handleSendViaWhatsApp = () => {
    const text = `*New Travel Inquiry via Devbhoomi Trails Contact Form*
👤 *Name:* ${formData.name || 'Not provided'}
📞 *Phone:* ${formData.phone || 'Not provided'}
📧 *Email:* ${formData.email || 'Not provided'}
📍 *Destination:* ${formData.destination}
📅 *Preferred Dates:* ${formData.travelDate || 'Flexible'}
👥 *Travelers:* ${formData.guests}
💬 *Message:* ${formData.message || 'Please send itinerary options.'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Get in Touch With Local Mountain Experts</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Plan Your Himalayan Escape Today
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
          Connect directly with our native tour architects in Manali and Rishikesh. We provide free customized quotes and 24x7 trip consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Complete Business Details Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Info Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-600" />
              <span>Official Business Details</span>
            </h3>

            <div className="space-y-5">
              {/* Business Name */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Business Name</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">{BUSINESS_INFO.name}</p>
                <p className="text-xs text-slate-500">{BUSINESS_INFO.legalName}</p>
              </div>

              {/* Phone Numbers */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone Numbers</p>
                <div className="mt-1 flex flex-col gap-1">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>{BUSINESS_INFO.phone} (Main Reservations)</span>
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phoneAlt}`} className="text-sm font-medium text-slate-600 hover:text-emerald-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{BUSINESS_INFO.phoneAlt} (Customer Support)</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Official WhatsApp</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Devbhoomi Trails! I want to inquire about a tour package.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                  <span>{BUSINESS_INFO.whatsapp} (Chat Now)</span>
                </a>
              </div>

              {/* Email Addresses */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Addresses</p>
                <div className="mt-1 flex flex-col gap-1">
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs sm:text-sm font-medium text-slate-700 hover:text-emerald-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                  <a href={`mailto:${BUSINESS_INFO.bookingEmail}`} className="text-xs sm:text-sm font-medium text-slate-500 hover:text-emerald-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{BUSINESS_INFO.bookingEmail}</span>
                  </a>
                </div>
              </div>

              {/* Physical Locations */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Headquarters (Himachal)</p>
                <p className="text-xs font-semibold text-slate-800 mt-1 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </p>

                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-3">Regional Hub (Uttarakhand)</p>
                <p className="text-xs font-semibold text-slate-800 mt-1 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.branchAddress}</span>
                </p>
              </div>

              {/* Hours */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{BUSINESS_INFO.timing}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Send an Inquiry / Request Itinerary
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your details below and our travel architect will reach back with a customized itinerary within 15 minutes.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-2">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our Manali travel specialist has received your request for <strong>{formData.destination}</strong> and is preparing your personalized plan.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open in WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Destination of Choice
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    >
                      <option value="Manali & Solang Valley">Manali & Solang Valley (Himachal)</option>
                      <option value="Spiti Valley & Chandratal">Spiti Valley 4x4 Circuit (Himachal)</option>
                      <option value="Kedarnath & Badrinath">Kedarnath & Char Dham Yatra (Uttarakhand)</option>
                      <option value="Rishikesh & Haridwar">Rishikesh & Ganga Glamping (Uttarakhand)</option>
                      <option value="Auli & Chopta Tungnath">Auli Snow & Chopta Trek (Uttarakhand)</option>
                      <option value="Shimla & Kufri">Shimla & Kufri (Himachal)</option>
                      <option value="Kasol, Jibhi & Parvati Valley">Kasol, Jibhi & Tirthan Valley (Himachal)</option>
                      <option value="Dharamshala & Bir Billing">Dharamshala & Bir Paragliding (Himachal)</option>
                      <option value="Custom Multi-Destination Circuit">Custom Multi-Destination Circuit</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Approximate Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Number of Travelers
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults, 1 Child"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Special Requests / Inquiries
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us if you need pickup from Delhi/Chandigarh, specific stay preferences (luxury chalet, homestay), or special celebrations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Travel Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
