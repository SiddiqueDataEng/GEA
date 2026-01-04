
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Clock, ChevronRight, GraduationCap, Users, ShieldCheck, Trophy, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import AIChat from './components/AIChat';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[#003366] p-2 rounded-lg">
                < GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#003366] block leading-tight">GLOBAL</span>
                <span className="text-xs font-semibold text-[#28a745] block -mt-1 uppercase tracking-wider">Educational Academy</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-[#28a745] ${
                  location.pathname === link.path ? 'text-[#28a745] border-b-2 border-[#28a745]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-[#003366] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#004080] transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#003366] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'bg-blue-50 text-[#003366]' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-[#003366] text-white px-4 py-3 rounded-md font-bold"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#003366] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="w-10 h-10 text-white" />
            <div>
              <span className="text-xl font-bold block leading-tight">GLOBAL</span>
              <span className="text-xs font-semibold text-[#28a745] block -mt-1 uppercase tracking-wider">Educational Academy</span>
            </div>
          </Link>
          <p className="text-blue-100 leading-relaxed italic">
            "Shaping Bright Futures Through Quality Education. Committed to nurturing confident, knowledgeable, and responsible students."
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#28a745] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#28a745] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#28a745] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b-2 border-[#28a745] pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-blue-100">
            <li><Link to="/about" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> About Us</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> School Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b-2 border-[#28a745] pb-2 inline-block">Contact Info</h3>
          <ul className="space-y-4 text-blue-100">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-[#28a745] shrink-0" />
              <span>245 Tufail Rd, Lalkurti,<br />Rawalpindi, 46000</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-[#28a745] shrink-0" />
              <span>(051) 5795201</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-[#28a745] shrink-0" />
              <span>info@globalacademy.pk</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-3 text-[#28a745] shrink-0" />
              <span>Mon - Sat: 8:00 AM - 2:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b-2 border-[#28a745] pb-2 inline-block">Newsletter</h3>
          <p className="text-blue-100 mb-4 text-sm">Get the latest updates on events and admissions.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-[#28a745] text-white"
            />
            <button className="bg-[#28a745] px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-200">
        <p>&copy; {new Date().getFullYear()} Global Educational Academy. All rights reserved. Designed for Excellence.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        {/* pt-20 added to account for fixed header height */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}
