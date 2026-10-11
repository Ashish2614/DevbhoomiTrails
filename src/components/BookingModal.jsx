import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { saveBookingToSupabase } from '../lib/supabase';

export function BookingModal({ isOpen, onClose, packageData }) {
  if (!isOpen) return null;

  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    pickupCity: 'Delhi (Airport / Railway Station)',
    adults: 2,
    children: 0,
    hotelCategory: '3-Star Deluxe',
    specialRequests: ''
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const generatedId = `DBT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setConfirmed(true);

    // Save directly to Supabase
    await saveBookingToSupabase({
      booking_id: generatedId,
      customer_name: bookingDetails.name,
      phone: bookingDetails.phone,
      travel_date: bookingDetails.travelDate,
      pickup_city: bookingDetails.pickupCity,
      adults: bookingDetails.adults,
      children: bookingDetails.children,
      hotel_category: bookingDetails.hotelCategory,
      notes: bookingDetails.specialRequests,
      package_name: packageData?.title || 'Custom Tour',
      price: packageData?.price || 0,
      created_at: new Date().toISOString()
    });
  };


  const handleDirectWhatsAppBooking = () => {
    const text = `*New Booking Request via Devbhoomi Trails Website*
📦 *Tour Package:* ${packageData?.title || 'Custom Tour'}
💰 *Price:* ₹${packageData?.price?.toLocaleString('en-IN') || 'Quote Request'} / person
👤 *Guest Name:* ${bookingDetails.name || 'Not provided'}
📞 *Phone:* ${bookingDetails.phone || 'Not provided'}
📅 *Travel Date:* ${bookingDetails.travelDate || 'Flexible'}
📍 *Pickup Location:* ${bookingDetails.pickupCity}
👥 *Guests:* ${bookingDetails.adults} Adults, ${bookingDetails.children} Children
🏨 *Stay Tier:* ${bookingDetails.hotelCategory}
💬 *Notes:* ${bookingDetails.specialRequests || 'None'}

Please confirm availability and share advance payment details!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700">
              Himalayan Tour Reservation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 truncate max-w-sm">
              {packageData?.title || "Book Your Himalayan Journey"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 flex-1">
          {confirmed ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-1">
                Booking Request Submitted!
              </h4>
              <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-3">
                Reference ID: {bookingId}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Thank you, <strong>{bookingDetails.name}</strong>. Our travel manager from Manali will contact you at <strong>{bookingDetails.phone}</strong> within 15 minutes to confirm availability and share your customized day-by-day voucher.
              </p>

              <div className="space-y-2 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleDirectWhatsAppBooking}
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect Immediately on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Package Snapshot Banner */}
              {packageData && (
                <div className="bg-slate-50 rounded-2xl p-3.5 mb-5 border border-slate-100 flex items-center gap-3">
                  {packageData.image && (
                    <img
                      src={packageData.image}
                      alt={packageData.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                  )}
                  <div className="overflow-hidden flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate">{packageData.title}</p>
                    <p className="text-[11px] text-slate-500">{packageData.duration} • {packageData.destination}</p>
                    {packageData.price && (
                      <p className="text-xs font-extrabold text-emerald-700 mt-0.5">
                        ₹{packageData.price.toLocaleString('en-IN')} <span className="text-[10px] text-slate-400 font-normal">/ person</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Verma"
                      value={bookingDetails.name}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={bookingDetails.phone}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Preferred Travel Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDetails.travelDate}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, travelDate: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Pickup City / Hub
                    </label>
                    <select
                      value={bookingDetails.pickupCity}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, pickupCity: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                    >
                      <option value="Delhi (Airport / Railway Station)">Delhi (Airport / Station)</option>
                      <option value="Chandigarh (Airport / Station)">Chandigarh (Airport / Station)</option>
                      <option value="Dehradun / Jolly Grant Airport">Dehradun / Jolly Grant Airport</option>
                      <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                      <option value="Manali / Bhuntar Airport">Direct in Manali / Bhuntar</option>
                      <option value="Rishikesh">Direct in Rishikesh</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Adults (12+ yrs)</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={bookingDetails.adults}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, adults: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Children (under 12)</label>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      value={bookingDetails.children}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, children: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Special Notes / Inclusions
                  </label>
                  <textarea
                    rows="2"
                    placeholder="E.g. Honeymoon cake decoration, vegetarian meals only, senior citizen friendly stops..."
                    value={bookingDetails.specialRequests}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequests: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    Confirm & Reserve Tour
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsAppBooking}
                    className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant Booking via WhatsApp</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No advance payment needed right now • Pay 25% token after itinerary approval</span>
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
