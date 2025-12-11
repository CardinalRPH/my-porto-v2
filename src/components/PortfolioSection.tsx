// src/components/PortfolioSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

import cpsc2 from "../assets/projects/crop-sq2.jpg"
import permatasq4 from "../assets/projects/permata-sq1.jpg"
import SubTitle from './SubTitle';

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-gray-700 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Kiri: Judul dan Deskripsi === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <SubTitle>Portfolio</SubTitle>
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
                className="col-span-2 md:col-span-1 h-[600px] bg-gray-900"
                imgageURI={cpsc2}
            />
             <ProjectCard
                title="Seone."
                category="Product, Development"
                linkText="Analytics Overview"
                className="col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900"
            />
            <ProjectCard
                title="Energetic Tumbler."
                category="Product, Development"
                linkText="Dark Midnight"
                className="col-span-2 md:col-span-1 h-[600px] bg-gray-900"
                imgageURI={permatasq4}
            />
            <ProjectCard
                title="Energetic Tumbler."
                category="Product, Development"
                linkText="Dark Midnight"
                className="col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900"
                imgageURI={permatasq4}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;