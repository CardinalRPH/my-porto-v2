// src/components/PortfolioSection.tsx
import React from 'react';

// Tipe data untuk Proyek Portfolio
interface ProjectCardProps {
  title: string;
  category: string;
  linkText: string;
  className: string; // Untuk kontrol tata letak grid
  imageStyle?: React.CSSProperties; // Untuk meniru efek perspektif gambar
}

// Data Proyek (Placeholder)
const projectsData: ProjectCardProps[] = [
  {
    title: 'BeServer.',
    category: 'Branding, Product',
    linkText: 'Residential Proxy Server',
    className: 'col-span-1 md:col-span-1 h-[400px]',
  },
  {
    title: 'Seone.',
    category: 'Product, Development',
    linkText: 'Analytics Overview',
    className: 'col-span-1 md:col-span-1 h-[400px] mt-8 md:mt-16', // Geser ke bawah
  },
  {
    title: 'Energetic Tumbler.',
    category: 'Product, Development',
    linkText: 'Dark Midnight',
    className: 'col-span-1 md:col-span-1 h-[400px]',
  },
];

// Komponen untuk setiap Kartu Proyek
const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, linkText, className }) => {
  return (
    <div className={`relative bg-gray-900 overflow-hidden ${className}`}>
      {/* Konten Teks di Sudut */}
      <div className="absolute top-8 left-8 text-white z-10">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-yellow-500 opacity-80">{category}</p>
      </div>

      {/* Konten Utama (Nama Proyek Besar) */}
      <div className="absolute bottom-8 left-8 text-white z-10">
        <p className="text-3xl font-semibold">{linkText}</p>
      </div>

      {/* Placeholder Visual / Gambar Perspektif */}
      <div className="absolute inset-0 flex items-center justify-center p-4 opacity-50">
        {/* Ini adalah div placeholder untuk gambar yang dimiringkan */}
        <div 
          className="bg-gray-700 w-full h-full transform -rotate-12 scale-150"
          style={{ backgroundImage: 'url("path/to/project-screenshot.jpg")', backgroundSize: 'cover' }}
        >
          {/* Biasanya Anda akan menggunakan gambar nyata di sini */}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Kiri: Judul dan Deskripsi === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <p className="text-sm text-yellow-500 mb-2">— Portfolio</p>
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              All Creative Works, <br />
              Selected projects.
            </h2>
            <p className="text-gray-400 max-w-xs mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
            <a href="#" className="text-yellow-500 flex items-center group font-medium">
              Explore more 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* === Bagian Kanan: Grid Proyek === */}
          {/* Menggunakan grid 2 kolom dengan 2 baris untuk meniru tata letak miring/offset */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <ProjectCard
                title="BeServer."
                category="Branding, Product"
                linkText="Residential Proxy Server"
                className="col-span-2 md:col-span-1 h-[400px] bg-gray-900"
            />
             <ProjectCard
                title="Seone."
                category="Product, Development"
                linkText="Analytics Overview"
                className="col-span-2 md:col-span-1 h-[400px] mt-0 md:mt-16 bg-gray-900"
            />
            <ProjectCard
                title="Energetic Tumbler."
                category="Product, Development"
                linkText="Dark Midnight"
                className="col-span-2 md:col-span-1 h-[400px] bg-gray-900"
            />
            {/* Kartu keempat (hanya placeholder visual) */}
            <div className="col-span-2 md:col-span-1 h-[400px] bg-gray-900 mt-0 md:mt-16 relative overflow-hidden">
                 <div className="absolute top-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-bold mb-1">Project 4.</h3>
                    <p className="text-sm text-yellow-500 opacity-80">Branding, UI/UX</p>
                </div>
                 <div className="absolute bottom-8 left-8 text-white z-10">
                    <p className="text-3xl font-semibold">Web Dashboard</p>
                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;