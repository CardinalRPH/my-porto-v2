// src/components/ProjectCard.tsx (MODIFIED with Hover Effect)
import React from 'react';
import type { ProjectCardProps } from "../../types/dataTypes";
import { FaExternalLinkAlt } from 'react-icons/fa';

// Sesuaikan interface untuk memasukkan link tujuan
interface EnhancedProjectCardProps extends ProjectCardProps {
    projectLink: string; // Tautan ke proyek
}

// Komponen untuk setiap Kartu Proyek
const ProjectCard: React.FC<EnhancedProjectCardProps> = ({
    title,
    category,
    linkText,
    className,
    imageStyle,
    imgageURI,
    projectLink // Prop baru
}) => {
    return (
        // Wrapper Utama: Tambahkan class 'group' untuk mengontrol hover state
        <div className={`relative bg-gray-900 overflow-hidden project-card rounded-xl group ${className}`}>

            {/* === 1. Overlay Blur & Button Container (Hanya Muncul saat Hover) === */}
            <div
                className="absolute inset-0 z-20 flex items-center justify-center 
                           bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 
                           group-hover:opacity-100"
            >
                {/* Tombol Menuju Link */}
                <a
                    href={projectLink} // Gunakan link tujuan
                    target="_blank" // Buka di tab baru
                    rel="noopener noreferrer"
                    className="p-3 text-lg font-semibold text-white bg-yellow-600 rounded-full 
                               hover:bg-yellow-500 transition-colors duration-200 shadow-xl 
                               scale-90 group-hover:scale-100 transform" // Efek skala saat hover
                >
                    <FaExternalLinkAlt />
                </a>
            </div>

            {/* === 2. Konten Visual (Di Bawah Overlay) === */}

            {/* Konten Teks di Sudut */}
            <div className="absolute top-8 left-8 text-white z-10 transition-transform duration-300 group-hover:-translate-y-2.5">
                <h3 className="text-2xl font-bold mb-1">{title}</h3>
                <div className="flex space-x-3 text-white">
                    {category.map((item, index) => {
                        // Ambil komponen ikon dari objek
                        const IconComponent = item.icon;

                        return (
                            <span
                                key={index}
                                className={`opacity-80 hover:opacity-100 transition duration-300 hover:scale-125 transform ${item.color}`}
                            // Tampilkan komponen ikon dan terapkan ukuran
                            >
                                <IconComponent size={30} />
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Konten Utama (Nama Proyek Besar) */}
            <div className="absolute bottom-8 left-8 text-white z-10 transition-transform duration-300 group-hover:translate-y-2.5">
                <p className="text-3xl font-semibold">{linkText}</p>
            </div>

            {/* Placeholder Visual / Gambar Perspektif */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-50 transition-opacity duration-300 group-hover:opacity-30">
                <div
                    className="bg-gray-700 w-full h-full transform -rotate-12 scale-150"
                    style={{ backgroundImage: 'url("path/to/project-screenshot.jpg")', backgroundSize: 'cover' }}
                >
                    <img src={imgageURI} alt={`Screenshot of ${title}`} className={`${imageStyle}`} />
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;