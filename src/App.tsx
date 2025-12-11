// src/App.tsx (Pembaruan Akhir)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsAndServices from './components/StatsAndServices';
import PortfolioSection from './components/PortfolioSection'; 
import BlogAndTestimonial from './components/BlogAndTestimonial'; 
import CtaFooterSection from './components/CtaFooterSection'; // Impor yang baru

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      
      <StatsAndServices />
      
      <PortfolioSection /> 
      
      <BlogAndTestimonial /> 
      
      {/* Tambahkan CTA / Footer Section di sini */}
      <CtaFooterSection /> 

    </div>
  );
};

export default App;