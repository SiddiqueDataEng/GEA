
import React from 'react';
import { FileText, ClipboardList, CheckCircle2, Download, HelpCircle } from 'lucide-react';

const Step = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex items-start space-x-6">
    <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mt-1">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#003366] mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Admissions = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-blue-100">Join the GEA Family Today.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-12 flex items-center">
                <ClipboardList className="mr-3 text-[#28a745]" /> Admission Process
              </h2>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100 -z-10"></div>
                <Step 
                  number="1" 
                  title="Inquiry & Visit" 
                  desc="Visit our campus for a personal tour and collect the admission information packet from the front office." 
                />
                <Step 
                  number="2" 
                  title="Form Submission" 
                  desc="Fill out the admission form and submit it along with the required documents and processing fee." 
                />
                <Step 
                  number="3" 
                  title="Entrance Assessment" 
                  desc="Students (Grade 1 and above) will undergo a basic proficiency test in English, Math, and Urdu." 
                />
                <Step 
                  number="4" 
                  title="Interview" 
                  desc="A brief meeting with the student and parents to understand educational goals and school expectations." 
                />
                <Step 
                  number="5" 
                  title="Admission Confirmation" 
                  desc="Successful candidates will be notified, and admission is secured after payment of dues." 
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
                <h3 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                  <FileText className="mr-3 text-[#28a745]" /> Required Documents
                </h3>
                <ul className="space-y-4">
                  {[
                    "Copy of Student's Birth Certificate / B-Form",
                    "4 Recent Passport-sized Photographs",
                    "Copy of Father's/Guardian's CNIC",
                    "Previous School Leaving Certificate (SLC)",
                    "Academic Progress Reports from last school",
                    "Vaccination / Medical Records (for Playgroup)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#28a745] mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#28a745] p-10 rounded-[2.5rem] text-white">
                <h3 className="text-2xl font-bold mb-4">Admissions Calendar</h3>
                <p className="mb-6 text-green-50">Session 2024-2025 is currently enrolling for all levels from Playgroup to Secondary.</p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Registration Opens:</span>
                    <span className="font-bold">January 1st</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Assessment Tests:</span>
                    <span className="font-bold">Every Saturday</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Starts:</span>
                    <span className="font-bold">April 1st</span>
                  </div>
                </div>
                <button className="w-full mt-8 bg-white text-[#28a745] font-bold py-4 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Download className="mr-2" /> Download Admission Form (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
