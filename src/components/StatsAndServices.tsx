import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SubTitle from './SubTitle';
import mainData from '../data/mainData';
import StatsCard from './StatsCard';

const StatsAndServices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;


    const leftItems = section.querySelectorAll('.left-col-item');
    const rightItems = section.querySelectorAll('.right-col-item');
    const statNumbers = section.querySelectorAll('.stat-number');

    gsap.set(leftItems, { y: 50, opacity: 0 });
    gsap.set(rightItems, { y: 50, opacity: 0 });
    // Set angka statistik ke 0 untuk animasi hitungan
    gsap.set(statNumbers, { textContent: 0 });
    gsap.to(leftItems, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    gsap.to(rightItems, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    const statData = [1, 3, 6]; 

    statNumbers.forEach((stat, index) => {
      const targetValue = statData[index];

      gsap.to(stat, {
        textContent: targetValue,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {

          const valueHolder = { value: 0 }; 

          gsap.to(valueHolder, {
            value: targetValue,
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              stat.textContent = `${Math.floor(valueHolder.value)}+`;
            }
          });
        },
      });
    });


  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Top Section: Experience & Statistics === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Left Column */}
          <div className="fade-up-item">
            <SubTitle className="left-col-item">Core Expertise</SubTitle>
            <h2 className="text-4xl font-extrabold leading-snug mb-4 left-col-item">
              A Versatile Developer <br />
              Across Four Key Stacks.
            </h2>

            <div className="space-y-6 text-gray-300">
              {mainData.core.map((service, index) => (
                <StatsCard {...service} key={index} />
              ))}
            </div>

            <a href="#" className="text-yellow-500 flex items-center group font-medium mt-6 left-col-item">
              Download CV
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-light leading-relaxed text-gray-300 mb-6 right-col-item">
              Bridging robust system administration with agile Full Stack development.
            </h3>

            <p className="text-gray-400 text-sm mb-6 right-col-item">
              I focus on building reliable, high-performance web solutions while ensuring the underlying infrastructure remains secure and efficient, guaranteeing scalability from code to deployment.
            </p>

            {/* Container Stats */}
            <div className="flex justify-around mt-6 stats-container">
              <div className='text-center'>
                <span className="text-5xl font-bold text-yellow-500 stat-number">1+</span>
                <p className="text-gray-400 text-sm mt-1 right-col-item">Years experience</p>
              </div>
              <div className='text-center'>
                <span className="text-5xl font-bold text-white stat-number">3+</span>
                <p className="text-gray-400 text-sm mt-1 right-col-item">Companies</p>
              </div>
              <div className='text-center'>
                <span className="text-5xl font-bold text-white stat-number">6+</span>
                <p className="text-gray-400 text-sm mt-1 right-col-item">Projects completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndServices;