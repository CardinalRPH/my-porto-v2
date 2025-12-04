import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// --- Impor React Icons (Si: Simple Icons, Fa: Font Awesome, Di: Devicons) ---
import { 
    FaReact, FaCode, 
    FaJs, FaNodeJs, 
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiSharp, SiMysql, SiPostgresql 
} from 'react-icons/si'; 
// -------------------------

gsap.registerPlugin(ScrollTrigger);

// Mapping Data Skill dengan Ikon yang sesuai
const skillItems = [
    // Frameworks
    { name: 'Next.js', type: 'Framework', icon: SiNextdotjs, color: 'text-gray-400' },
    { name: 'Express.js', type: 'Framework', icon: FaNodeJs, color: 'text-green-500' }, // Node.js icon untuk Express
    { name: 'React.js', type: 'Framework', icon: FaReact, color: 'text-cyan-400' },
    { name: 'ASP.NET', type: 'Framework', icon: FaCode, color: 'text-indigo-500' }, // Menggunakan FaCode sebagai placeholder
    // Languages
    { name: 'TypeScript', type: 'Language', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', type: 'Language', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Arduino (C/C++)', type: 'Language', icon: FaCode, color: 'text-orange-500' }, // FaCode lebih general
    { name: 'C#', type: 'Language', icon: SiSharp, color: 'text-purple-500' },
    // Databases
    { name: 'MySQL', type: 'Database', icon: SiMysql, color: 'text-teal-500' },
    { name: 'PostgreSQL', type: 'Database', icon: SiPostgresql, color: 'text-blue-600' },
];

interface SkillCardProps {
  skill: typeof skillItems[0];
  refProp: React.Ref<HTMLDivElement>;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, refProp }) => (
  <div
    ref={refProp}
    className="bg-gray-800 p-6 rounded-xl shadow-2xl transition duration-500 border border-gray-700 hover:border-teal-500 transform hover:scale-[1.03] flex flex-col items-center text-center group"
  >
    {/* Ikon dari React Icons */}
    <skill.icon 
      className={`text-6xl mb-4 ${skill.color} transition duration-300 transform group-hover:scale-110`} 
    />
    <h3 className="text-xl font-bold text-white mt-2">{skill.name}</h3>
    <p className="text-sm text-teal-400 mt-1">{skill.type}</p>
  </div>
);

const Skills: React.FC = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animasi judul bagian
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Stagger Kartu Skill
    // Perlu diatur ulang untuk memastikan hanya kartu yang terlihat yang dianimasikan
    cardRefs.current.forEach((card, index) => {
        if (card) {
            gsap.fromTo(
                card,
                { opacity: 0, y: 30, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.2)',
                    delay: index * 0.1, // Stagger manual per kartu
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    });

  }, []);

  const frameworks = skillItems.filter(item => item.type === 'Framework');
  const languages = skillItems.filter(item => item.type === 'Language');
  const databases = skillItems.filter(item => item.type === 'Database');

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          🛠️ Keahlian & Teknologi
        </h2>
        
        {/* === SECTION: FRAMEWORKS === */}
        <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center border-b border-gray-700 pb-3">
          Frameworks & Libraries
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {frameworks.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              refProp={addToCardRefs}
            />
          ))}
        </div>

        {/* === SECTION: LANGUAGES === */}
        <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center border-b border-gray-700 pb-3">
          Bahasa Pemrograman
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {languages.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              refProp={addToCardRefs}
            />
          ))}
        </div>

        {/* === SECTION: DATABASES === */}
        <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center border-b border-gray-700 pb-3">
          Basis Data
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {databases.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              refProp={addToCardRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;