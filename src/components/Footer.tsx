import React from 'react';
// --- Impor React Icons ---
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// -------------------------

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 border-t border-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Tertarik Bekerja Sama?</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Saya selalu terbuka untuk peluang baru. Jangan ragu untuk menghubungi saya melalui email atau media sosial.
        </p>
        
        <a
          href="mailto:nama.email@contoh.com"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition duration-300 transform hover:scale-105 shadow-xl mb-6"
        >
          Hubungi Saya Sekarang
        </a>
        
        {/* Tombol Sosial di Footer */}
        <div className="flex justify-center space-x-6 mb-8">
            <a
              href="[Link LinkedIn Anda]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="[Link GitHub Anda]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} [Nama Anda]. Dibuat dengan React, Tailwind CSS, & GSAP.
        </div>
      </div>
    </footer>
  );
};

export default Footer;