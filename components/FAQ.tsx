
import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: "Do I need to drain the whole system to change one valve?",
    answer: "Not necessarily. We can often isolate the specific radiator or use professional 'pipe freezing' technology to swap the valve without a full system drain, saving you significant time and cost."
  },
  {
    question: "How long does a radiator valve replacement take?",
    answer: "A typical replacement takes between 45 to 90 minutes. This includes time for isolating the radiator, installing the new valve, and testing for leaks once the system is back under pressure."
  },
  {
    question: "What are the benefits of a Secondary Thermostatic Valve?",
    answer: "Standard valves are either fully on or off. Thermostatic valves (TRVs) sense the air temperature and automatically adjust the water flow, preventing overheating and significantly lowering bills."
  },
  {
    question: "Why is my bleeder valve still leaking after I tightened it?",
    answer: "This usually indicates the internal thread is stripped or the spindle is damaged. Tightening it further can crack the radiator housing. Professional replacement is the only safe and permanent fix."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Common Questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know about your home heating system's valves.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-600 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
