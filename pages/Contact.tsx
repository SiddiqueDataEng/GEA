
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any, title: string, content: string | React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[#28a745]/10 p-3 rounded-xl mt-1">
      <Icon className="w-6 h-6 text-[#28a745]" />
    </div>
    <div>
      <h4 className="font-bold text-[#003366] text-lg">{title}</h4>
      <div className="text-gray-600 leading-relaxed">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">We're here to help and answer any questions you may have.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Have questions about admissions, academics, or our campus? Reach out to us via any of the channels below.
                </p>
                <div className="space-y-8">
                  <ContactInfo 
                    icon={MapPin} 
                    title="Campus Address" 
                    content="245 Tufail Rd, Lalkurti, Rawalpindi, 46000" 
                  />
                  <ContactInfo 
                    icon={Phone} 
                    title="Phone Number" 
                    content={<><a href="tel:0515795201" className="hover:text-[#28a745]">(051) 5795201</a><br /><a href="tel:+923001234567" className="hover:text-[#28a745]">+92 300 1234567</a></>} 
                  />
                  <ContactInfo 
                    icon={Mail} 
                    title="Email Address" 
                    content="info@globalacademy.pk" 
                  />
                  <ContactInfo 
                    icon={Clock} 
                    title="Office Hours" 
                    content="Monday - Saturday: 8:00 AM - 2:00 PM" 
                  />
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-3xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#003366] text-lg mb-2">WhatsApp Us</h4>
                  <p className="text-gray-600 text-sm">Instant support for your queries.</p>
                </div>
                <a href="https://wa.me/92515795201" className="bg-[#28a745] text-white p-4 rounded-full hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#003366] mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Admissions Question</option>
                    <option>Fee Structure</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl flex items-center justify-center hover:bg-[#004080] transition-all">
                  <Send className="mr-2 w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.770932822472!2d73.0560824!3d33.5852266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93756857d42b%3A0xb353597816174a74!2sGlobal%20Educational%20Academy!5e0!3m2!1sen!2s!4v1716301234567!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
          <h4 className="font-bold text-[#003366] mb-1">Global Educational Academy</h4>
          <p className="text-gray-600 text-sm">245 Tufail Rd, Lalkurti, Rawalpindi</p>
          <a href="https://maps.app.goo.gl/qXyY" target="_blank" className="text-[#28a745] font-bold text-xs mt-2 block hover:underline">Get Directions</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
