import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900 to-red-950/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-red-400">Moataz</span> <span className="text-green-400">Yones</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cybercrime Investigator and OSINT Specialist with extensive experience bridging 
            legal frameworks and technological solutions in digital forensics and threat monitoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              Investigating Digital Crimes Since 2020
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As a Cybercrime Investigator and OSINT Specialist, I focus on leading digital investigations 
              and forensic evidence analysis for complex cybercrimes. My work involves developing custom 
              tools for OSINT, threat monitoring, and digital forensics while providing legal-technical 
              consulting to organizations on incident response and compliance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing a PhD in Cybercrime Law & Digital Evidence, I bridge the gap between 
              legal requirements and technical solutions. I also mentor professionals entering 
              cybersecurity, OSINT, and digital forensics fields.
            </p>

            {/* Core Focus Areas */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-400">Core Focus Areas:</h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm">Digital Forensics</span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">OSINT & Threat Monitoring</span>
                <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm">Cybercrime Investigation</span>
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">Legal-Tech Integration</span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">Cybersecurity Mentorship</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
              <Shield className="w-12 h-12 text-red-400 mb-4" />
              <div className="text-3xl font-bold text-white">PhD</div>
              <div className="text-gray-400">Cybercrime Law Research</div>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-400">Professional Certifications</div>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-gray-400">Languages (AR/EN)</div>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
              <Clock className="w-12 h-12 text-red-400 mb-4" />
              <div className="text-3xl font-bold text-white">2025</div>
              <div className="text-gray-400">Active Since</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;