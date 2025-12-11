// src/components/Hero.tsx
import React from 'react';

// Anda mungkin perlu antarmuka untuk properti jika komponen ini menerima data
// interface HeroProps {}

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Kolom Kiri: Nama dan Gambar */}
      <div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-4">
          Carlos
          <br />
          Mendoza.
        </h1>
        <hr className="w-16 border-t-4 border-yellow-500 mb-8" />
        
        {/* Ikon Sosial Media (Placeholder) */}
        <div className="flex space-x-4 text-white text-lg mt-8">
          <a href="#" className="opacity-70 hover:opacity-100 transition duration-300">
            <i className="fab fa-twitter"></i> {/* Ganti dengan ikon yang sesuai */}
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      
      {/* Kolom Kanan: Deskripsi dan Foto */}
      <div className="relative">
        {/* Konten Teks di Atas Foto */}
        <div className="mb-12">
          <p className="text-sm text-yellow-500 mb-2">— Introduction</p>
          <h2 className="text-3xl font-semibold mb-4">
            Product Designer and <br />
            Developer, based in <br />
            California.
          </h2>
          <p className="text-gray-400 max-w-sm mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <a href="#" className="text-yellow-500 flex items-center group">
            My story 
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        
        {/* Placeholder untuk Gambar */}
        {/* Gambar harus diletakkan di dalam folder 'public' atau diimpor */}
        <div className="absolute top-0 right-0 w-full h-full md:relative md:w-auto md:h-auto">
             <img 
                src="path/to/carlos-mendoza.png" // Ganti dengan path gambar yang benar
                alt="Carlos Mendoza" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }} // Efek potong miring opsional
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;