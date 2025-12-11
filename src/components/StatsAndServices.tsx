// src/components/StatsAndServices.tsx (FINAL - Technical Stack Clean Layout)
import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSharp,
  SiArduino,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si';
import TechStack from './TechStack';
import SubTitle from './SubTitle';

// Data Keahlian Rayhan, Dikelompokkan dengan Ikon (TIDAK BERUBAH)
const skillCategories = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'C#', icon: SiSharp, color: 'text-purple-600' },
      { name: 'Arduino', icon: SiArduino, color: 'text-teal-500' },
    ],
  },
  {
    title: 'Frameworks & Runtime',
    items: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
      { name: 'ASP.NET Core', icon: SiDotnet, color: 'text-purple-700' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    ],
  },
  {
    title: 'Tools & Styling',
    items: [
      { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
];

// Komponen untuk menampilkan setiap skill sebagai badge ikon (DIPERBARUI untuk layout bersih)
interface SkillBadgeProps {
  name: string;
  icon: React.ElementType;
  color: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon, color }) => (
  <div className="flex flex-col items-center p-4 transition duration-300 hover:scale-105 hover:bg-gray-700/50 rounded-lg">
    <Icon className={`text-4xl ${color} mb-1`} />
    <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{name}</span>
  </div>
);

const StatsAndServices: React.FC = () => {
  return (
    <section className="bg-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Top Section: Experience & Statistics (Tidak berubah) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          <div className="fade-up-item">
            <SubTitle>Core Expertise</SubTitle>
            <h2 className="text-4xl font-extrabold leading-snug mb-4">
              A Versatile Developer <br />
              Across Four Key Stacks.
            </h2>

            {/* Penjelasan Stack Baru */}
            <div className="space-y-6 text-gray-300">
              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="font-bold text-white block text-lg">Full Stack Development (Front-End & Back-End)</span>
                <p className="text-sm mt-1 text-gray-400">
                  Expert in building scalable, responsive web applications using the modern JavaScript ecosystem (React/Next.js) combined with robust C#/.NET and Node.js back-ends.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="font-bold text-white block text-lg">IoT Engineering & Data Supervision</span>
                <p className="text-sm mt-1 text-gray-400">
                  Deep expertise in the full IoT pipeline: from embedded systems (Arduino/microcontrollers) and sensor data acquisition to secure network transmission and cloud-based data visualization.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="font-bold text-white block text-lg">Web Administrator & System Reliability</span>
                <p className="text-sm mt-1 text-gray-400">
                  Dedicated to maintaining system integrity, security, and peak performance, ensuring zero-downtime deployments and optimal infrastructure health.
                </p>
              </div>
            </div>

            <a href="#" className="text-yellow-500 flex items-center group font-medium mt-6">
              Download CV
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column: Quote and Stats */}
          <div>
            <h3 className="text-3xl font-light leading-relaxed text-gray-300 mb-6">
              Bridging robust system administration with agile Full Stack development.
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              I focus on building reliable, high-performance web solutions while ensuring the underlying infrastructure remains secure and efficient, guaranteeing scalability from code to deployment.
            </p>
            <div className="flex justify-around mt-6">
              <div className='text-center'>
                <span className="text-5xl font-bold text-yellow-500">1+</span>
                <p className="text-gray-400 text-sm mt-1">Years experience</p>
              </div>
              <div className='text-center'>
                <span className="text-5xl font-bold text-white">3+</span>
                <p className="text-gray-400 text-sm mt-1">Company</p>
              </div>
              <div className='text-center'>
                <span className="text-5xl font-bold text-white">6+</span>
                <p className="text-gray-400 text-sm mt-1">Project completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndServices;