
import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { src: "https://picsum.photos/seed/gal1/800/600", title: "Morning Assembly", category: "Campus Life" },
    { src: "https://picsum.photos/seed/gal2/800/600", title: "Annual Sports Day", category: "Events" },
    { src: "https://picsum.photos/seed/gal3/800/600", title: "Science Exhibition", category: "Academic" },
    { src: "https://picsum.photos/seed/gal4/800/600", title: "Art & Craft Class", category: "Activity" },
    { src: "https://picsum.photos/seed/gal5/800/600", title: "Independence Day Celebration", category: "Events" },
    { src: "https://picsum.photos/seed/gal6/800/600", title: "Smart Classroom Session", category: "Academic" },
    { src: "https://picsum.photos/seed/gal7/800/600", title: "School Building", category: "Campus" },
    { src: "https://picsum.photos/seed/gal8/800/600", title: "Computer Lab Practice", category: "Academic" },
    { src: "https://picsum.photos/seed/gal9/800/600", title: "Prize Distribution", category: "Events" },
  ];

  const categories = ["All", "Campus Life", "Events", "Academic", "Activity"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = activeTab === "All" ? images : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100">Capturing moments of growth, joy, and learning.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                  activeTab === cat 
                  ? "bg-[#28a745] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition-all aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImg(img.src)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-[#28a745] font-bold text-xs uppercase tracking-widest mb-1">{img.category}</p>
                  <h4 className="text-white font-bold text-xl">{img.title}</h4>
                  <Maximize2 className="absolute top-6 right-6 text-white w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-[#28a745] transition-colors">
            <X className="w-10 h-10" />
          </button>
          <img src={selectedImg} className="max-w-full max-h-full rounded-xl" alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
