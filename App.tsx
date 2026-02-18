
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'blog'>('home');

  // Handle hash change for simple navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog') {
        setActiveTab('blog');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} />
      
      <main className="flex-grow pt-16">
        {activeTab === 'home' ? (
          <>
            <Hero />
            <Services />
            <FAQ />
          </>
        ) : (
          <BlogContent />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
