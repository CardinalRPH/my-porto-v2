// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
    return (
        // Menggunakan min-h-screen untuk mengisi seluruh tinggi viewport
        <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
            <div className="text-center max-w-lg">
                
                {/* Kode Error (Sangat Menonjol) */}
                <p className="text-6xl font-thin tracking-widest text-gray-500 mb-6 border-b border-gray-700 pb-4">
                    404
                </p>
                
                {/* Judul Utama */}
                <h1 className="text-4xl font-extrabold text-white mb-4">
                    RESOURCE NOT FOUND
                </h1>
                
                {/* Pesan Profesional */}
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    We apologize, but the URL you requested could not be located on this server. It may have been moved or deleted.
                </p>
                
                {/* Tombol Aksi - Fokus pada Beranda */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-yellow-600 text-zinc-900 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-xl"
                >
                    <FaArrowLeft className="mr-2" />
                    Return to Homepage
                </Link>
                
            </div>
        </div>
    );
};

export default NotFoundPage;