import React from 'react';
import { Shield, Search, Lock, Monitor, AlertTriangle, FileCheck, Users, BookOpen, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "Cybersecurity Career Guidance & Mentorship",
      description: "End-to-end support for professionals entering cybersecurity fields with personalized assessment and custom learning roadmaps.",
      features: ["Path Selection & Specialization", "Custom Learning Roadmap", "Certification & Job Preparation", "Academic Research Support"],
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Cybersecurity Awareness Training",
      description: "Interactive workshops for organizations and educational institutions covering fundamental cyber hygiene and threat-specific training.",
      features: ["Fundamental Cyber Hygiene", "Digital Privacy Protection", "Threat-Specific Training", "Legal Cyber Awareness"],
      color: "green"
    },
    {
      icon: PenTool,
      title: "Legal & Technical Content Creation",
      description: "High-quality, accessible content for diverse platforms including technical writing, visual content, and content review services.",
      features: ["Articles & Whitepapers", "Script Development", "Visual & Digital Content", "Content Review Services"],
      color: "blue"
    },
    {
      icon: Search,
      title: "OSINT & Threat Monitoring",
      description: "Advanced open-source intelligence gathering and threat monitoring with custom tool development and Arabic-language specialization.",
      features: ["Cybercriminal Activity Tracking", "Arabic-Language Monitoring", "Python Automation Tools", "Threat Intelligence"],
      color: "red"
    },
    {
      icon: Shield,
      title: "Digital Forensics & Investigation",
      description: "Comprehensive digital forensics services including evidence analysis, breach investigations, and court-admissible reporting.",
      features: ["Digital Evidence Analysis", "Breach Investigations", "Court-Admissible Reports", "Chain of Custody"],
      color: "green"
    },
    {
      icon: FileCheck,
      title: "Legal-Technical Consulting",
      description: "Bridge legal frameworks with technological solutions for incident response, compliance, and cybercrime law applications.",
      features: ["Incident Response Consulting", "Compliance Requirements", "Digital Evidence Standards", "Legal Framework Integration"],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'text-green-400',
          border: 'border-green-500/20 hover:border-green-500/40',
          bg: 'bg-green-500/10',
          accent: 'text-green-400'
        };
      case 'blue':
        return {
          icon: 'text-blue-400',
          border: 'border-blue-500/20 hover:border-blue-500/40',
          bg: 'bg-blue-500/10',
          accent: 'text-blue-400'
        };
      case 'red':
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20 hover:border-red-500/40',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
      default:
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20 hover:border-red-500/40',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-red-950/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-red-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity services spanning investigation, education, and consulting 
            to bridge legal frameworks with technological solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`bg-slate-800/30 p-10 rounded-xl border ${colors.border} transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`mt-6 w-full py-3 border ${colors.border} ${colors.accent} rounded-lg hover:${colors.bg} transition-colors font-medium`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-red-950/30 rounded-2xl p-12 border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Specialized Cybercrime Investigation?
            </h3>
            <p className="text-gray-300 mb-6">
              Every case has unique challenges. Let's discuss your specific investigation needs 
              and develop a customized approach combining legal expertise with technical solutions.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;