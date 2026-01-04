
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, UserCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Academy</h1>
          <p className="text-xl text-blue-100">Excellence in Education since 1998.</p>
        </div>
      </section>

      {/* History & Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Our Background</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Global Educational Academy was founded with a clear objective: to provide high-quality education that is accessible and transformative. Over the decades, we have evolved from a small neighborhood school into one of Rawalpindi's most respected educational institutions.
                  </p>
                  <p>
                    Located in the heart of Lalkurti, we have served generations of families, maintaining a standard of excellence that combines traditional values with modern pedagogical techniques.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-[#28a745]">
                <div className="flex items-center mb-6">
                  <div className="bg-[#003366] p-3 rounded-xl mr-4">
                    <UserCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366]">Message from the Principal</h3>
                    <p className="text-[#28a745] font-semibold text-sm">Mrs. Zahida Ahmed</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "Education is not just the filling of a pail, but the lighting of a fire. At Global Educational Academy, we strive to ignite curiosity and foster a lifelong love for learning in every child. We are partners with parents in this sacred journey of development."
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://picsum.photos/seed/school-building/800/1000" 
                alt="Principal" 
                className="rounded-[3rem] shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#003366] transition-colors">
                <Eye className="w-8 h-8 text-[#003366] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading center of educational excellence that nurtures individuals to become socially responsible and globally competitive citizens.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28a745] transition-colors">
                <Target className="w-8 h-8 text-[#28a745] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a stimulating learning environment where students are challenged to reach their full potential through academic rigor, moral guidance, and holistic development.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Heart className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Discipline</li>
                <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Academic Excellence</li>
                <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Integrity & Character</li>
                <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#28a745] mr-3"></div> Lifelong Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
