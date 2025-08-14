import React from 'react';
import { useState } from "react";
import { Calendar, MapPin, ExternalLink, Briefcase, Instagram, Twitter, Mail, Linkedin } from 'lucide-react';
const ExperienceSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  const experiences = [
  {
    title: 'Software Engineer I',
    company: 'J.P. Morgan Chase - Infrastructure Platform',
    location: 'Bengaluru, India',
    period: 'Aug 2023 – Present',
    type: 'Full-time',
    description:
      'Develop and maintain mission-critical applications and internal tools for mainframe operations and finance technology systems, focusing on performance optimization, automation, and reliability.',
    achievements: [
      'Designed and developed an end-to-end internal tool for mainframe dataset and ID certification using Angular 15, Spring Boot, CockroachDB, and Cypress E2E tests — reduced manual effort from 2 months to 20 days (12× productivity) and cut database write time for 100K records from 25 minutes to 2 seconds through targeted indexing, CockroachDB COPY, and transaction batching.',
      'Developed REVA, an AI-powered video summarization platform using Python (NumPy, Pandas) with AWS (Transcribe, SageMaker, Polly, S3) and OpenAI APIs — reduced effective watch time by 35% via topic-based snippet generation.',
      'Designed and implemented a MARS PTF tracking system using Kafka, Spring Boot, and Angular — reduced processing time by 25% through optimized workflows, improved SQL query performance via targeted indexing and execution plan tuning, and integrated Dynatrace dashboards for proactive SLO monitoring.',
      'Maintained and enhanced 7 mission-critical mainframe operations applications, adding ServiceNow ticket automation, query optimizations, and logic efficiency improvements — reduced incidents and improved SLA adherence.',
      'Integrated CodeCarbon.io to track and reduce workload emissions, achieving a verified 22% reduction through green coding practices.'
    ],
    technologies: [
      'Angular 15',
      'Spring Boot',
      'CockroachDB',
      'Cypress',
      'Python',
      'NumPy',
      'Pandas',
      'AWS (Transcribe, SageMaker, Polly, S3)',
      'OpenAI APIs',
      'Kafka',
      'Dynatrace',
      'ServiceNow'
    ],
    color: 'blue'
  },
  {
    title: 'Software Engineer Intern',
    company: 'J.P. Morgan Chase – CIB Payments',
    location: 'Bengaluru, India',
    period: 'May 2022 – Jul 2022',
    type: 'Internship',
    description:
      'Contributed to the development of internal tools for client onboarding in CIB Payments, focusing on responsiveness, cross-device compatibility, and process efficiency.',
    achievements: [
      'Developed a responsive web application using React.js with Recoil and Spring Boot, ensuring seamless performance across devices and browsers.',
      'Streamlined client onboarding by automating key workflow steps, reducing onboarding time by 15%.'
    ],
    technologies: ['React.js', 'Recoil', 'Spring Boot', 'Java', 'MySQL'],
    color: 'purple'
  }
];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        dot: 'bg-purple-500'
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        dot: 'bg-blue-500'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        dot: 'bg-pink-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="experience" className="py-20 px-30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-blue">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            My professional journey and the amazing projects I've worked on
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:justify-between`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className={`w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-dark-900`}></div>
                    <div className={`w-8 h-8 ${colorClasses.bg} rounded-full border ${colorClasses.border} absolute -top-2 -left-2 animate-pulse`}></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} card-hover`}>
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className={`w-5 h-5 ${colorClasses.text}`} />
                          <span className={`text-sm font-medium ${colorClasses.text}`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-dark-100 mb-2">{exp.title}</h3>
                        <h4 className={`text-lg font-semibold ${colorClasses.text} mb-3`}>
                          {exp.company}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-300 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-200 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-dark-100 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-dark-200">
                              <div className={`w-1.5 h-1.5 ${colorClasses.dot} rounded-full mt-2 flex-shrink-0`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-dark-100 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-sm border ${colorClasses.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-gradient-purple mb-4">Currently</h3>
            <p className="text-lg text-dark-200 mb-6">
              Open to new opportunities and exciting challenges. Let's build something amazing together!
            </p>
            {/* <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 glow-purple">
              Get In Touch
            </button> */}

            <div className="relative inline-block text-left">
      {/* Main Button */}
      <div className="relative inline-block text-left">
  {/* Main Button */}
  <button
    onClick={() => setOpen(!open)}
    className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    <span className="flex items-center gap-2">
       Let's Connect!
    </span>
  </button>

  {/* Dropdown Menu */}
 {open && (
  <div className="absolute left-full ml-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-lg p-3 flex items-center space-x-3 animate-fade-in-up z-50">
    {[
      {
        href: "https://twitter.com/BelambeNiranjan",
        icon: <Twitter className="w-5 h-5" />,
        hoverColor: "hover:bg-purple-500/20"
      },
      {
        href: "https://instagram.com/ayyy_niryaaa",
        icon: <Instagram className="w-5 h-5" />,
        hoverColor: "hover:bg-pink-500/20"
      },
      {
        href: "https://www.linkedin.com/in/niranjan-belambe-71329018b/",
        icon: <Linkedin className="w-5 h-5" />,
        hoverColor: "hover:bg-blue-500/20"
      },
      {
        href: "mailto:niranjanbelambe28@gmail.com",
        icon: <Mail className="w-5 h-5" />,
        hoverColor: "hover:bg-mint-500/20"
      }
    ].map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${item.hoverColor} hover:scale-110`}
      >
        {item.icon}
      </a>
    ))}
  </div>
)}

</div>

      
    </div>
          </div>
        </div>

        {/* Decorative elements */}
        <svg className="absolute top-10 left-10 w-16 h-16 opacity-10 hidden lg:block" viewBox="0 0 100 100">
          <rect x="10" y="10" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
          <rect x="60" y="60" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <line x1="40" y1="25" x2="60" y2="75" stroke="currentColor" strokeWidth="2" className="text-pink-400" />
        </svg>
      </div>
    </section>
  );
};

export default ExperienceSection;