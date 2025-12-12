// src/components/CtaFooterSection.tsx
import React from 'react';

const CtaFooterSection: React.FC = () => {
  return (
    <footer className="bg-zinc-800 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Atas: CTA dan Formulir === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Kolom Kiri: CTA Teks */}
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Got a project? <br />
              Let's talk.
            </h2>
            <p className="text-gray-400 max-w-xs mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
            <a href="mailto:hi@carlos.com" className="text-yellow-500 flex items-center group font-medium text-lg">
              hi@carlos.com 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              Estimate your project? <br />
              Let me know here.
            </h3>
            
            <form className="space-y-6">
              {/* Input Nama */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">What's your name?</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none pb-2 text-white" 
                />
              </div>

              {/* Input Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your fancy email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none pb-2 text-white" 
                />
              </div>

              {/* Input Proyek dan Tombol Kirim */}
              <div className="pt-4 relative">
                <label htmlFor="project" className="block text-gray-300 mb-2">Tell me about your project</label>
                <input 
                  type="text" 
                  id="project" 
                  className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none pb-2 text-white pr-10" 
                />
                <button 
                  type="submit" 
                  className="absolute right-0 bottom-2 text-yellow-500 hover:translate-x-1 transition-transform"
                  aria-label="Send project details"
                >
                  →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- Bagian Penutup (Footer Bawah) --- */}
        <div className="flex flex-col items-center justify-center pt-10 border-t border-gray-700">
          
          {/* Logo/Inisial */}
          <div className="text-3xl font-bold text-yellow-500 mb-4">
            <span className="p-2 border-2 border-yellow-500 rounded-full inline-block">D</span>
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            Thanks for scrolling, that's all folks.
          </p>

          {/* Ikon Sosial Media */}
          <div className="flex space-x-4 text-white text-lg mt-2">
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

      </div>
    </footer>
  );
};

export default CtaFooterSection;