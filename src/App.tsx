import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  Gem,
  Wind,
  Flower2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-rose rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">M</span>
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${scrolled ? 'text-brand-black' : 'text-brand-black md:text-brand-black'}`}>
            Melanin <span className="text-brand-rose">Beauty</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-rose transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/27672770792" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-rose transition-colors shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-10 flex flex-col gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-black"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/27672770792" 
              className="bg-brand-rose text-white py-4 rounded-xl text-center font-bold"
            >
              Book Service
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-nude/95 via-brand-nude/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-rose/10 text-brand-rose text-sm font-bold tracking-widest uppercase mb-6">
              Experience the Glow
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-black leading-tight mb-8">
              Luxury <br />
              <span className="italic text-brand-rose">Nails & Beauty</span> <br />
              Experience
            </h1>
            <p className="text-lg text-brand-black/70 mb-10 max-w-lg leading-relaxed">
              Indulge in a world of elegance. At Melanin Nail and Beauty Salon, we combine professional precision with a relaxing environment to bring out your inner confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/27672770792"
                className="inline-flex items-center justify-center gap-2 bg-brand-rose text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-rose/20 hover:bg-brand-black transition-colors"
                id="cta-book"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                View Services
              </motion.a>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-12 h-12 rounded-full border-4 border-brand-nude" 
                    alt="Customer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-brand-pink border-4 border-brand-nude flex items-center justify-center text-xs font-bold">
                  +2k
                </div>
              </div>
              <div>
                <p className="text-sm font-bold flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  5.0 Rating (240+ Reviews)
                </p>
                <p className="text-xs text-brand-black/50">Trusted by the community of Mangaung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 hidden lg:block"
      >
        <div className="glass p-6 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-rose rounded-lg">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="font-bold">Premium Care</span>
          </div>
          <p className="text-sm text-brand-black/60">Relaxing Wine Experience</p>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Acrylic Nails",
      description: "Durable and elegant acrylic enhancements tailored to your style.",
      icon: <Gem className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Gel Nails",
      description: "Long-lasting, shiny gel finishes for a natural look.",
      icon: <Sparkles className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pedicures",
      description: "Refreshing foot treatments that leave you walking on clouds.",
      icon: <Flower2 className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1522338140262-f46f5912018a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Manicures",
      description: "Professional hand care for smooth skin and perfect shapes.",
      icon: <CheckCircle2 className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Eyelashes",
      description: "Stunning lash extensions to enhance your natural beauty.",
      icon: <Star className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Relaxation Massage",
      description: "Luxury body massage to soothe your senses and melt stress away.",
      icon: <Wind className="text-brand-rose" size={32} />,
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Our Signature Services</h2>
          <div className="w-20 h-1 bg-brand-rose mx-auto mb-8"></div>
          <p className="text-brand-black/60 leading-relaxed">
            From classic manicures to indulgent massages, we offer a comprehensive range of beauty treatments designed to rejuvenate your spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-brand-black text-sm font-medium">Starting from R350</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-nude rounded-2xl group-hover:bg-brand-rose group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-brand-black/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 nude-gradient">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1610991148731-30716bc39013?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-80 object-cover rounded-3xl mt-8"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-black text-white p-10 rounded-3xl hidden md:block">
              <h4 className="text-4xl font-serif mb-2">5+</h4>
              <p className="text-sm opacity-60">Years of Luxury<br />Excellence</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Professional Care & <br /><span className="text-brand-rose underline decoration-brand-pink underline-offset-8 italic">Relaxation Experience</span></h2>
            <p className="text-lg text-brand-black/70 mb-8 leading-relaxed">
              Melanin Nail and Beauty Salon is more than just a beauty destination; it's a sanctuary for self-care in the heart of Rocklands. Our staff is trained to provide not just a service, but a gentle, premium experience.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                { title: "Personalized Attention", desc: "Every client is unique. We tailor our treatments to your preferences." },
                { title: "Luxury Environment", desc: "Sip on complimentary wine while we pamper you." },
                { title: "Premium Products", desc: "We use only high-end, cruelty-free beauty brands." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-rose flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">{item.title}</h5>
                    <p className="text-sm text-brand-black/50">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/27672770792" className="inline-flex items-center gap-2 text-brand-rose font-bold group">
              Learn More About Our Story
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Lerato M.",
      text: "Thank you Palesa for the beautiful nails and relaxing massage. The environment is so peaceful!",
      rating: 5
    },
    {
      name: "Tshepo S.",
      text: "Professional and gentle service with a luxury experience. Best salon in Bloemfontein hands down.",
      rating: 5
    },
    {
      name: "Sarah V.",
      text: "My go-to place for nails and lashes. The attention to detail is unmatched here.",
      rating: 5
    },
    {
      name: "Bontle K.",
      text: "Top class service and friendly staff. Love the wine experience while getting my mani-pedi!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-black text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="text-brand-rose text-sm font-bold uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-sm flex-1 min-w-[300px]"
            >
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg mb-8 italic opacity-80 leading-relaxed font-serif">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center font-bold text-brand-rose">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs opacity-40 italic">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-10">Visit Our Sanctuary</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-nude rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-rose" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Location</h4>
                  <p className="text-brand-black/60">Rocklands, Mangaung<br />South Africa</p>
                  <a href="#" className="text-brand-rose text-sm font-bold mt-2 inline-block">Get Directions</a>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-nude rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-rose" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call or WhatsApp</h4>
                  <p className="text-brand-black/60">067 277 0792</p>
                  <p className="text-sm opacity-40 italic mt-1 font-sans">Available 24/7 for bookings</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-nude rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-brand-rose" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 text-brand-black/60 text-sm">
                    <p>Mon - Fri</p> <p className="font-bold">08:00 - 18:00</p>
                    <p>Saturday</p> <p className="font-bold">08:00 - 16:00</p>
                    <p>Sunday</p> <p className="font-bold">By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-lg mb-4">Follow Our Work</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-brand-nude rounded-full flex items-center justify-center hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-brand-nude rounded-full flex items-center justify-center hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-full bg-brand-nude rounded-3xl overflow-hidden min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114639.6993132711!2d26.1593361!3d-29.11893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc06a1215bb7d%3A0x6b297920abfb1354!2sBloemfontein%2C%20South%20Africa!5e0!3m2!1sen!2szaf!4v1715180000000!5m2!1sen!2szaf" 
                className="w-full h-full border-0 grayscale opacity-80"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-6 left-6 right-6 bottom-6 border border-brand-rose/20 rounded-2xl pointer-events-none"></div>
            </div>
            
            <div className="absolute bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <h5 className="font-bold mb-2">Book Today</h5>
              <p className="text-sm opacity-60 mb-4">Same-day appointments often available.</p>
              <a href="https://wa.me/27672770792" className="bg-brand-rose text-white px-6 py-2 rounded-xl text-sm font-bold block text-center">Open WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Work</h2>
          <p className="text-brand-black/50">Follow our artistic journey in beauty</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-rose/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl text-white font-serif mb-8 max-w-4xl mx-auto leading-tight">Ready To Feel <span className="italic text-brand-rose">Beautiful?</span></h2>
        <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          Book your appointment today and experience the luxury treatment you deserve. Professionals at your service.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/27672770792"
          className="bg-brand-rose text-white px-12 py-5 rounded-full text-xl font-bold inline-flex items-center gap-3 shadow-2xl shadow-brand-rose/40"
        >
          Book Your Appointment
          <ChevronRight size={24} />
        </motion.a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-nude py-20 border-t border-brand-rose/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-rose rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-serif font-bold tracking-tight">Melanin <span className="text-brand-rose">Beauty</span></span>
            </div>
            <p className="text-sm text-brand-black/50 leading-relaxed mb-6">
              A professional sanctuary in Rocklands, Mangaung providing high-end beauty treatments and a luxury customer experience.
            </p>
            <div className="flex gap-4">
              <Instagram size={18} className="text-brand-black/40 hover:text-brand-rose transition-colors cursor-pointer" />
              <Facebook size={18} className="text-brand-black/40 hover:text-brand-rose transition-colors cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li><a href="#home" className="hover:text-brand-rose transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-rose transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-rose transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Services</h5>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Nail Art</a></li>
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Massages</a></li>
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Eyelashes</a></li>
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Pedicures</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li className="flex gap-2"><MapPin size={16} /> Rocklands, Mangaung</li>
              <li className="flex gap-2"><Phone size={16} /> 067 277 0792</li>
              <li className="flex gap-2"><Clock size={16} /> 08:00 - 18:00 (Mon-Fri)</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-rose/10 flex flex-col md:row justify-between items-center gap-4 text-xs text-brand-black/40">
          <p>© 2026 Melanin Nail and Beauty Salon. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-rose">Privacy Policy</a>
            <a href="#" className="hover:text-brand-rose">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-brand-rose selection:text-white">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-nude flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-brand-rose rounded-full mb-6 mx-auto flex items-center justify-center shadow-2xl shadow-brand-rose/30"
              >
                <span className="text-white font-serif font-bold text-4xl italic">M</span>
              </motion.div>
              <h2 className="text-xl font-serif tracking-[0.2em] font-medium uppercase text-brand-rose">Melanin Beauty</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        {/* Why Choose Us Section Inline */}
        <section className="py-24 bg-brand-nude/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Professional Staff", icon: <CheckCircle2 /> },
                { title: "Luxury Experience", icon: <Gem /> },
                { title: "Relaxing Environment", icon: <Wind /> },
                { title: "Premium Products", icon: <Sparkles /> },
                { title: "Affordable Beauty", icon: <Sparkles /> },
                { title: "Friendly Service", icon: <MessageCircle /> }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-brand-nude rounded-2xl flex items-center justify-center text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/27672770792"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
