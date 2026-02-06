'use client'

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  User,
  ArrowRight,
  CheckCircle2,
  Calendar,
  X,
  Menu,
  ChevronRight,
  ArrowLeft,
  Info,
  Package,
  CreditCard,
  ShoppingCart,
  Plus // Plus icon add kora hoyeche
} from 'lucide-react';

// --- Service Data (Product Style) ---
const SERVICES = [
  { 
    id: 1, 
    title: "Full House Wiring", 
    category: "Electric", 
    price: 5000, 
    time: "2-3 Days",
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=600",
    description: "Apnar notun bari ba purono barir full electric wiring er jonno best service. Amader expert team sob dekhe nibe.",
    includes: ["Point to Point Wiring", "DB Box Setting", "Switchboard Installation", "Safety Test"],
    excludes: ["Materials (Wire, Switch)", "Wall Cutting Charge"]
  },
  { 
    id: 2, 
    title: "AC Master Service", 
    category: "Appliance", 
    price: 1500, 
    time: "2 Hours",
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?q=80&w=600",
    description: "AC-r bhetor o bahir porishkar kore performance baranor jonno master service.",
    includes: ["Filter Cleaning", "Gas Pressure Check", "Indoor/Outdoor Wash"],
    excludes: ["Gas Refill", "Spare Parts"]
  },
  { 
    id: 3, 
    title: "Wall Damp Repair", 
    category: "Mason", 
    price: 2500, 
    time: "1 Day",
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600",
    description: "Deyaler lona ba damp somossar permanent somadhan.",
    includes: ["Scraping", "Chemical Coating", "Primer Application"],
    excludes: ["Final Paint", "Putty Material"]
  },
  { 
    id: 4, 
    title: "Kitchen Deep Clean", 
    category: "Cleaning", 
    price: 2000, 
    time: "4 Hours",
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1556911220-e15224bbafb0?q=80&w=600",
    description: "Rannaghorer tel-koshte porishkar korar specialized service.",
    includes: ["Chimney Cleaning", "Floor Scrubbing", "Cabinet Degreasing"],
    excludes: ["Deep Pests Control"]
  }
];

const CATEGORIES = [
  { id: 'all', name: "All", icon: Package },
  { id: 'elec', name: "Electric", icon: Zap },
  { id: 'plum', name: "Plumbing", icon: Droplets },
  { id: 'mason', name: "Masonry", icon: Hammer },
  { id: 'clean', name: "Cleaning", icon: Paintbrush },
];

export default function App() {
  const [view, setView] = useState('home'); // 'home', 'shop', 'details', 'checkout', 'success'
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredServices = useMemo(() => {
    return SERVICES.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'All' || s.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  // --- Layout Components ---
  const Navbar = () => (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Service<span className="text-blue-600">Link</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-600">
          <button onClick={() => setView('home')} className="hover:text-blue-600">Home</button>
          <button onClick={() => setView('shop')} className="hover:text-blue-600">All Services</button>
          <button className="hover:text-blue-600">Offers</button>
        </div>
        <div className="flex items-center space-x-5">
          <button className="text-gray-400 hover:text-blue-600"><User size={20} /></button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition">Login</button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div className="space-y-4">
          <span className="text-xl font-bold text-gray-900">ServiceLink</span>
          <p className="text-gray-500">Service Link holo apnar barir protiti somossar proshadhon. Amra best quality expert assignment nishit kori.</p>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6 uppercase tracking-widest text-[10px]">Information</h4>
          <ul className="space-y-3 text-gray-500">
            <li>About Us</li>
            <li>How it Works</li>
            <li>Service Areas</li>
          </ul>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6 uppercase tracking-widest text-[10px]">Support</h4>
          <ul className="space-y-3 text-gray-500">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Safety Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6 uppercase tracking-widest text-[10px]">Newsletter</h4>
          <div className="flex bg-white border border-gray-200 rounded-lg p-1">
            <input type="text" placeholder="Email" className="bg-transparent border-none text-xs px-3 focus:ring-0 w-full" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs font-bold">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );

  // --- Views ---

  if (view === 'home') {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <header className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap size={14} /> <span>Trusted by 10k+ Households</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Apnar Barir Protiti <br /> <span className="text-blue-600">Service</span> Ekhon Ek Jaygay
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              Electrician thake Plumber—shob dhoroner expert service paben ekhanei. Apni sudu service choose korun, baki kaj amader.
            </p>
            <div className="max-w-xl mx-auto flex bg-white p-2 rounded-2xl shadow-2xl border border-gray-100">
              <div className="flex-1 flex items-center px-4">
                <Search size={20} className="text-gray-300 mr-3" />
                <input 
                  type="text" 
                  placeholder="Ki service dorkar apnar?" 
                  className="w-full border-none focus:ring-0 text-sm"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                onClick={() => setView('shop')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Featured Services</h2>
              <p className="text-gray-400 mt-2">Amader shoptheke besi chahida somponno service gulo</p>
            </div>
            <button onClick={() => setView('shop')} className="text-blue-600 font-bold flex items-center hover:underline">
              View Shop <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map(s => (
              <div 
                key={s.id} 
                className="group cursor-pointer bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition duration-500"
                onClick={() => {setSelectedService(s); setView('details');}}
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={s.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={s.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {s.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-yellow-500 text-xs font-bold">
                    <Star size={14} fill="currentColor" className="mr-1" /> {s.rating}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">{s.title}</h3>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-2xl font-black text-gray-900">৳{s.price}</span>
                    <div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (view === 'shop') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <aside className="md:w-64 space-y-10">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Filter Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(c => {
                    const Icon = c.icon;
                    return (
                      <button 
                        key={c.id} 
                        onClick={() => setActiveCategory(c.name)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition font-bold text-sm
                          ${activeCategory === c.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                      >
                        <Icon size={18} />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="bg-blue-900 p-6 rounded-[2rem] text-white space-y-4">
                <h4 className="font-bold">Need Custom Help?</h4>
                <p className="text-xs text-blue-200 leading-relaxed">Apnar jodi list er baire kono custom kaj thake, tahole amader call korun.</p>
                <button className="w-full bg-white text-blue-900 py-3 rounded-xl text-xs font-black uppercase tracking-widest">Call Center</button>
              </div>
            </aside>

            <main className="flex-1">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-gray-900">{activeCategory} Services</h2>
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-gray-500">
                  Total: {filteredServices.length} Results
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map(s => (
                  <div 
                    key={s.id} 
                    className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden group hover:shadow-2xl transition duration-500 cursor-pointer"
                    onClick={() => {setSelectedService(s); setView('details');}}
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img src={s.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={s.title} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                      <div className="flex items-center text-xs text-gray-400 mb-4">
                        <Clock size={14} className="mr-1" /> Estimated: {s.time}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-black text-blue-600">৳{s.price}</span>
                        <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-blue-600">Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (view === 'details' && selectedService) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <button onClick={() => setView('shop')} className="flex items-center text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black mb-10 transition">
            <ArrowLeft size={16} className="mr-2" /> Back to List
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">{selectedService.title}</h2>
                <div className="flex items-center space-x-6 text-sm font-bold text-gray-500">
                  <div className="flex items-center"><Star className="text-yellow-400 mr-1" fill="currentColor" size={16} /> {selectedService.rating} Rating</div>
                  <div className="flex items-center"><Clock className="text-blue-500 mr-1" size={16} /> {selectedService.time} Time</div>
                </div>
                <p className="text-gray-500 leading-relaxed text-lg">{selectedService.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 sticky top-24">
                <div className="flex justify-between items-end mb-10">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Total Booking Cost</span>
                  <span className="text-4xl font-black text-blue-600">৳{selectedService.price}</span>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h4 className="flex items-center text-sm font-black uppercase tracking-widest text-gray-900">
                      <CheckCircle2 size={18} className="text-green-500 mr-2" /> What's Included
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.includes.map((inc, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-3 shrink-0"></span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center text-sm font-black uppercase tracking-widest text-gray-400">
                      <X size={18} className="text-red-400 mr-2" /> Not Included
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.excludes.map((exc, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400 italic">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 mr-3 shrink-0"></span> {exc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => setView('checkout')}
                    className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition shadow-xl shadow-blue-100 flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={20} />
                    <span>Proceed to Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (view === 'checkout') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic">Checkout</h2>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Review & Confirm Service</p>
            </div>

            <div className="flex items-center space-x-6 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <img src={selectedService?.image} className="w-20 h-20 rounded-xl object-cover" alt="Service" />
              <div>
                <h4 className="font-bold text-gray-900">{selectedService?.title}</h4>
                <p className="text-blue-600 font-black">৳{selectedService?.price}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input type="text" placeholder="Apnar Nam" className="w-full bg-gray-50 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                  <input type="text" placeholder="017xxxxxxxx" className="w-full bg-gray-50 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Address</label>
                <textarea placeholder="Barir thikana likhun..." className="w-full bg-gray-50 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-blue-500 h-24"></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Preferred Date</label>
                <input type="date" className="w-full bg-gray-50 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-[2rem] space-y-4">
              <div className="flex justify-between items-center opacity-60 text-xs uppercase tracking-widest font-bold">
                <span>Service Fee</span>
                <span>৳{selectedService?.price}</span>
              </div>
              <div className="flex justify-between items-center opacity-60 text-xs uppercase tracking-widest font-bold">
                <span>Visiting Charge</span>
                <span className="text-green-400 font-black">FREE</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <span className="text-sm font-black uppercase tracking-[0.2em]">Total Amount</span>
                <span className="text-2xl font-black text-blue-400">৳{selectedService?.price}</span>
              </div>
            </div>

            <button 
              onClick={() => setView('success')}
              className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition shadow-xl"
            >
              Confirm Booking
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (view === 'success') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Order Successfully Placed!</h2>
        <p className="text-gray-500 max-w-md leading-relaxed mb-10">
          Apnar booking request amra peyechi. Khub druto amader ekjon expert agent apnake assignment er details jananor jonno call korbe.
        </p>
        <button 
          onClick={() => setView('home')}
          className="bg-gray-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return null;
}