// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import SubTitle from './SubTitle';
// import demoImg from "../assets/preview.png"

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement) return;

        gsap.set(heroElement.querySelectorAll('.hero-name-line'), { y: 100, opacity: 0 });
        gsap.set(heroElement.querySelector('.divider-line'), { width: 0 });
        gsap.set(heroElement.querySelectorAll('.content-item'), { y: 30, opacity: 0 });
        gsap.set(heroElement.querySelector('.hero-image'), { x: 50, opacity: 0, scale: 0.95 });

        const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });


        tl.to(heroElement.querySelector('.divider-line'), {
            width: 64,
            duration: 1.5
        }, 0.3)
            .to(heroElement.querySelectorAll('.hero-name-line'), {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1.2
            }, 0.5)
            .to(heroElement.querySelectorAll('.content-item'), {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.8
            }, 1.2)
            .to(heroElement.querySelector('.hero-image'), {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5
            }, 1.2);

    }, []);

    return (
        <section ref={heroRef} className="py-16 md:py-24 grid grid-cols-1 z-0 md:grid-cols-2 gap-12 items-center relative">
            <div className="absolute top-0 right-0 z-10 w-full flex items-end h-full  hero-image">
                <div className="w-full bg-amber-300 h-20 object-cover rounded-lg shadow-2xl"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }}>

                </div>
                {/* <img
                    src={demoImg}
                    alt="Carlos Mendozas"
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }}
                /> */}
            </div>
            {/* Left Column */}

            <div className='z-20'>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-4 overflow-hidden">
                    <span className="block hero-name-line">Carlos</span>
                    <span className="block hero-name-line">Mendoza.</span>
                </h1>
                <hr className="w-16 border-t-4 border-yellow-500 mb-8 divider-line" />

                <div className="flex space-x-4 text-white text-lg mt-8 content-item">
                    <a href="#" className="opacity-70 hover:opacity-100 transition duration-300">
                        <FaGithubSquare size={"2em"} />
                    </a>
                    <a href="#" className="opacity-70 hover:opacity-100 transition duration-300">
                        <FaLinkedin size={"2em"} />
                    </a>
                </div>
            </div>

            {/* Right Column */}
            <div className='z-20'>
                <div className="mb-12">
                    <SubTitle>Introduction</SubTitle>
                    <h2 className="text-3xl font-semibold mb-4 content-item">
                        Product Designer and <br />
                        Developer, based in <br />
                        California.
                    </h2>
                    <p className="text-gray-400 max-w-sm mb-6 content-item">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <a href="#" className="text-yellow-500 flex items-center group content-item">
                        My Profile
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;