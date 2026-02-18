
import React from 'react';
import { Thermometer, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-extrabold tracking-tight">Allentown Radiator Pros</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Professional heating solutions for Pennsylvania homeowners. Quality craftsmanship and local expertise since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQs</a></li>
              <li><a href="#blog" className="hover:text-blue-500 transition-colors">Heating Guides</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>TRV Installation</li>
              <li>Bleeder Repair</li>
              <li>System Balancing</li>
              <li>Emergency Repairs</li>
              <li>Energy Efficiency Audits</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <span className="text-slate-400">400 Hamilton St<br />Allentown, PA 18101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:8443406413" className="text-slate-400 hover:text-white transition-colors">(844) 340-6413</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-slate-400">info@allentownradiator.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Radiator Valve Experts. Licensed PA Contractor #123456.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
