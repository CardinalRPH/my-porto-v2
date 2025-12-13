import React from 'react';

// Antarmuka (Interface) untuk data perjalanan profesional
interface JourneyItemProps {
    startDate: string;
    endDate: string;
    company: string;
    role: string;
    summary: string;
    className?: string; // TAMBAHKAN INI
}

const JourneyItem: React.FC<JourneyItemProps> = ({ startDate, endDate, company, role, summary, className }) => {
    return (
        <div className={`relative group ${className}`}>

            {/* Titik (Dot) Timeline - Perubahan di sini */}
            <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center z-20">

                {/* Penjelasan posisi:
                  1. left-[-10px]: Menyejajarkan titik 24px (w-4 + border-4) secara horizontal dengan garis 4px.
                  2. top-1/2: Menarik titik ke 50% dari tinggi item container.
                  3. -translate-y-1/2: Menggeser titik ke atas sebesar 50% dari tinggi dirinya sendiri,
                     sehingga pusatnya benar-benar berada di tengah item.
                */}
                <div className="h-4 w-4 rounded-full bg-yellow-500 border-4 border-zinc-700 shadow-lg transition duration-300 group-hover:scale-125"></div>
            </div>

            {/* Konten Perjalanan (Tidak Berubah) */}
            <div className="p-4 bg-zinc-800/70 rounded-lg shadow-xl transition duration-300 group-hover:bg-zinc-800">

                {/* Peran dan Perusahaan */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition duration-300">
                    {role} <span className="text-gray-400 font-normal">@ {company}</span>
                </h3>

                {/* Tanggal */}
                <span className="text-sm font-medium text-yellow-500 block mb-3">
                    {startDate} — {endDate}
                </span>

                {/* Ringkasan */}
                <p className="text-sm text-gray-400 mt-2">
                    {summary}
                </p>

            </div>
        </div>
    );
};

export default JourneyItem;