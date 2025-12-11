// src/components/BlogAndTestimonial.tsx
import React from 'react';
import JourneyItem from './JourneyItem';

// Tipe data untuk Postingan Blog
interface BlogPostProps {
  date: string;
  title: string;
  category: string;
}

// Data Postingan Blog (Placeholder)
const blogPosts: BlogPostProps[] = [
  { date: 'Feb 26', title: 'Let this be a lesson to you', category: 'Blog' },
  { date: 'Feb 14', title: 'How do you use time tracking for projects?', category: 'Blog' },
  { date: 'Feb 9', title: 'Ego and empathy in design', category: 'Blog' },
];

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

// Komponen untuk setiap Baris Blog
const BlogItem: React.FC<BlogPostProps> = ({ date, title, category }) => {
  return (
    <a 
      href="#" 
      className="flex justify-between items-center py-4 border-b border-gray-700 last:border-b-0 group hover:text-yellow-500 transition duration-300"
    >
      <div className="flex space-x-4 text-gray-400 text-sm">
        <span>{date}</span>
        <span>—</span>
        <span>{category}</span>
      </div>
      <div className="flex items-center text-lg font-medium group-hover:text-yellow-500 transition duration-300">
        {title}
        <span className="ml-4 text-yellow-500 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </a>
  );
};

const Journey: React.FC = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Bagian Atas: Blog/News === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Kolom Kiri: Judul */}
          <div>
            <p className="text-sm text-yellow-500 mb-2">— Blog</p>
            <h2 className="text-5xl font-extrabold leading-tight">
              What's new? <br />
              My blog and news.
            </h2>
          </div>

          {/* Kolom Kanan: Daftar Postingan */}
          <div className="space-y-2">
            {jobHistory.map((item, index)=> (
              <JourneyItem {...item} key={index} />
            ))}
          </div>

        </div>

        {/* --- Divider --- */}
        <hr className="border-t border-gray-700 my-10" />

        {/* === Bagian Bawah: Testimonial === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 items-center">
          
          {/* Kolom Kiri: Foto Testimoni */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            {/* Placeholder Gambar */}
            <div 
              className="w-64 h-64 bg-gray-900 overflow-hidden" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }} // Efek potong miring opsional
            >
                <img 
                    src="path/to/jared-warner.png" // Ganti dengan path gambar yang benar
                    alt="Jared Warner" 
                    className="w-full h-full object-cover" 
                />
            </div>
          </div>

          {/* Kolom Kanan: Kutipan dan Kontrol */}
          <div className="md:col-span-2">
            <span className="text-6xl font-serif text-yellow-500 block mb-6">“</span>
            <blockquote className="text-4xl font-light leading-snug text-gray-300 mb-6 italic">
              Amazing! At vero eos et accu samus et iusto odio dignissimos ducimus qui blan ditiis praesen tium volup capaten nise no kamani kuc kuc hotahe!
            </blockquote>
            
            <p className="font-bold text-white mt-8">Jared Warner</p>
            <p className="text-sm text-gray-400">CEO of BeServer</p>
            
            {/* Indikator Slider */}
            <div className="flex space-x-2 mt-4">
              <span className="w-8 h-1 bg-yellow-500"></span>
              <span className="w-8 h-1 bg-gray-600"></span>
              <span className="w-8 h-1 bg-gray-600"></span>
              <span className="w-8 h-1 bg-gray-600"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;