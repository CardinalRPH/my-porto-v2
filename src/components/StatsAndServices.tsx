// src/components/StatsAndServices.tsx
import React from 'react';

// Tipe data untuk Kartu Layanan
interface ServiceCardProps {
  icon: string; // Bisa berupa kelas Font Awesome atau karakter
  title: string;
  projects: number;
  isPrimary?: boolean;
}

// Data untuk kartu
const serviceData: ServiceCardProps[] = [
  { icon: '📦', title: 'Product Designer.', projects: 124, isPrimary: true },
  { icon: '✒️', title: 'Branding Designer.', projects: 37, isPrimary: false },
  { icon: '💻', title: 'Full Stack Developer.', projects: 62, isPrimary: false },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, projects, isPrimary }) => {
  const bgColor = isPrimary ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600 transition duration-300';

  return (
    <div className={`p-8 h-full flex flex-col justify-between ${bgColor}`}>
      <span className={`text-4xl mb-4 ${isPrimary ? 'text-gray-900' : 'text-yellow-500'}`}>
        {icon}
      </span>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${isPrimary ? 'text-gray-800' : 'text-gray-400'}`}>
          {projects} Projects
        </p>
      </div>
    </div>
  );
};

const StatsAndServices: React.FC = () => {
  return (
    <section className="bg-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Atas: Kontak, Kutipan, dan Statistik === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Kolom Kiri: Kontak */}
          <div>
            <p className="text-sm text-yellow-500 mb-2">— Contact</p>
            <h2 className="text-4xl font-extrabold leading-snug mb-4">
              Any Type Of Query <br />
              & Discussion.
            </h2>
            <p className="text-gray-400 mb-6 max-w-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
            <a href="mailto:hi@carlos.com" className="text-yellow-500 flex items-center group font-medium">
              hi@carlos.com 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Kolom Kanan: Kutipan dan Statistik */}
          <div>
            <blockquote className="text-3xl font-light leading-relaxed text-gray-300 mb-10">
              You can’t use up creativity, the more you use, more you have in your significant mind.
            </blockquote>
            <p className="text-gray-400 text-sm mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            
            {/* Statistik */}
            <div className="flex space-x-10 mt-6">
              <div>
                <span className="text-5xl font-bold text-yellow-500">14</span>
                <p className="text-gray-400 text-sm mt-1">Years of Experience.</p>
              </div>
              <div>
                <span className="text-5xl font-bold text-white">187</span>
                <p className="text-gray-400 text-sm mt-1">Satisfied Clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <hr className="border-t border-gray-700 my-10" />

        {/* === Bagian Bawah: Kartu Layanan === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsAndServices;