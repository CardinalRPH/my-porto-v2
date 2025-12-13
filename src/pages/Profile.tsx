// src/pages/Profile.tsx
import React, { useRef, useEffect } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResumeItem from '../components/profileComponents/ResumeItem';
import mainData from '../data/mainData';
import SocialIcon from '../components/profileComponents/SocialIcon';

gsap.registerPlugin(ScrollTrigger);

// Komponen Pembantu SocialIcon (tetap sama)



const Profile: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let ctx = gsap.context(() => {

            // Animasi Header (tetap sama)
            const headerElements = section.querySelectorAll('.profile-header-text, .profile-photo');
            gsap.set(headerElements, { y: 50, opacity: 0 });
            gsap.to(headerElements, {
                y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none none" }
            });

            // Animasi Timeline & Skills (menargetkan .resume-item)
            const timelineItems = section.querySelectorAll('.resume-item'); // Ganti dari .timeline-item & .skill-group
            gsap.set(timelineItems, { y: 50, opacity: 0 });
            gsap.to(timelineItems, {
                y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power2.out',
                scrollTrigger: {
                    trigger: section.querySelector('.resume-section-container'), // Trigger baru
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            ScrollTrigger.refresh();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section id="profile" ref={sectionRef} className="bg-zinc-700 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">

                {/* === 1. WHO AM I? (HEADER SECTION) === */}
                {/* ... (tidak ada perubahan signifikan) ... */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-2 order-2 md:order-1">
                        <h1 className="text-xl font-medium text-yellow-400 mb-2 profile-header-text">WHO AM I?</h1>
                        <h2 className="text-6xl font-extrabold leading-tight mb-6 profile-header-text">
                            {mainData.profile.name}
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mb-8 profile-header-text">
                            {mainData.profile.description}
                        </p>
                        <div className="space-y-3 text-lg profile-header-text">
                            <div className="flex items-center text-gray-300">
                                <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                                <span>From: {mainData.profile.from}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <FaEnvelope className="text-yellow-500 mr-3" />
                                <span>Email: {mainData.profile.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 order-1 md:order-2 flex flex-col items-center md:items-end justify-center">
                        <img
                            src={mainData.profile.profileImage}
                            alt={`Profile of ${mainData.profile.name}`}
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-8 border-4 border-yellow-500 shadow-xl profile-photo"
                        />
                        <div className="flex space-x-6 profile-header-text">
                            <SocialIcon Icon={FaInstagram} href={mainData.profile.social.instagram} color="text-pink-500" />
                            <SocialIcon Icon={FaGithub} href={mainData.profile.social.github} color="text-gray-400" />
                            <SocialIcon Icon={FaLinkedin} href={mainData.profile.social.linkedin} color="text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* --- SEPARATOR --- */}
                <hr className="border-gray-600 mb-20" />


                {/* === 2. EDUCATION, EXPERIENCE, & SKILLS (3-COLUMN RESUME LAYOUT) === */}
                <div className="resume-section-container grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Kolom 1: EDUCATION */}
                    <div className="col-block">
                        <h3 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center">
                            <FaGraduationCap className="mr-3" /> Education
                        </h3>
                        {mainData.education.map((item, index) => (
                            <ResumeItem
                                key={index}
                                year={item.year}
                                title={item.degree}
                                subtitle={item.institution}
                                details={item.details}
                            />
                        ))}
                    </div>

                    {/* Kolom 2: EXPERIENCE */}
                    <div className="col-block">
                        <h3 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center">
                            <FaBriefcase className="mr-3" /> Experience
                        </h3>
                        {mainData.journey.map((item, index) => (
                            <ResumeItem
                                key={index}
                                year={`${item.startDate} - ${item.endDate}`}
                                title={item.role}
                                subtitle={item.company}
                                details={item.summary}
                            />
                        ))}
                    </div>

                    {/* Kolom 3: SKILLS (Menggunakan Format Resume Item Sederhana) */}
                    <div className="col-block">
                        <h3 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center">
                            <FaStar className="mr-3" /> My Skills
                        </h3>
                        {mainData.skills.map((item, index) => (
                            <ResumeItem
                                key={index}
                                title={item.title}
                                details={item.details}
                                isSkill={true} // Memberi tanda untuk styling khusus skill
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Profile;