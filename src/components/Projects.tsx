import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data dummy untuk proyek
const projectsData = [
  {
    title: 'Aplikasi E-Commerce Modern',
    description: 'Platform penjualan yang dibangun dengan Next.js dan Express.js, menggunakan PostgreSQL untuk basis data.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    title: 'Sistem Manajemen Inventory',
    description: 'Sistem back-office menggunakan ASP.NET Core dan React, dengan otentikasi JWT.',
    tags: ['ASP.NET', 'React.js', 'C#', 'MySQL'],
  },
  {
    title: 'Kontrol Perangkat IoT',
    description: 'Proyek hobi yang melibatkan pemrograman Arduino dan kontrol web melalui Node.js.',
    tags: ['Arduino', 'JavaScript', 'IoT', 'C'],
  },
];

const Projects: React.FC = () => {
  const projectRefs = useRef([]);

  // Fungsi untuk menambahkan referensi ke array
  const addToProjectRefs = (el: never) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    projectRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
    <div
      ref={addToProjectRefs}
      className="bg-gray-800 p-6 rounded-xl shadow-2xl transition duration-500 border border-gray-700 hover:border-teal-500 transform hover:scale-[1.02]"
    >
      <h3 className="text-3xl font-bold text-teal-400 mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 bg-teal-800/50 text-teal-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="mt-4 inline-block text-teal-400 hover:text-teal-300 font-semibold transition duration-300"
      >
        Lihat Detail →
      </a>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          💻 Proyek Terbaru
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;