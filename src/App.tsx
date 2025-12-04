import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HeroBanner from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main>
        <HeroBanner />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;