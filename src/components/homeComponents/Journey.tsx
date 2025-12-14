// src/components/BlogAndTestimonial.tsx (Diubah menjadi Journey.tsx)
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import JourneyItem from './JourneyItem';
import SubTitle from './SubTitle';
import type { CompanyType } from '../../types/dataTypes';

const Journey = ({ company }: { company: CompanyType[] }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- 1. ANIMASI TEKS PENGANTAR (Kolom Kiri) ---
    const textItems = section.querySelectorAll('.journey-text-item');

    // Pre-set teks
    gsap.set(textItems, { y: 30, opacity: 0 });

    gsap.to(textItems, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // --- 2. ANIMASI TIMELINE (Kolom Kanan) ---
    // B. Animasi Item Perjalanan (Fade-in dari kanan)
    const journeyItems = section.querySelectorAll('.journey-item');

    // Pre-set item
    gsap.set(journeyItems, { x: 50, opacity: 0 });

    gsap.to(journeyItems, {
      x: 0,
      opacity: 1,
      stagger: 0.3, // Item muncul satu per satu
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.querySelector('.journey-list'), // Trigger dari list container
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-700 py-20" id='journey'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Container Utama (Dua Kolom) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Kolom Kiri (1/3 lebar): Judul dan Deskripsi */}
          <div className="md:col-span-1">
            {/* Tambahkan class journey-text-item */}
            <SubTitle className="journey-text-item">Journey</SubTitle>
            <h2 className="text-5xl font-extrabold leading-tight mb-4 journey-text-item">
              Professional <br />
              Career History.
            </h2>
            <p className="text-gray-400 max-w-xs journey-text-item">
              Explore my professional background and the technologies I've mastered across different roles.
            </p>
          </div>

          {/* Kolom Kanan (2/3 lebar): Timeline Container */}
          <div className="md:col-span-2 relative mt-8 md:mt-0">

            {/* Garis Vertikal Utama (Timeline Line) - Tambahkan ref */}
            <div
              className="absolute left-4 top-0 bottom-0 w-1 bg-gray-600 z-10"
            ></div>

            {/* Daftar Item Perjalanan - Tambahkan class untuk trigger item list */}
            <div className="relative pl-14 space-y-6 journey-list">
              {company.map((item, index) => (
                <JourneyItem {...item} key={index} className="journey-item" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;