
import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Phone } from 'lucide-react';

const BlogContent: React.FC = () => {
  return (
    <article className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Services
        </a>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Professional Radiator Valve Replacement Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-500 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Oct 24, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Technical Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          <p className="text-xl text-slate-600 font-medium italic border-l-4 border-blue-500 pl-6">
            Is your home heating uneven? Or perhaps you've noticed a persistent drip on your carpet? Replacing your radiator valves is one of the most cost-effective ways to improve home comfort and energy efficiency.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Upgrading to Secondary Thermostatic Valves (TRVs)</h2>
            <p>
              Most older homes use manual "on/off" valves. By upgrading to a <strong>Secondary Thermostatic Radiator Valve (TRV)</strong>, you gain individual room temperature control.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Energy Savings:</strong> Save up to 15% on heating bills by not heating empty rooms.</li>
              <li><strong>Comfort:</strong> Maintains a consistent temperature without manual adjustment.</li>
              <li><strong>Smart Integration:</strong> Modern TRVs can even be controlled via your smartphone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Fixing a Leaking Bleeder Valve</h2>
            <p>
              A "leaking bleeder" is a common headache. The bleeder valve is the small plug at the top of the radiator used to release air.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>The Cause:</strong> Usually worn-out internal threads or damaged spindle packing.</li>
              <li><strong>The Fix:</strong> If tightening doesn't work, the entire bleeder plug should be replaced. We recommend using a high-quality 1/2" BSP replacement with fresh PTFE tape for a watertight seal.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Why Professional Replacement Matters</h2>
            <p>While some DIY enthusiasts tackle this, professional installation ensures:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Proper system balancing (so all radiators heat up at the same speed).</li>
              <li>Correct pipe sizing (standard 15mm vs. older 22mm).</li>
              <li>No risk of "flood" damage during the draining process.</li>
            </ul>
          </section>

          <div className="mt-16 bg-slate-900 text-white p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Expert Help in Allentown?</h3>
            <p className="text-slate-300 mb-8 text-lg">Don't risk a DIY plumbing disaster. Let our certified technicians handle it.</p>
            <a 
              href="tel:8443406413" 
              className="inline-flex items-center gap-3 bg-blue-600 px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95"
            >
              <Phone className="h-6 w-6" />
              (844) 340-6413
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogContent;
