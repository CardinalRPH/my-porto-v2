
import React from 'react'
// Antarmuka (Interface) untuk data perjalanan profesional
interface JourneyItemProps {
    startDate: string; // Tanggal mulai
    endDate: string;   // Tanggal berakhir, atau 'Present'
    company: string;   // Nama Perusahaan / Institusi
    role: string;      // Posisi atau Peran
    summary: string;   // Penjelasan singkat tentang peran
}

const JourneyItem: React.FC<JourneyItemProps> = ({ startDate, endDate, company, role, summary }) => {
    return (
        // Menggunakan div untuk elemen list karena ini bukan tautan tunggal, 
        // tetapi bisa diubah kembali menjadi 'a' jika keseluruhan item harus diklik
        <div
            className="flex flex-col md:flex-row justify-between py-6 border-b border-gray-700 last:border-b-0 group transition duration-300 hover:bg-gray-700/50 rounded-lg p-3 -mx-3"
        >

            {/* Kolom Kiri: Tanggal dan Perusahaan */}
            <div className="md:w-1/3 mb-2 md:mb-0 flex flex-col space-y-1 text-sm">
                <span className="font-semibold text-yellow-500">
                    {company}
                </span>
                <span className="text-gray-400">
                    {startDate} – {endDate}
                </span>
            </div>

            {/* Kolom Kanan: Peran dan Ringkasan */}
            <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition duration-300">
                    {role}
                </h3>
                <p className="text-sm text-gray-400">
                    {summary}
                </p>
            </div>

        </div>
    );
};

export default JourneyItem;