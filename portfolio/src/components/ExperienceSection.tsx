import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Corp',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on major product launches',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
      color: 'purple'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      location: 'New York, NY',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Successfully delivered 15+ client projects on time',
        'Reduced bug reports by 35% through comprehensive testing',
        'Introduced automated testing practices to the team'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis', 'Nginx'],
      color: 'blue'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency Pro',
      location: 'Los Angeles, CA',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Specialized in creating responsive, interactive websites and web applications. Worked closely with designers to bring creative visions to life.',
      achievements: [
        'Built 20+ responsive websites with 95%+ performance scores',
        'Implemented advanced animations and micro-interactions',
        'Optimized websites for SEO resulting in 50% traffic increase'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Webpack', 'Sass'],
      color: 'pink'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Started my professional journey contributing to various projects and learning from senior developers. Focused on both frontend and backend development.',
      achievements: [
        'Completed comprehensive training in full-stack development',
        'Contributed to 3 major product features',
        'Maintained 99% code review approval rate'
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'Git'],
      color: 'blue'
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
    <section id="experience" className="py-20 px-4 relative">
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
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 glow-purple">
              Get In Touch
            </button>
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