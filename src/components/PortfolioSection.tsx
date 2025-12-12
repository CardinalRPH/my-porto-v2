// src/components/PortfolioSection.tsx (FINAL dengan GSAP ScrollTrigger)
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import ProjectCard from './ProjectCard';
import SubTitle from './SubTitle';
import mainData from '../data/mainData';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- 1. ANIMASI TEKS PENGANTAR (KOLOM KIRI) ---
    const textItems = section.querySelectorAll('.portfolio-text-item');
    
    // Pre-set untuk mencegah flicker
    gsap.set(textItems, { y: 50, opacity: 0 });

    gsap.to(textItems, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: "top 85%", 
            toggleActions: "play none none none"
        }
    });

    // --- 2. ANIMASI KARTU PROYEK (KOLOM KANAN) ---
    const projectCards = section.querySelectorAll('.project-card');
    
    // Pre-set untuk mencegah flicker
    gsap.set(projectCards, { y: 50, opacity: 0, scale: 0.95 });

    gsap.to(projectCards, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2, // Jeda antar kartu
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section.querySelector('.projects-grid'), // Trigger dari container grid
            start: "top 85%", 
            toggleActions: "play none none none"
        }
    });

  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Kiri: Judul dan Deskripsi === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            
            {/* Tambahkan class 'portfolio-text-item' */}
            <SubTitle className="portfolio-text-item">Portfolio</SubTitle>
            <h2 className="text-5xl font-extrabold leading-tight mb-4 portfolio-text-item">
              All Creative Works, <br />
              Selected projects.
            </h2>
            <p className="text-gray-400 max-w-xs mb-6 portfolio-text-item">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
            <a href="#" className="text-yellow-500 flex items-center group font-medium portfolio-text-item">
              Explore more 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* === Bagian Kanan: Grid Proyek === */}
          {/* Tambahkan class 'projects-grid' */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 projects-grid">
            {mainData.project.map((items, index)=> (
              <ProjectCard {...items} key={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;