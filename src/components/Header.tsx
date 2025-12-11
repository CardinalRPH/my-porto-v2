// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Inisial */}
        <div className="text-3xl font-bold text-yellow-500">
          <span className="p-2 border-2 border-yellow-500 rounded-full inline-block">D</span>
        </div>

        {/* Navigasi */}
        <nav className="space-x-8 hidden sm:flex">
          <a href="#" className="text-white hover:text-yellow-500 transition duration-300">Services</a>
          <a href="#" className="text-white opacity-60 hover:opacity-100 transition duration-300">Works</a>
          <a href="#" className="text-white opacity-60 hover:opacity-100 transition duration-300">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;