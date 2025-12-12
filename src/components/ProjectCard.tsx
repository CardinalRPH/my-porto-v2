import type { ProjectCardProps } from "../types/dataTypes";

// Komponen untuk setiap Kartu Proyek
const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, linkText, className, imageStyle, imgageURI }) => {
    return (
        <div className={`relative bg-gray-900 overflow-hidden project-card ${className}`}>
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
                    <img src={imgageURI} alt="" className={`${imageStyle}`} />
                    {/* Biasanya Anda akan menggunakan gambar nyata di sini */}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard