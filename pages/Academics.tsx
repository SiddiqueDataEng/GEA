
import React from 'react';
import { BookOpen, Laptop, Microscope, Brain, FileText, CheckCircle } from 'lucide-react';

const LevelCard = ({ title, levels, icon: Icon, color }: { title: string, levels: string, icon: any, color: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
    <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-[#003366] mb-2">{title}</h3>
    <p className="text-gray-500 font-medium mb-4">{levels}</p>
    <div className="space-y-3">
      <div className="flex items-center text-gray-600 text-sm">
        <CheckCircle className="w-4 h-4 text-[#28a745] mr-2" />
        Focus on core fundamentals
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <CheckCircle className="w-4 h-4 text-[#28a745] mr-2" />
        Interactive learning sessions
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <CheckCircle className="w-4 h-4 text-[#28a745] mr-2" />
        Regular assessment reports
      </div>
    </div>
  </div>
);

const Academics = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Curriculum</h1>
          <p className="text-xl text-blue-100">Broadening horizons through holistic education.</p>
        </div>
      </section>

      {/* Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#28a745] font-bold uppercase tracking-widest text-sm mb-4">Academic Structure</h2>
            <h3 className="text-4xl font-bold text-[#003366]">Class Levels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LevelCard 
              title="Playgroup" 
              levels="Ages 3 - 4" 
              icon={Brain} 
              color="bg-pink-500" 
            />
            <LevelCard 
              title="Primary" 
              levels="Grade 1 - 5" 
              icon={BookOpen} 
              color="bg-blue-500" 
            />
            <LevelCard 
              title="Middle" 
              levels="Grade 6 - 8" 
              icon={Microscope} 
              color="bg-green-500" 
            />
            <LevelCard 
              title="Secondary" 
              levels="Grade 9 - 10 (Matric)" 
              icon={Laptop} 
              color="bg-purple-500" 
            />
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#003366]">Teaching Methodology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach is student-centric, combining traditional instruction with modern interactive tools. We emphasize understanding concepts rather than rote learning.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm mt-1">
                    <Brain className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003366] text-lg">Inquiry-Based Learning</h4>
                    <p className="text-gray-600">Encouraging students to ask questions and explore solutions independently.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm mt-1">
                    <Laptop className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003366] text-lg">Digital Integration</h4>
                    <p className="text-gray-600">Smart classrooms and computer labs to prepare students for the tech-driven world.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm mt-1">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003366] text-lg">Holistic Assessment</h4>
                    <p className="text-gray-600">Regular quizzes, monthly tests, and mid-term/final exams coupled with behavioral evaluation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/class1/400/500" className="rounded-2xl shadow-lg mt-8" alt="Classroom" />
              <img src="https://picsum.photos/seed/class2/400/500" className="rounded-2xl shadow-lg" alt="Classroom" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
