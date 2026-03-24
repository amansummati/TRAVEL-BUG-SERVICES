import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Calendar, Star, CheckCircle, ArrowRight, Shield, Globe, Compass, MessageCircle, Phone, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-pure/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg">
              <img 
                src="https://storage.googleapis.com/static-content-dev-tifv2zunyxyutjfahmxdae/input_file_0.png" 
                alt="Travel Bug Services Logo" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-gold">TRAVEL BUG SERVICES</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-300 hover:text-gold'}`}>Home</button>
            <a href="#destinations" className="text-sm font-medium text-slate-300 hover:text-gold transition-colors">Destinations</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-gold transition-colors">Services</a>
            <button onClick={() => onNavigate('contact')} className={`text-sm font-medium transition-colors ${currentPage === 'contact' ? 'text-gold' : 'text-slate-300 hover:text-gold'}`}>Contact Us</button>
            <button className="bg-gold text-black-pure px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold-light transition-all shadow-lg shadow-gold/20">
              Plan My Trip
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gold">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-soft border-b border-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="block w-full text-left text-base font-medium text-slate-300">Home</button>
              <a href="#destinations" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-300">Destinations</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-300">Services</a>
              <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="block w-full text-left text-base font-medium text-slate-300">Contact Us</button>
              <button className="w-full bg-gold text-black-pure px-6 py-3 rounded-full text-base font-bold">
                Plan My Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black-pure">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
          alt="Tropical beach" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/80 via-black-pure/40 to-black-pure"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-gold uppercase bg-gold/10 rounded-full border border-gold/20"
          >
            Your Journey Starts Here
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Stop Browsing, <br />
            <span className="text-gold-gradient">Start Packing.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 serif-text italic"
          >
            Bespoke itinerary planning for the modern explorer. We handle the logistics, you handle the memories.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-gold text-black-pure px-10 py-4 rounded-full text-lg font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-2">
              Plan My Trip <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-transparent text-gold border-2 border-gold/50 px-10 py-4 rounded-full text-lg font-bold hover:bg-gold/10 transition-all">
              View Group Tours
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <div className="bg-black-soft py-10 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale invert text-white">
        <span className="text-xl font-bold">TRAVELER</span>
        <span className="text-xl font-bold">VOGUE</span>
        <span className="text-xl font-bold">FORBES</span>
        <span className="text-xl font-bold">NAT GEO</span>
        <span className="text-xl font-bold">LONELY PLANET</span>
      </div>
      <div className="mt-8 flex justify-center items-center gap-2 text-gold">
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
        </div>
        <span className="font-bold text-white">Over 5,000 Happy Travelers</span>
      </div>
    </div>
  );
};

const PainPoint = () => {
  return (
    <section className="py-24 bg-black-pure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Why DIY Booking is a <span className="text-gold">Nightmare</span></h2>
            <p className="text-lg text-slate-300 mb-8 serif-text">
              Hidden fees, unreliable reviews, and hours wasted scrolling through endless tabs. Planning a trip shouldn't feel like a second job.
            </p>
            <ul className="space-y-4">
              {[
                "Hours of research wasted on generic blogs",
                "Hidden costs that blow your budget",
                "Logistical nightmares and missed connections",
                "Generic experiences that lack soul"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black-soft border border-gold/20 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-gold">The Travel Bug Solution</h3>
              <p className="text-slate-300 mb-8">We turn the chaos into a curated masterpiece. Our experts handle every detail so you can just show up and explore.</p>
              <ul className="space-y-4">
                {[
                  "Expertly vetted local partners",
                  "Transparent pricing with no surprises",
                  "24/7 on-trip support",
                  "Unique, off-the-beaten-path experiences"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Custom Itineraries",
      desc: "Tailor-made journeys designed around your specific interests, pace, and budget.",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-gold/10 text-gold"
    },
    {
      title: "Group Tours",
      desc: "Join a community of like-minded explorers on curated adventures around the globe.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-gold/10 text-gold"
    },
    {
      title: "Luxury Concierge",
      desc: "Exclusive access to the world's finest hotels, private jets, and VIP experiences.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-gold/10 text-gold"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gold">Our Service Pillars</h2>
          <p className="text-slate-300 max-w-2xl mx-auto serif-text italic">Everything you need for the perfect escape, handled by experts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-black-pure p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gold/10 group">
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{s.desc}</p>
              <a href="#" className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Consult", desc: "Tell us your dreams, budget, and travel style in a quick discovery call." },
    { num: "02", title: "We Plan", desc: "Our experts craft a detailed, day-by-day itinerary tailored just for you." },
    { num: "03", title: "You Explore", desc: "Pack your bags and go. We're with you every step of the way." }
  ];

  return (
    <section className="py-24 bg-black-pure text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gold">How It Works</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Three simple steps to your most memorable vacation yet.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gold/20 z-0"></div>
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gold text-black-pure rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl shadow-gold/20">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">{s.title}</h3>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationHub = () => {
  const destinations = [
    { name: "Amalfi Coast", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", tag: "Luxury" },
    { name: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", tag: "Culture" },
    { name: "Patagonia", img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=800", tag: "Adventure" }
  ];

  return (
    <section id="destinations" className="py-24 bg-black-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gold">Experience Hubs</h2>
            <p className="text-slate-300 serif-text italic">Curated guides and itineraries for the world's most iconic spots.</p>
          </div>
          <button className="text-gold font-bold flex items-center gap-2 hover:underline">
            View All Destinations <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer border border-gold/10">
              <img 
                src={d.img} 
                alt={d.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-block px-3 py-1 bg-gold/20 backdrop-blur-md text-gold text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-gold/30">
                  {d.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{d.name}</h3>
                <p className="text-gold/70 text-sm flex items-center gap-2 group-hover:text-gold transition-colors">
                  View Itinerary <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-black-soft py-4 px-4 border-t border-gold/20"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="hidden md:block">
              <p className="text-white font-bold text-lg">Ready to start packing?</p>
              <p className="text-gold text-sm">Book your free consultation today.</p>
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none bg-gold text-black-pure px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all shadow-lg shadow-gold/20">
                Plan My Trip
              </button>
              <button className="flex-1 sm:flex-none bg-white/5 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all border border-white/10">
                View Deals
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('newsletter_seen');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem('newsletter_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black-soft rounded-[2rem] overflow-hidden max-w-2xl w-full relative shadow-2xl border border-gold/20"
          >
            <button onClick={close} className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" 
                  alt="Travel inspiration" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-gold">Not ready to book?</h3>
                <p className="text-slate-300 mb-8 serif-text">Download our <span className="font-bold text-gold">"Ultimate Packing List for Europe"</span> guide and get secret deals weekly.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 rounded-full bg-black-pure border border-gold/20 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <button className="w-full bg-gold text-black-pure py-4 rounded-full font-bold hover:bg-gold-light transition-all">
                    Send Me The Guide
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black-pure text-white py-20 pb-32 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="https://storage.googleapis.com/static-content-dev-tifv2zunyxyutjfahmxdae/input_file_0.png" 
                  alt="Travel Bug Services Logo" 
                  className="w-12 h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-gold">TRAVEL BUG SERVICES</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 serif-text italic">
              We believe travel should be transformative, not stressful. Our mission is to connect modern explorers with authentic experiences that last a lifetime.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold cursor-pointer transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold cursor-pointer transition-colors">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-gold transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Group Trips</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Trust & Safety</h4>
            <div className="flex flex-wrap gap-4 opacity-70">
              <span className="text-xs font-bold border border-gold/30 text-gold px-2 py-1">IATA</span>
              <span className="text-xs font-bold border border-gold/30 text-gold px-2 py-1">ASTA</span>
              <span className="text-xs font-bold border border-gold/30 text-gold px-2 py-1">CLIA</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Travel Bug Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const InteractiveQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    { q: "What's your ideal climate?", options: ["Tropical Heat", "Crisp Alpine Air", "Mild Mediterranean", "City Lights"] },
    { q: "What's your travel style?", options: ["Luxury & Spas", "Backpacking & Adventure", "Food & Culture", "Family Fun"] },
    { q: "How long is your escape?", options: ["Weekend Getaway", "1-2 Weeks", "A Month+", "Digital Nomad Life"] }
  ];

  const handleAnswer = (ans: string) => {
    setAnswers([...answers, ans]);
    setStep(step + 1);
  };

  return (
    <section className="py-24 bg-black-pure">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-black-soft rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gold/20 text-center">
          <AnimatePresence mode="wait">
            {step < questions.length ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <span className="text-gold font-bold text-sm uppercase tracking-widest mb-4 block">Question {step + 1} of {questions.length}</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">{questions[step].q}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[step].options.map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className="p-6 rounded-2xl border-2 border-gold/10 hover:border-gold hover:bg-gold/5 transition-all text-lg font-medium text-slate-300"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">We've Found Your Match!</h2>
                <p className="text-slate-400 mb-10 serif-text italic text-lg">Based on your style, we've curated a custom itinerary for you.</p>
                <div className="bg-black-pure p-8 rounded-3xl mb-10 text-left border border-gold/10">
                  <p className="font-bold text-gold mb-2 uppercase tracking-wider text-xs">Your Recommendation</p>
                  <p className="text-2xl font-bold text-white">The Ultimate {answers[0]} {answers[1]} Experience</p>
                </div>
                <button className="w-full bg-gold text-black-pure py-5 rounded-full text-xl font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/20">
                  Get My Custom Quote
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <section className="pt-32 pb-24 bg-black-pure min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-gold uppercase bg-gold/10 rounded-full border border-gold/20"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <p className="text-xl text-slate-400 serif-text italic max-w-2xl mx-auto">
            Have questions about your next adventure? Our team is here to help you plan the perfect escape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black-soft p-8 md:p-12 rounded-[3rem] border border-gold/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Our Leadership</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-black-pure rounded-2xl shadow-sm border border-gold/10">
                <div className="w-16 h-16 bg-gold text-black-pure rounded-full flex items-center justify-center shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gold uppercase tracking-wider">Managing Director</p>
                  <h3 className="text-xl font-bold text-white">AMANPREET SINGH</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-black-pure rounded-2xl shadow-sm border border-gold/10">
                <div className="w-16 h-16 bg-gold text-black-pure rounded-full flex items-center justify-center shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gold uppercase tracking-wider">Co-Founder</p>
                  <h3 className="text-xl font-bold text-white">Ginny Singh</h3>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gold/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Details</h2>
              <div className="space-y-4">
                <a href="tel:+919728130749" className="flex items-center gap-4 text-lg font-medium text-slate-300 hover:text-gold transition-colors">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91-9728130749
                </a>
                <div className="flex items-center gap-4 text-lg font-medium text-slate-300">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  travelbugservice@gmail.com
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black-soft p-8 md:p-12 rounded-[3rem] border border-gold/10 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-black-pure border border-gold/10 text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-black-pure border border-gold/10 text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-black-pure border border-gold/10 text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Trip Planning" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-black-pure border border-gold/10 text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Tell us about your dream trip..."></textarea>
              </div>
              <button className="w-full bg-gold text-black-pure py-5 rounded-full text-xl font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/919728130749"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
        Online
      </span>
    </motion.a>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <PainPoint />
            <Services />
            <HowItWorks />
            <InteractiveQuiz />
            <DestinationHub />
          </>
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer />
      <StickyBookingBar />
      <NewsletterPopup />
      <WhatsAppButton />
    </div>
  );
}
