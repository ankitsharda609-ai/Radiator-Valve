
import React from 'react';
import { Settings, Droplets, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    title: "Thermostatic Valve Upgrades",
    description: "Take control of your home’s climate. We install high-performance secondary thermostatic valves (TRVs) that allow you to set specific temperatures for every room, reducing energy waste significantly.",
    benefits: [
      "Individual room comfort settings",
      "Lower monthly energy bills (up to 15%)",
      "Smart-home compatible options",
      "Balanced heating system"
    ],
    icon: "Settings"
  },
  {
    title: "Leaking Bleeder Repair",
    description: "A leaking bleeder valve can ruin flooring and lower system pressure. We provide rapid replacement services for damaged bleeder plugs and stuck air vents using professional techniques.",
    benefits: [
      "Stop water damage instantly",
      "Professional-grade PTFE sealing",
      "Full system pressure testing",
      "Corrosion prevention"
    ],
    icon: "Droplets"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Solutions</h2>
          <p className="text-lg text-slate-600">
            Specialized in complex radiator systems for older Allentown homes and modern energy-efficient installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/20">
                  {service.icon === "Settings" ? (
                    <Settings className="h-8 w-8 text-white" />
                  ) : (
                    <Droplets className="h-8 w-8 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-100">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600"><TrendingUp className="h-10 w-10" /></div>
            <h4 className="font-bold text-lg mb-2">Energy Efficiency</h4>
            <p className="text-slate-500">Reduce your carbon footprint and heating costs with modern TRV tech.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600"><ShieldCheck className="h-10 w-10" /></div>
            <h4 className="font-bold text-lg mb-2">Guaranteed Work</h4>
            <p className="text-slate-500">All valve replacements come with a full 1-year leakage-free warranty.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600"><Settings className="h-10 w-10" /></div>
            <h4 className="font-bold text-lg mb-2">Local Expertise</h4>
            <p className="text-slate-500">Deep knowledge of Allentown's historical plumbing systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
