// src/components/Header.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import ikon untuk menu

const Header: React.FC = () => {
  // State untuk mengontrol visibilitas sidebar (true = terbuka)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menutup/membuka menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-zinc-700 sticky top-0 z-50">
      <div className="container mx-auto flex justify-end items-center">
        
        {/* Tombol Hamburger (Hanya Tampil di Mobile) */}
        <button 
          className={`sm:hidden text-white text-xl p-2 z-60 ${isMenuOpen ?  'opacity-0 pointer-events-none':'opacity-100'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* 1. Navigasi Desktop (Tetap Sama) */}
        <nav className="space-x-8 hidden sm:flex">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-white opacity-80 hover:opacity-100 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* 2. Sidebar Mobile */}
      
      {/* Overlay Gelap (Hanya Muncul saat menu terbuka) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu} // Tutup menu saat klik overlay
        aria-hidden={!isMenuOpen}
      />

      {/* Panel Sidebar Sesungguhnya */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-zinc-900 shadow-2xl z-50 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          
          {/* Tombol Tutup Sidebar */}
          <div className="flex justify-end mb-10">
            <button 
              className="text-white text-xl p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Daftar Navigasi Mobile */}
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-white text-xl font-semibold p-2 hover:text-yellow-500 transition duration-300 border-b border-gray-700"
                onClick={toggleMenu} // Tutup setelah navigasi
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA/Kontak di Sidebar */}
            <a 
              href="#contact" 
              className="mt-6 text-yellow-500 text-lg font-bold p-2 hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              Contact Me →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;