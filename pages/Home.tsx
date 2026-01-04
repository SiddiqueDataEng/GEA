
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Trophy, ChevronRight, ChevronLeft, Star, BookOpen, Heart, Activity, GraduationCap } from 'lucide-react';

/**
 * A helper component that wraps content and animates it when scrolled into view.
 */
const Reveal = ({ children, className = "", delay = 0, width = "w-full" }: { children: React.ReactNode, className?: string, delay?: number, width?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${width} ${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4">
    <div className={`${color} p-3 rounded-xl`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 font-medium">{label}</div>
    </div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#28a745] transition-all group h-full">
    <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28a745] transition-colors">
      <Icon className="w-8 h-8 text-[#003366] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-[#003366]">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1920",
      alt: "Students in classroom"
    },
    {
      image: "https://images.unsplash.com/photo-1523050335456-adabbf72c76d?auto=format&fit=crop&q=80&w=1920",
      alt: "School hallway and library"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920",
      alt: "Teacher with students"
    },
    {
      image: "https://images.unsplash.com/photo-1577891772427-68d5300f382a?auto=format&fit=crop&q=80&w=1920",
      alt: "School building exterior"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="space-y-0">
      {/* Hero Section with Carousel */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-transparent"></div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-[#28a745] transition-all hidden md:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-[#28a745] transition-all hidden md:block"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#28a745]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1.5 bg-[#28a745] text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
              Empowering the Next Generation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
              Shaping Bright Futures Through <span className="text-[#28a745]">Quality Education</span>
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed drop-shadow-sm">
              Global Educational Academy is committed to nurturing confident, knowledgeable, and responsible students in a safe and supportive learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="bg-white text-[#003366] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#28a745] hover:text-white transition-all flex items-center justify-center group shadow-xl">
                Apply for Admission
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003366] transition-all text-center backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0}>
            <StatCard icon={Users} label="Happy Students" value="1200+" color="bg-blue-600" />
          </Reveal>
          <Reveal delay={100}>
            <StatCard icon={GraduationCap} label="Certified Teachers" value="85+" color="bg-green-600" />
          </Reveal>
          <Reveal delay={200}>
            <StatCard icon={Star} label="Years of Excellence" value="25+" color="bg-yellow-500" />
          </Reveal>
          <Reveal delay={300}>
            <StatCard icon={Trophy} label="Award Winnings" value="150+" color="bg-purple-600" />
          </Reveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="relative" delay={200}>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#28a745]/20 rounded-full blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?auto=format&fit=crop&q=80&w=800"
                alt="Students Learning"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#28a745] p-3 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase">Registered & Recognized</p>
                    <p className="text-xs text-gray-500">Government Education Board</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="space-y-6" delay={400}>
              <h2 className="text-[#003366] text-sm font-bold uppercase tracking-widest flex items-center">
                <span className="w-10 h-0.5 bg-[#28a745] mr-3"></span> Welcome to GEA
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Building a Foundation for a Successful Future
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our inception, Global Educational Academy has been a beacon of knowledge in Rawalpindi. We don't just teach subjects; we inspire young minds to think critically, act ethically, and pursue excellence in everything they do.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Modern Science Labs",
                  "Dedicated Faculty",
                  "Safe & Secure Environment",
                  "Character Building"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#28a745]"></div>
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center text-[#003366] font-bold hover:text-[#28a745] transition-colors pt-4">
                Learn more about our mission <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <Reveal>
            <h2 className="text-[#28a745] font-bold uppercase tracking-widest text-sm mb-4">Why Global Academy?</h2>
            <h3 className="text-4xl font-bold text-[#003366]">What Sets Us Apart</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We provide a holistic learning experience that balances academic rigor with moral development and creative expression.</p>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Reveal delay={0} className="h-full">
            <Feature 
              icon={Users} 
              title="Qualified Teachers" 
              desc="Our educators are experienced, dedicated, and passionate about student success." 
            />
          </Reveal>
          <Reveal delay={150} className="h-full">
            <Feature 
              icon={ShieldCheck} 
              title="Safe Environment" 
              desc="We provide a secure and friendly campus where every student feels at home." 
            />
          </Reveal>
          <Reveal delay={300} className="h-full">
            <Feature 
              icon={Trophy} 
              title="Academic Excellence" 
              desc="Consistently high results in board examinations and academic competitions." 
            />
          </Reveal>
          <Reveal delay={450} className="h-full">
            <Feature 
              icon={Heart} 
              title="Moral Growth" 
              desc="We focus on building strong character, discipline, and ethical values." 
            />
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-[#003366] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28a745]/10 rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Child's Educational Journey?</h2>
                <p className="text-blue-100 text-lg mb-10">Admissions for the current academic session are now open. Visit us today or apply online to secure a bright future.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/admissions" className="bg-[#28a745] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/20">
                    Apply for Admission
                  </Link>
                  <Link to="/contact" className="bg-white text-[#003366] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
