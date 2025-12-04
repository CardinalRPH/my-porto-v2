import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// --- Impor React Icons ---
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// -------------------------

const HeroBanner: React.FC = () => {
  const textRef = useRef([]);
  const imageRef = useRef(null);
  const socialRef = useRef(null); 

  const addToRefs = (el: never) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
    // Animasi
    tl.fromTo(imageRef.current, { x: 100, opacity: 0, scale: 0.8 }, { x: 0, opacity: 1, scale: 1, duration: 1.2 });
    textRef.current.forEach((el, _index) => {
      tl.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, `<-0.4`);
    });
    tl.fromTo(socialRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '<0.3');
  }, []);

  return (
    <section id="hero" className="bg-gray-900 min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Teks Deskripsi */}
        <div className="md:w-1/2 text-white mb-10 md:mb-0">
          <p ref={addToRefs} className="text-xl text-teal-400 mb-2 font-mono">
            Halo, saya adalah
          </p>
          <h1 ref={addToRefs} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            [Nama Anda]
          </h1>
          <h2 ref={addToRefs} className="text-3xl md:text-4xl text-gray-300 font-light mb-6">
            Full-Stack Developer & Tech Enthusiast
          </h2>
          <p ref={addToRefs} className="text-lg text-gray-400 max-w-lg mb-8">
            Deskripsi singkat: **Saya adalah seorang programmer dengan passion dalam membangun aplikasi web yang skalabel dan efisien.** Berpengalaman dengan ekosistem modern **JavaScript/TypeScript** dan fokus pada solusi performa tinggi.
          </p>
          
          <div ref={socialRef} className="flex space-x-4 items-center">
             <a
                href="#projects"
                className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition duration-300 transform hover:scale-105 shadow-xl"
            >
                Lihat Proyek Saya
            </a>
            {/* Tombol Sosial LinkedIn */}
            <a
              href="[Link LinkedIn Anda]"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-3xl text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            {/* Tombol Sosial GitHub */}
            <a
              href="[Link GitHub Anda]"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-3xl text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Gambar Orang */}
        <div className="md:w-1/2 flex justify-center">
          <div
            ref={imageRef}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl transition duration-500 hover:shadow-teal-500/50"
          >
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;