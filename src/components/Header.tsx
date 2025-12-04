import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Animasi GSAP saat komponen dimuat (fade in dan sedikit turun)
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-teal-400">
              {'<Developer/>'}
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition duration-300 font-medium tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;