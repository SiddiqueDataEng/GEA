
import React from 'react';

// Added key to props type to satisfy TypeScript when used in a list/map
const TeacherCard = ({ name, role, qualification, image }: { name: string, role: string, qualification: string, image: string, key?: React.Key }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-[#003366] mb-1">{name}</h3>
      <p className="text-[#28a745] font-semibold text-sm mb-4">{role}</p>
      <div className="text-xs text-gray-500 bg-gray-50 py-2 px-4 rounded-full inline-block">
        {qualification}
      </div>
    </div>
  </div>
);

const Faculty = () => {
  const teachers = [
    { name: "Mrs. Zahida Ahmed", role: "Principal", qualification: "M.Phil Education", image: "https://picsum.photos/seed/t1/400/400" },
    { name: "Mr. Imran Khan", role: "Senior Coordinator", qualification: "M.Sc Mathematics", image: "https://picsum.photos/seed/t2/400/400" },
    { name: "Ms. Sarah Javed", role: "English Head", qualification: "MA English Literature", image: "https://picsum.photos/seed/t3/400/400" },
    { name: "Mr. Bilal Afzal", role: "Science Instructor", qualification: "M.Sc Physics", image: "https://picsum.photos/seed/t4/400/400" },
    { name: "Ms. Nadia Malik", role: "Primary Head", qualification: "B.Ed (Hons)", image: "https://picsum.photos/seed/t5/400/400" },
    { name: "Mr. Usman Sheikh", role: "Computer Specialist", qualification: "MCS", image: "https://picsum.photos/seed/t6/400/400" },
    { name: "Ms. Maria Aziz", role: "Urdu Language Specialist", qualification: "MA Urdu", image: "https://picsum.photos/seed/t7/400/400" },
    { name: "Mr. Ahmed Ali", role: "Sports Coordinator", qualification: "B.PEd", image: "https://picsum.photos/seed/t8/400/400" },
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl text-blue-100">Meeting the mentors behind our student's success.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-[#28a745] font-bold uppercase tracking-widest text-sm mb-4">Dedicated Professionals</h2>
            <h3 className="text-4xl font-bold text-[#003366] mb-6">Expert Educators</h3>
            <p className="text-gray-600">Our staff is comprised of passionate educators who are committed to creating an environment of curiosity and respect.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, i) => (
              <TeacherCard 
                key={i} 
                name={teacher.name} 
                role={teacher.role} 
                qualification={teacher.qualification} 
                image={teacher.image} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
