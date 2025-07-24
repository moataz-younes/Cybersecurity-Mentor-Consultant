import React, { useEffect, useState } from 'react';
import { ChevronRight, Shield, Lock, Eye, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = '> Securing your digital future...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <img src="/Cybersecurity-Mentor-Consultant/hero-cyber.jpg" alt="Cybersecurity" className="absolute inset-0 w-full h-full object-cover opacity-70 z-0" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      {/* Animated Glowing Circles */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-green-400 opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-400 opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      {/* Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/30 to-slate-900"></div>
      
      {/* Animated Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-sm font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '█' : '▓'}
          </div>
        ))}
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-red-500/20 animate-bounce">
          <Shield className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-green-500/20 animate-pulse delay-1000">
          <Lock className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-red-500/20 animate-bounce delay-2000">
          <Eye className="w-7 h-7" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-mono">
                <Terminal className="w-4 h-4 mr-2" />
                Cybersecurity Consultant & Mentor | Expert in Cybercrime Investigations, OSINT & Legal-Tech Integration
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-400 to-blue-400">
                  Consultant & Mentor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                I help professionals and organizations investigate cybercrime, analyze digital evidence, and bridge the gap between cybersecurity operations and legal frameworks.
              </p>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                With a solid background in digital forensics, OSINT, cyber law, and career coaching, I provide technical guidance, strategic consulting, and professional mentorship for individuals and law enforcement teams seeking to grow in the cybersecurity field.
              </p>

              {/* Terminal-style typing text */}
              <div className="bg-black/70 border border-red-500/30 rounded-lg p-6 font-mono text-red-400">
                &gt; Analyzing digital evidence...<span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Security Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-red-500/20">
                <div className="text-3xl font-bold text-red-400">PhD</div>
                <div className="text-gray-400 text-sm">Cybercrime Law</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-green-500/20">
                <div className="text-3xl font-bold text-green-400">OSINT</div>
                <div className="text-gray-400 text-sm">Specialist</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-red-500 to-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                Schedule Consultation
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-red-500 text-red-400 px-10 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                onClick={() => {
                  const section = document.getElementById('portfolio');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-slate-900/70 to-red-950/30 backdrop-blur-sm rounded-2xl p-10 border border-red-500/20 shadow-2xl">
              {/* Code/Terminal Display */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 font-mono ml-4">cybercrime_investigation.py</span>
                </div>
                
                <div className="bg-black/90 rounded-lg p-8 font-mono text-sm">
                  <div className="text-red-400">
                    <span className="text-blue-400">def</span> <span className="text-yellow-400">investigate_cybercrime</span>():
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-purple-400">print</span>(<span className="text-green-300">"Analyzing digital evidence..."</span>)
                  </div>
                  <div className="text-gray-300 ml-4">
                    evidence = <span className="text-orange-400">extract_digital_artifacts</span>()
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-purple-400">if</span> evidence.is_admissible():
                  </div>
                  <div className="text-gray-300 ml-8">
                    <span className="text-orange-400">build_case</span>(evidence)
                  </div>
                  <div className="text-red-400 ml-4 animate-pulse">
                    # Case solved ✓
                  </div>
                </div>

                {/* Security Metrics */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                    <div className="text-red-400 font-bold text-lg">Active</div>
                    <div className="text-gray-400 text-xs">Investigation</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                    <div className="text-green-400 font-bold text-lg">OSINT</div>
                    <div className="text-gray-400 text-xs">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-2xl blur opacity-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;