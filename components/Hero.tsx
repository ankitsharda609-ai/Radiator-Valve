
import React from 'react';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-100 uppercase tracking-wider">Licensed & Insured in PA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Expert Radiator <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Valve Replacement</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Serving Allentown with precision heating solutions. From thermostatic upgrades to emergency bleeder repairs, we keep your home warm and efficient.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="tel:8443406413" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                (844) 340-6413
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg transform rotate-3">
                Allentown Local
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Visit Our Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Primary Location</p>
                    <p className="text-slate-600">400 Hamilton St<br />Allentown, PA 18101</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-2xl">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Direct Line</p>
                    <p className="text-slate-600">(844) 340-6413</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 italic">"Providing 24/7 support for radiator emergencies across Pennsylvania."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
