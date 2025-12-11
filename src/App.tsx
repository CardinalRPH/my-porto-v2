// src/App.tsx (Pembaruan Akhir)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsAndServices from './components/StatsAndServices';
import PortfolioSection from './components/PortfolioSection'; 
import CtaFooterSection from './components/CtaFooterSection'; // Impor yang baru
import TechStack from './components/TechStack';
import mainData from './data/mainData';
import Journey from './components/Journey';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-700 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      
      <StatsAndServices />
      <TechStack data={mainData.techStack}/>
      <PortfolioSection /> 
      
      <Journey /> 
      
      {/* Tambahkan CTA / Footer Section di sini */}
      <CtaFooterSection /> 

    </div>
  );
};

export default App;