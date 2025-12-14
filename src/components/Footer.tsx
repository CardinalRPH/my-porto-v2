import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import type { SocialType } from "../types/dataTypes"
import { useEffect, useRef } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Footer = ({ socialHub }: { socialHub: SocialType }) => {

    const footerBottom = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!footerBottom.current) return
        // --- 3. ANIMASI FOOTER BAWAH ---

        // Pre-set footer bawah
        gsap.set(footerBottom.current, { opacity: 0, y: 20 });

        gsap.to(footerBottom.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: footerBottom.current,
                start: "top 95%",
                toggleActions: "play none none none"
            }
        });
    }, [])
    return (

        <footer className="flex flex-col bg-zinc-800 pb-12 items-center justify-center pt-10 border-t border-gray-700 footer-bottom" ref={footerBottom}>

            <p>© 2025 Rayhan Febriyan Saputra. All rights reserved.</p>

            {/* Ikon Sosial Media */}
            <div className="flex space-x-4 text-white text-lg mt-2">
                <a href={socialHub.github} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaGithub />
                </a>
                <a href={socialHub.instagram} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaInstagram />
                </a>
                <a href={socialHub.linkedin} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer