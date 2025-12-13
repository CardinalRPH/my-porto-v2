// src/components/CtaFooterSection.tsx (FINAL dengan GSAP ScrollTrigger)
import { useRef, useEffect, type FormEventHandler } from 'react';
import { gsap } from 'gsap';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import FormField from './FormField';
import type { DataFormProps } from '../../types/formTypes';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

const CtaFooterSection = ({ onSubmit, errors, register }: { onSubmit: FormEventHandler<HTMLFormElement>, errors: FieldErrors<DataFormProps>, register: UseFormRegister<DataFormProps> }) => {
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- 1. ANIMASI TEKS CTA (Kolom Kiri) ---
    const ctaItems = section.querySelectorAll('.cta-text-item');

    // Pre-set teks
    gsap.set(ctaItems, { y: 30, opacity: 0 });

    gsap.to(ctaItems, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section.querySelector('.cta-container'),
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // --- 2. ANIMASI FORMULIR (Kolom Kanan) ---
    const formContainer = section.querySelector('.form-container');

    // Pre-set form container (geser dari kanan)
    gsap.set(formContainer, { x: 50, opacity: 0 });

    gsap.to(formContainer, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: formContainer,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // --- 3. ANIMASI FOOTER BAWAH ---
    const footerBottom = section.querySelector('.footer-bottom');

    // Pre-set footer bawah
    gsap.set(footerBottom, { opacity: 0, y: 20 });

    gsap.to(footerBottom, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: footerBottom,
        start: "top 95%",
        toggleActions: "play none none none"
      }
    });

  }, []);

  return (
    <div className="bg-zinc-800 pt-20 pb-12">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8" id='contact'>
        {/* === Bagian Atas: CTA dan Formulir === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 cta-container">

          {/* Kolom Kiri: CTA Teks */}
          <div>
            {/* Tambahkan class journey-text-item */}
            <h2 className="text-5xl font-extrabold leading-tight mb-4 cta-text-item">
              Let's build <br />
              something great.
            </h2>
            <p className="text-gray-400 max-w-xs mb-8 cta-text-item">
              Ready to collaborate or just want to chat about technology? Feel free to reach out and connect!
            </p>
            <a href="mailto:rayhanfebriyan62@gmail.com" className="text-yellow-500 flex items-center group font-medium text-lg cta-text-item">
              rayhanfebriyan62@gmail.com
              <span className="ml-2 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
            </a>
          </div>

          {/* Kolom Kanan: Formulir Kontak - Tambahkan class container */}
          <div className="form-container">
            <h3 className="text-3xl font-semibold mb-8 form-input-group">
              Feel free to reach me
            </h3>

            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Input Nama - Tambahkan class form-input-group */}
              <FormField
                placeholder='Your Subject'
                name='subject'
                error={errors.subject}
                formName='Subject'
                register={register}
              />
              <FormField
                placeholder='John Doe'
                name='user_name'
                error={errors.user_name}
                formName="What's your name?"
                register={register}
              />
              <FormField
                placeholder='hello@example.com'
                name='user_email'
                error={errors.user_email}
                formName='Your fancy email'
                register={register}
              />
              <FormField
                placeholder='Lets Colaborate'
                name='message'
                error={errors.message}
                formName='Tell me about your inquiry or collaboration idea'
                register={register}
              />
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className=" p-3 text-zinc-700 bg-yellow-500 hover:translate-x-1 flex items-center gap-2 rounded-md transition-transform hover:bg-yellow-400 cursor-pointer active:scale-95 active:translate-x-0 active:bg-yellow-600"
                  aria-label="Send project details"
                >
                  <b>Send</b>
                  <span>
                    <FaLocationArrow />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaFooterSection;