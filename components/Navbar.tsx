
import React, { useState } from 'react';
import { Phone, Menu, X, Thermometer } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'blog';
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Thermometer className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">Allentown Radiator Pros</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`text-sm font-semibold transition-colors ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Home</a>
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#faq" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">FAQs</a>
            <a href="#blog" className={`text-sm font-semibold transition-colors ${activeTab === 'blog' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Guides</a>
            <a 
              href="tel:8443406413" 
              className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>(844) 340-6413</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 p-2 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          <a href="#" onClick={toggleMenu} className="block text-base font-semibold text-gray-700 hover:text-blue-600">Home</a>
          <a href="#services" onClick={toggleMenu} className="block text-base font-semibold text-gray-700 hover:text-blue-600">Services</a>
          <a href="#faq" onClick={toggleMenu} className="block text-base font-semibold text-gray-700 hover:text-blue-600">FAQs</a>
          <a href="#blog" onClick={toggleMenu} className="block text-base font-semibold text-gray-700 hover:text-blue-600">Guides</a>
          <a 
            href="tel:8443406413" 
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-bold"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
