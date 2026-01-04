
import React from 'react';
// Fix: Removed 'Basketball' which was causing a module error, and other unused icons
import { Microscope, Monitor, Book } from 'lucide-react';

const FacilityItem = ({ icon: Icon, title, desc, image }: { icon: any, title: string, desc: string, image: string }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="order-2 lg:order-none group overflow-hidden rounded-[2.5rem] shadow-xl">
      <img src={image} alt={title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="space-y-6">
      <div className="bg-[#28a745]/10 w-16 h-16 rounded-2xl flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#28a745]" />
      </div>
      <h3 className="text-3xl font-bold text-[#003366]">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
      <ul className="grid grid-cols-2 gap-4">
        <li className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Modern Equipment</li>
        <li className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Supervised Usage</li>
        <li className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Clean & Organized</li>
        <li className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Safe Access</li>
      </ul>
    </div>
  </div>
);

const Facilities = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Campus Facilities</h1>
          <p className="text-xl text-blue-100">Providing the tools for exploration and discovery.</p>
        </div>
      </section>

      <section className="py-24 space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FacilityItem 
            icon={Monitor} 
            title="Computer Labs" 
            desc="State-of-the-art computer laboratories equipped with high-speed internet and the latest software to ensure our students are well-versed in digital literacy." 
            image="https://picsum.photos/seed/comp/800/600"
          />
        </div>

        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-none">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-[#28a745]" />
                </div>
                <h3 className="text-3xl font-bold text-[#003366]">Science Labs</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Fully equipped physics, chemistry, and biology labs allow students to transition from theoretical concepts to practical experiments.</p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-gray-500 italic">"Hands-on learning is at the heart of our science department."</p>
                </div>
              </div>
              <div className="order-1 lg:order-none group overflow-hidden rounded-[2.5rem] shadow-xl">
                <img src="https://picsum.photos/seed/lab/800/600" alt="Lab" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <FacilityItem 
            icon={Book} 
            title="Resource Library" 
            desc="A quiet haven for readers with thousands of titles spanning fiction, reference books, academic journals, and children's literature." 
            image="https://picsum.photos/seed/lib/800/600"
          />
        </div>
      </section>
    </div>
  );
};

export default Facilities;