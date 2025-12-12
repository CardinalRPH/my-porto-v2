// src/components/BlogAndTestimonial.tsx
import React from 'react';
import JourneyItem from './JourneyItem';
import SubTitle from './SubTitle';

const jobHistory = [
  {
    startDate: 'Aug 2023',
    endDate: 'Present',
    company: 'HSBC',
    role: 'Web Administrator',
    summary: 'Fokus pada administrasi sistem web dan keandalan operasional untuk lingkungan perbankan yang aman.'
  },
  {
    startDate: 'Mar 2022',
    endDate: 'Jul 2023',
    company: 'Onanmedia International',
    role: 'Full Stack Developer',
    summary: 'Pengalaman mendalam dalam pengembangan web full-stack menggunakan JavaScript, Node.js, dan React.'
  },
  // ... lainnya
];


const Journey: React.FC = () => {
  return (
    <section className="bg-zinc-700 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Bagian Atas: Blog/News === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Kolom Kiri: Judul */}
          <div>
            <SubTitle>Journey</SubTitle>
            <h2 className="text-5xl font-extrabold leading-tight">
              What's new? <br />
              My blog and news.
            </h2>
          </div>

          {/* Kolom Kanan: Daftar Postingan */}
          <div className="space-y-2">
            {jobHistory.map((item, index) => (
              <JourneyItem {...item} key={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;