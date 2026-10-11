// Comprehensive data for Devbhoomi Trails & Holidays
// Specializing in Himachal Pradesh & Uttarakhand Tours & Expeditions

export const BUSINESS_INFO = {
  name: "Devbhoomi Trails",
  legalName: "Devbhoomi Trails & Himalayan Holidays Pvt. Ltd.",
  tagline: "Himachal & Uttarakhand Tour Specialists",
  phone: "+91 98160 45892",
  phoneAlt: "+91 94180 23411",
  whatsapp: "+91 98160 45892",
  whatsappNumber: "919816045892",
  email: "contact@devbhoomitrails.com",
  bookingEmail: "bookings@devbhoomitrails.com",
  address: "Opposite Mall Road, Near Circuit House, Manali, Himachal Pradesh 175131",
  branchAddress: "Laxman Jhula Road, Near High Bank, Tapovan, Rishikesh, Uttarakhand 249192",
  timing: "Mon - Sun: 7:00 AM - 10:30 PM IST (24/7 On-Tour Emergency Ground Support)",
  registration: "HP Tourism Govt Approved (Reg: HP-TO-2018-8422)",
  stats: {
    happyTravelers: "18,500+",
    rating: "4.9",
    reviewsCount: "2,400+",
    yearsExperience: "12+",
    certifiedGuides: "35+",
    fleetVehicles: "60+"
  }
};

export const DESTINATIONS = [
  {
    id: "manali",
    name: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    tagline: "Snow peaks, pine forests & adrenaline sports",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    highlight: "Rohtang Pass & Atal Tunnel",
    bestTime: "Oct - Jun",
    avgDays: "4-5 Days",
    altitude: "2,050 m",
    popularSpots: ["Solang Valley", "Atal Tunnel", "Rohtang Pass", "Old Manali", "Hadimba Temple", "Jogini Waterfall"],
    category: "Himachal Pradesh"
  },
  {
    id: "spiti",
    name: "Spiti Valley & Chandratal",
    state: "Himachal Pradesh",
    tagline: "The Middle Land: Ancient monasteries & moon landscapes",
    image: "https://images.unsplash.com/photo-1596761225574-e3c3b0193165?auto=format&fit=crop&w=1200&q=80",
    highlight: "Key Monastery & Chandratal Lake",
    bestTime: "May - Oct",
    avgDays: "7-8 Days",
    altitude: "3,800 m",
    popularSpots: ["Kaza", "Key Monastery", "Kibber", "Chicham Bridge", "Langza", "Hikkim Post Office", "Chandratal Lake"],
    category: "Adventure & Trek"
  },
  {
    id: "kedarnath",
    name: "Kedarnath & Char Dham",
    state: "Uttarakhand",
    tagline: "Divine Himalayas & spiritual awakening at 11,755 ft",
    image: "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?auto=format&fit=crop&w=1200&q=80",
    highlight: "Shri Kedarnath Jyotirlinga Temple",
    bestTime: "May - Jun & Sep - Nov",
    avgDays: "5-6 Days",
    altitude: "3,583 m",
    popularSpots: ["Kedarnath Temple", "Bhairavnath", "Guptkashi", "Sonprayag", "Gaurikund", "Chorabari Tal"],
    category: "Spiritual & Yatras"
  },
  {
    id: "rishikesh",
    name: "Rishikesh & Haridwar",
    state: "Uttarakhand",
    tagline: "Yoga capital of the world, white-water rafting & Ganga Aarti",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    highlight: "Triveni Ghat Aarti & River Rafting",
    bestTime: "Sep - May",
    avgDays: "3-4 Days",
    altitude: "340 m",
    popularSpots: ["Laxman Jhula", "Ram Jhula", "Shivpuri Rafting", "Neer Garh Falls", "The Beatles Ashram", "Parmarth Niketan"],
    category: "Uttarakhand"
  },
  {
    id: "auli",
    name: "Auli & Chopta (Mini Switzerland)",
    state: "Uttarakhand",
    tagline: "Ski slopes, Nanda Devi views & world's highest Shiva temple",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1200&q=80",
    highlight: "Auli Cable Car & Tungnath Trek",
    bestTime: "Dec - Mar (Snow) / Apr - Jun (Lush)",
    avgDays: "5-6 Days",
    altitude: "2,800 m",
    popularSpots: ["Auli Ropeway", "Gorson Bugyal", "Chopta Meadows", "Tungnath Temple", "Chandrashila Summit", "Deoriatal"],
    category: "Uttarakhand"
  },
  {
    id: "shimla",
    name: "Shimla, Kufri & Narkanda",
    state: "Himachal Pradesh",
    tagline: "Colonial charm, Toy Train heritage & apple orchards",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    highlight: "The Ridge & Hatu Peak",
    bestTime: "All Year (Snow Dec-Feb)",
    avgDays: "4-5 Days",
    altitude: "2,276 m",
    popularSpots: ["The Mall Road", "The Ridge", "Jakhoo Temple", "Kufri Fun World", "Narkanda Hatu Peak", "Mashobra"],
    category: "Himachal Pradesh"
  },
  {
    id: "kasol",
    name: "Kasol, Jibhi & Tirthan Valley",
    state: "Himachal Pradesh",
    tagline: "Mystical Parvati River, hippie cafes & wooden treehouses",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlight: "Jibhi Waterfalls & Kheerganga Hot Springs",
    bestTime: "Mar - Jun & Sep - Nov",
    avgDays: "4-5 Days",
    altitude: "1,580 m",
    popularSpots: ["Kasol Village", "Manikaran Sahib", "Tosh", "Jibhi Village", "Jalori Pass", "Serolsar Lake"],
    category: "Himachal Pradesh"
  },
  {
    id: "dharamshala",
    name: "Dharamshala, McLeodganj & Bir",
    state: "Himachal Pradesh",
    tagline: "Dalai Lama's abode, Tibetan culture & world's #2 paragliding",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1200&q=80",
    highlight: "Bir Billing Paragliding & Dalai Lama Temple",
    bestTime: "Sep - Jun",
    avgDays: "4-5 Days",
    altitude: "1,750 m",
    popularSpots: ["Tsuglagkhang Complex", "Bhagsunag Falls", "Triund Trek", "Bir Billing Landing Site", "Dharamkot"],
    category: "Himachal Pradesh"
  },
  {
    id: "nainital",
    name: "Nainital, Mussoorie & Corbett",
    state: "Uttarakhand",
    tagline: "Emerald lakes, mist-covered hills & royal Bengal tigers",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    highlight: "Naini Lake Boating & Corbett Safari",
    bestTime: "Oct - Jun",
    avgDays: "5-6 Days",
    altitude: "2,084 m",
    popularSpots: ["Naini Lake", "Naina Devi Temple", "Kempty Falls", "Mall Road Mussoorie", "Jim Corbett Safari Zones"],
    category: "Uttarakhand"
  }
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-manali-escape",
    title: "Magical Manali, Solang & Rohtang Pass Escape",
    subtitle: "Complete alpine experience with snow activities & Atal Tunnel",
    destination: "Manali, Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 11999,
    originalPrice: 15499,
    rating: 4.9,
    reviews: 580,
    badge: "Most Popular",
    category: "Himachal Pradesh",
    featured: true,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Deluxe Hotel Stays", "Daily Breakfast & Dinner", "Private Cab for Sightseeing", "Atal Tunnel & Solang Valley", "Driver Allowances & Tolls", "24x7 Mountain Support"],
    exclusions: ["Rohtang Pass Permit / Taxi (Direct HP Govt)", "Adventure activity tickets (paragliding/skiing)", "Airfare / Train tickets to Delhi/Chandigarh"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Manali & Local Acclimatization", desc: "Pickup from Manali Volvo stand / Bhuntar Airport. Check into your boutique mountain resort. Evening stroll along Mall Road & visit Hadimba Devi Temple." },
      { day: "Day 2", title: "Solang Valley & Atal Tunnel Adventure", desc: "Drive to Solang Valley for adventure activities (zipline, paragliding, ATV rides). Continue through the engineering marvel of Atal Tunnel to Sissu (Lahaul Valley) waterfalls." },
      { day: "Day 3", title: "Rohtang Pass Snow Excursion", desc: "Early morning drive up to Rohtang Pass (subject to weather/permit) offering 360-degree snow panorama. Return via Gulaba and Marhi." },
      { day: "Day 4", title: "Naggar Castle & Heritage Village Walk", desc: "Visit historic 500-year-old Naggar Castle, Nicholas Roerich Art Gallery, and taste fresh trout fish by the river." },
      { day: "Day 5", title: "Old Manali Cafe Hopping & Departure", desc: "Morning leisure in Old Manali pine trails and cafes. Evening drop at Volvo stand for Delhi/Chandigarh journey with cherished memories." }
    ]
  },
  {
    id: "pkg-spiti-expedition",
    title: "Spiti Valley 4x4 Circuit & Chandratal Lake Camp",
    subtitle: "Epic high-altitude road trip across Kinnaur, Kaza & Kunzum Pass",
    destination: "Spiti Valley, Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: 21499,
    originalPrice: 26999,
    rating: 4.95,
    reviews: 340,
    badge: "Ultimate Adventure",
    category: "Adventure & Trek",
    featured: true,
    image: "https://images.unsplash.com/photo-1596761225574-e3c3b0193165?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Dedicated 4x4 Thar / Scorpio", "Heritage Homestays & Swiss Tents", "All Meals (Breakfast & Dinner)", "Key Monastery & Hikkim Post Office", "Chandratal Camp Stay", "Certified High-Altitude Lead"],
    exclusions: ["Personal expenses & tips", "Oxygen cylinder refills if required", "Monument entry fees"],
    itinerary: [
      { day: "Day 1", title: "Shimla to Kalpa via Kinnaur Valley", desc: "Scenic drive through Hindustan-Tibet road along the Sutlej river. Overnight stay facing sacred Kinner Kailash." },
      { day: "Day 2", title: "Kalpa to Nako & Tabo Monasteries", desc: "Enter Spiti district. Visit ancient 1,000-year-old Tabo Monastery, known as the Ajanta of the Himalayas." },
      { day: "Day 3", title: "Tabo to Dhankar & Kaza", desc: "Climb to Dhankar Gompa perched atop dramatic cliff spurs. Arrive in Kaza, the cultural capital of Spiti." },
      { day: "Day 4", title: "Highest Villages: Langza, Hikkim & Komic", desc: "Send postcards from Hikkim (world's highest post office), visit world's highest motorable village Komic, and search for marine fossils in Langza." },
      { day: "Day 5", title: "Key Monastery & Chicham Suspension Bridge", desc: "Explore spiritual Key Monastery, then cross Asia's highest suspension bridge at Chicham." },
      { day: "Day 6", title: "Kunzum Pass to Chandratal Lake", desc: "Ascend 15,060 ft Kunzum Pass with prayer flags. Camp under a million stars near the emerald crescent Moon Lake (Chandratal)." },
      { day: "Day 7", title: "Chandratal to Manali via Batal & Atal Tunnel", desc: "Trek along Batal river crossings, conquer rugged terrains, enter Atal Tunnel and reach Manali." },
      { day: "Day 8", title: "Manali Departure", desc: "Morning breakfast with apple orchard views and onward journey." }
    ]
  },
  {
    id: "pkg-kedarnath-badrinath",
    title: "Divine Kedarnath & Badrinath Do Dham Yatra",
    subtitle: "Sacred pilgrimage journey with VIP Darshan & mountain stays",
    destination: "Kedarnath & Badrinath, Uttarakhand",
    state: "Uttarakhand",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 16999,
    originalPrice: 20999,
    rating: 4.92,
    reviews: 720,
    badge: "Spiritual Choice",
    category: "Spiritual & Yatras",
    featured: true,
    image: "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Dedicated Vehicle Haridwar-to-Haridwar", "Verified Hotel / Ashram Stays", "Sonprayag to Kedarnath Trek Assistance", "Kedarnath Priority Queue Support", "Pure Veg Sattvic Meals", "Char Dham Govt Biometric Registration"],
    exclusions: ["Helicopter tickets (Available upon prior request)", "Pony / Palki / Doli charges on trek", "Personal pooja samagri charges"],
    itinerary: [
      { day: "Day 1", title: "Haridwar / Rishikesh to Guptkashi", desc: "Pickup from Haridwar/Dehradun. Drive along sacred Mandakini and Alaknanda rivers via Devprayag Sangam to Guptkashi." },
      { day: "Day 2", title: "Guptkashi to Kedarnath Ji", desc: "Drive to Sonprayag/Gaurikund. Trek (or Helicopter) to Kedarnath temple (16 km). Attend the divine Evening Aarti amidst snow peaks." },
      { day: "Day 3", title: "Morning Darshan & Trek Down to Guptkashi", desc: "Early morning Abhishek Darshan of Baba Kedar. Soak in divine blessings and trek down to Sonprayag. Overnight in Guptkashi." },
      { day: "Day 4", title: "Guptkashi to Badrinath Dham via Chopta", desc: "Spectacular scenic route passing through lush green Chopta meadows. Arrive in Badrinath, take holy dip in Tapt Kund and attend evening Aarti." },
      { day: "Day 5", title: "Badrinath & Mana (First Indian Village) to Rudraprayag", desc: "Visit Mana Village, Vyas Gufa, Bhim Pul, and origin of Saraswati river. Drive to Rudraprayag confluence." },
      { day: "Day 6", title: "Rudraprayag to Rishikesh / Haridwar Departure", desc: "Return drive with stops at Rishikesh Laxman Jhula and Ram Jhula. Drop at Haridwar railway station." }
    ]
  },
  {
    id: "pkg-auli-chopta",
    title: "Auli Snow Paradise & Chopta Tungnath Chandrashila Trek",
    subtitle: "World's highest Shiva temple trek & panoramic Nanda Devi panoramas",
    destination: "Auli & Chopta, Uttarakhand",
    state: "Uttarakhand",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 13499,
    originalPrice: 16999,
    rating: 4.88,
    reviews: 410,
    badge: "Trending in 2026",
    category: "Uttarakhand",
    featured: true,
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["All Transfers in Sanitized SUV / Sedan", "Cozy Swiss Alpine Tents / Resort in Chopta & Auli", "Certified Trek Leader for Tungnath", "Bonfire & Music Evenings", "All Breakfast & Dinners", "Trek Forest Entry Permits"],
    exclusions: ["Auli Cable Car ticket (Direct booking at Joshimath)", "Personal trekking gear / crampons", "Snacks and mineral water"],
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Chopta (Mini Switzerland)", desc: "Scenic mountain drive via Devprayag and Ukhimath. Check-in to Swiss camps nestled amidst alpine rhododendron forests." },
      { day: "Day 2", title: "Tungnath (12,073 ft) & Chandrashila Summit (13,123 ft)", desc: "Summit day! Trek to highest Shiva temple Tungnath and continue to Chandrashila for sweeping 360-degree views of Chaukhamba and Nanda Devi." },
      { day: "Day 3", title: "Chopta to Joshimath & Auli Gondola", desc: "Drive to Joshimath and take India's highest cable car up to Auli. Experience ski slopes, artificial lake, and dramatic sunset over peaks." },
      { day: "Day 4", title: "Auli Gorson Bugyal Exploration", desc: "Hike through lush oak woods to Gorson Bugyal meadows. Relish panoramic mountain silence." },
      { day: "Day 5", title: "Joshimath to Rishikesh Departure", desc: "Return drive via Rudraprayag. Evening drop at Rishikesh or Haridwar." }
    ]
  },
  {
    id: "pkg-shimla-manali-combo",
    title: "Shimla Queen of Hills & Manali Classic Circuit",
    subtitle: "The ultimate quintessential Himachal family & couple holiday",
    destination: "Shimla & Manali, Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 14999,
    originalPrice: 18999,
    rating: 4.87,
    reviews: 890,
    badge: "Family Favorite",
    category: "Himachal Pradesh",
    featured: false,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Chauffeured Private Cab Delhi-to-Delhi", "3-Star Deluxe Valley-Facing Hotels", "Daily Buffet Breakfast & Dinner", "Kufri Horse Riding Tour", "Solang Valley & Atal Tunnel Excursion", "All Toll, Parking & Taxes"],
    exclusions: ["Monument and museum entry tickets", "Activities in Kufri & Solang", "Personal laundry & room service"],
    itinerary: [
      { day: "Day 1", title: "Delhi / Chandigarh to Shimla", desc: "Scenic drive ascending the Shivalik hills. Evening walk on Mall Road, Ridge, and Christ Church." },
      { day: "Day 2", title: "Kufri & Mashobra Day Tour", desc: "Visit Kufri winter sports hub, Himalayan Nature Park, and pine trails in Mashobra." },
      { day: "Day 3", title: "Shimla to Manali via Kullu Valley", desc: "Scenic highway drive passing Pandoh Dam, Hanogi Mata, and Kullu Shawl Weaving Centers with white-water rafting." },
      { day: "Day 4", title: "Solang Valley & Atal Tunnel", desc: "Adventure day at Solang Valley and through Atal Tunnel to North Portal." },
      { day: "Day 5", title: "Manali Town & Hadimba Temple", desc: "Sightseeing of Vashisht Hot Springs, Old Manali, and Tibetan Monasteries." },
      { day: "Day 6", title: "Manali to Delhi / Chandigarh Return", desc: "Breakfast and comfortable return drive with fond memories." }
    ]
  },
  {
    id: "pkg-rishikesh-adventure",
    title: "Rishikesh Adrenaline, Rafting & Riverside Glamping",
    subtitle: "White-water rapids, cliff jumping, cliff camping & sacred Ganga Aarti",
    destination: "Rishikesh, Uttarakhand",
    state: "Uttarakhand",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: 6499,
    originalPrice: 8499,
    rating: 4.91,
    reviews: 520,
    badge: "Weekend Escape",
    category: "Uttarakhand",
    featured: false,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Luxury Riverside Swiss Camp with Pool", "16 km Shivpuri White Water Rafting with Cliff Jump", "All Meals (Buffet BF, Lunch, Evening Snacks, Dinner)", "Evening Campfire & Acoustic Music", "Waterfall Trek to Neer Garh", "Local transfers"],
    exclusions: ["Bungee jumping / Giant swing (Can be added)", "Beverages and personal laundry", "Transport from outside Rishikesh"],
    itinerary: [
      { day: "Day 1", title: "Camp Check-in & Neer Garh Waterfall Hike", desc: "Welcome drink at riverside luxury glamping. Afternoon hike to pristine waterfalls. Evening musical bonfire." },
      { day: "Day 2", title: "16KM River Rafting & Triveni Ghat Aarti", desc: "Tackle Grade III+ rapids like Golf Course and Roller Coaster. Evening spiritual immersion at Triveni Ghat Aarti." },
      { day: "Day 3", title: "Yoga Session & Departure", desc: "Sunrise riverside yoga session, buffet breakfast, and check-out." }
    ]
  },
  {
    id: "pkg-dharamshala-bir",
    title: "Dharamshala, McLeodganj & Bir Billing Paragliding",
    subtitle: "Tibetan spirituality, Triund foothills & world's premier flight site",
    destination: "Dharamshala & Bir, Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 9999,
    originalPrice: 12999,
    rating: 4.93,
    reviews: 290,
    badge: "Fly High",
    category: "Himachal Pradesh",
    featured: false,
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Boutique Tibetan-style Hotel & Camp in Bir", "Tandem Paragliding Flight from 8,000 ft with GoPro footage", "Dharamshala & McLeodganj Sightseeing Cab", "Daily Breakfast & Dinner", "Tibetan Monastery Visits"],
    exclusions: ["Triund overnight camping trek (Optional addon)", "Cafe meals in Dharamkot", "Tips & Porterage"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Dharamshala / McLeodganj", desc: "Check-in, visit Dalai Lama Temple, Tibetan Museum and explore Bhagsunag." },
      { day: "Day 2", title: "Dharamshala to Bir Billing via Palampur", desc: "Drive past lush Kangra tea gardens and Baijnath Shiva Temple to Bir Billing eco-valley." },
      { day: "Day 3", title: "World-Class Paragliding from Billing", desc: "Take off from Billing (2,400m) and glide like an eagle down to Bir landing site with 4K video. Evening monastery visit." },
      { day: "Day 4", title: "Departure", desc: "Breakfast, cafe stroll, and drop at Pathankot or Gaggal airport." }
    ]
  },
  {
    id: "pkg-honeymoon-luxury",
    title: "Himalayan Romance: Luxury Chalet Honeymoon Escape",
    subtitle: "Candlelight dinners, Jacuzzi mountain suites & private chauffeured tours",
    destination: "Manali & Jibhi, Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 24999,
    originalPrice: 32000,
    rating: 4.98,
    reviews: 460,
    badge: "Honeymoon Special",
    category: "Honeymoon Specials",
    featured: true,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["5-Star Wooden Mountain Chalet with Private Balcony", "Flower Bed Decoration & Honeymoon Cake", "1 Candlelight Dinner with Wine/Sparkling Juice", "Private Dedicated Sedan / SUV for entire trip", "Atal Tunnel, Solang & Jibhi Waterfall Excursions", "Daily Gourmet Breakfast & Dinner"],
    exclusions: ["Airfare", "Personal shopping & spa charges", "Additional adventure sports"],
    itinerary: [
      { day: "Day 1", title: "Romantic Arrival & Flower Suite Welcome", desc: "Private pickup from Chandigarh/Bhuntar. Welcome flower suite setup and relaxing mountain sunset." },
      { day: "Day 2", title: "Solang Snow Fun & Solitude", desc: "Scenic private excursion to Solang valley. Evening cozy cafe dinner in Old Manali." },
      { day: "Day 3", title: "Atal Tunnel & Sissu Romantic Picnic", desc: "Cross the Pir Panjal range to Lahaul valley. Scenic riverside picnic near Sissu waterfall." },
      { day: "Day 4", title: "Manali to Jibhi Pine Treehouse", desc: "Transfer to secluded wooden cottages in Jibhi. Candlelight dinner under pine canopies." },
      { day: "Day 5", title: "Jalori Pass & Serolsar Lake Walk", desc: "Gentle romantic hike through oak woods to hidden Serolsar Lake." },
      { day: "Day 6", title: "Sweet Departure", desc: "Gourmet mountain breakfast and chauffeured drive back." }
    ]
  }
];

export const SERVICES = [
  {
    id: "custom-tours",
    title: "Customized Tour Packages",
    desc: "Bespoke itineraries tailored to your pace, preferences, and group size across Himachal & Uttarakhand.",
    icon: "Compass",
    tag: "Flexible & Personalized"
  },
  {
    id: "char-dham",
    title: "Sacred Yatras & Do Dham",
    desc: "Kedarnath, Badrinath, Gangotri & Yamunotri with priority queue support, biometric registration & helicopters.",
    icon: "Sun",
    tag: "Government Registered"
  },
  {
    id: "mountain-cabs",
    title: "Private Mountain Cabs & 4x4 Fleet",
    desc: "Experienced local Pahadi drivers behind 4x4 Thars, Innova Crystas, Scorpios, and luxury Tempo Travellers.",
    icon: "Car",
    tag: "All-Weather Certified"
  },
  {
    id: "adventure-treks",
    title: "Trekking & High-Altitude Camps",
    desc: "From beginner treks like Triund & Tungnath to legendary circuits like Spiti & Hampta Pass with certified guides.",
    icon: "Mountain",
    tag: "Safety-First Protocols"
  },
  {
    id: "honeymoon-escapes",
    title: "Romantic Honeymoon Escapes",
    desc: "Luxury wooden chalets, Jacuzzi suites, candlelight dinners, and curated private excursions in secluded hills.",
    icon: "Heart",
    tag: "VIP Hospitality"
  },
  {
    id: "stays-glamping",
    title: "Resorts, Homestays & Glamping",
    desc: "Handpicked boutique properties, apple orchard homestays, and Swiss riverside camps verified for hygienic luxury.",
    icon: "Tent",
    tag: "100% Verified Stays"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram & Ananya Sharma",
    city: "Mumbai, Maharashtra",
    trip: "Magical Manali & Rohtang Escape",
    rating: 5,
    text: "Devbhoomi Trails planned our 5-day Manali holiday flawlessly! Our driver Bhupender bhaiya was so experienced in snow terrains, and the valley-facing hotel was breathtaking. True 5-star Pahadi hospitality!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Dr. Rajeshwar Iyer",
    city: "Bangalore, Karnataka",
    trip: "Kedarnath & Badrinath Yatra",
    rating: 5,
    text: "Traveling with elderly parents for Char Dham was concerning, but Devbhoomi Trails handled every permit, helicopter slot, and pony assistance with utmost care. Devotion met total peace of mind.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Pooja Malhotra & Group",
    city: "New Delhi",
    trip: "Spiti Valley 4x4 Circuit",
    rating: 5,
    text: "The Spiti trip in their 4x4 Thar was the best adventure of our lives! Crossing Kunzum Pass and stargazing at Chandratal camp was pure magic. Transparent pricing, no hidden costs. 100% recommended!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Rohan & Sneha Joshi",
    city: "Pune, Maharashtra",
    trip: "Auli & Chopta Tungnath Trek",
    rating: 5,
    text: "Standing at Chandrashila summit at 13,000 ft with Chaukhamba peaks glowing at sunrise was unreal. The Swiss camps in Chopta had warm blankets, delicious hot meals, and bonfires.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    question: "When is the best time to visit Himachal Pradesh and Uttarakhand?",
    answer: "Both regions offer unique wonders throughout the year! For snow and winter sports (Manali, Solang, Auli), visit December through March. For pleasant summer weather, apple blossoms, and family holidays, April through June is ideal. For autumn colors, crystal-clear Himalayan views, and uncrowded serenity, September through November is phenomenal."
  },
  {
    question: "Do you arrange Rohtang Pass, Spiti, and Char Dham registration permits?",
    answer: "Yes, absolutely! We handle all mandatory permits including National Green Tribunal (NGT) Rohtang Pass permits, Inner Line Permits for foreign nationals visiting Spiti/Kinnaur border sectors, and official Uttarakhand Char Dham biometric registrations."
  },
  {
    question: "Can we customize an itinerary according to our dates, budget, and group size?",
    answer: "Yes, 100%! Almost 65% of our guests customize their trips. You can use our interactive Trip Calculator on this page or WhatsApp our tour architect directly to choose your pickup city (Delhi, Chandigarh, Dehradun, etc.), vehicle type, hotel tier, and duration."
  },
  {
    question: "Are your drivers native mountain drivers?",
    answer: "Yes, every driver in our fleet is a native Pahadi driver with a minimum of 7 years of high-altitude mountain driving experience. They know all hairpin bends, weather patterns, and safe road shortcuts."
  },
  {
    question: "What is your booking advance and cancellation policy?",
    answer: "We offer traveler-friendly booking terms. You can reserve your dates with just a 25% token advance. Full flexibility: reschedule free of cost up to 10 days before your journey start date, or get prompt refunds as per our transparent policy."
  },
  {
    question: "How do we book a tour or get an instant quote?",
    answer: "You can click 'Book Now' on any package, use the Trip Calculator, or directly click our WhatsApp button (+91 98160 45892). Our Manali and Rishikesh travel specialists respond within 10-15 minutes with complete day-by-day plans."
  }
];
