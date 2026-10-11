import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedCompanionSection } from './components/TrustedCompanionSection';
import { DestinationExplorer } from './components/DestinationExplorer';
import { TourPackagesSection } from './components/TourPackagesSection';
import { TripCalculator } from './components/TripCalculator';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ItineraryModal } from './components/ItineraryModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TOUR_PACKAGES } from './data/travelData';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState(null);

  const [itineraryModalOpen, setItineraryModalOpen] = useState(false);
  const [selectedPackageForItinerary, setSelectedPackageForItinerary] = useState(null);

  const [externalFilter, setExternalFilter] = useState('');

  // Search handler from Hero Section
  const handleHeroSearch = (searchData) => {
    if (searchData.destination) {
      setExternalFilter(searchData.destination);
    }
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Destination clicked from DestinationExplorer
  const handleSelectDestination = (destName) => {
    setExternalFilter(destName);
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open booking modal
  const handleOpenBooking = (pkg = null) => {
    setSelectedPackageForBooking(pkg);
    setBookingModalOpen(true);
  };

  // View itinerary modal
  const handleViewItinerary = (pkg) => {
    setSelectedPackageForItinerary(pkg);
    setItineraryModalOpen(true);
  };

  // Scroll to planner / calculator
  const handleOpenPlanner = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom booking from calculator
  const handleCustomBooking = (calcData) => {
    setSelectedPackageForBooking({
      title: `Custom Tour: ${calcData.destination} (${calcData.days} Days)`,
      price: calcData.estimatedCost,
      duration: `${calcData.days} Days`,
      destination: calcData.destination,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onSelectDestination={handleSelectDestination}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section matching user's reference mockup */}
        <HeroSection 
          onSearch={handleHeroSearch}
          onOpenPlanner={handleOpenPlanner}
        />

        {/* 2. Your Trusted Travel Companion matching user's reference mockup */}
        <TrustedCompanionSection 
          onExplorePackages={() => {
            const el = document.getElementById('packages');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Destination Explorer for Himachal & Uttarakhand */}
        <DestinationExplorer 
          onSelectDestination={handleSelectDestination}
        />

        {/* 4. Filterable Tour Packages */}
        <TourPackagesSection 
          onOpenBooking={handleOpenBooking}
          onViewItinerary={handleViewItinerary}
          externalFilter={externalFilter}
        />

        {/* 5. Custom Trip Cost Calculator */}
        <TripCalculator 
          onCustomBooking={handleCustomBooking}
        />

        {/* 6. Comprehensive Services Offered */}
        <ServicesSection 
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. Verified Customer Reviews */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Contact Section with complete business info & inquiry form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageData={selectedPackageForBooking}
      />

      <ItineraryModal 
        isOpen={itineraryModalOpen}
        onClose={() => setItineraryModalOpen(false)}
        packageData={selectedPackageForItinerary}
        onBookNow={(pkg) => handleOpenBooking(pkg)}
      />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar 
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

export default App;
