import React from 'react';
import { Code2, Palette, Lightbulb, Users, Coffee, Music } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-purple-500' },
    { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 85, color: 'bg-pink-500' },
    { name: 'Python/Django', level: 80, color: 'bg-purple-400' },
    { name: 'UI/UX Design', level: 75, color: 'bg-blue-400' },
    { name: 'Database Design', level: 88, color: 'bg-pink-400' },
  ];

  const traits = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
    { icon: Palette, title: 'Creative Design', description: 'Crafting beautiful user experiences' },
    { icon: Lightbulb, title: 'Problem Solving', description: 'Finding innovative solutions' },
    { icon: Users, title: 'Team Player', description: 'Collaborating effectively with teams' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-purple">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 card-hover">
              <h3 className="text-2xl font-bold text-gradient-blue mb-6">Who I Am</h3>
              <p className="text-dark-200 leading-relaxed mb-6">
                I'm a passionate full-stack developer with 3+ years of experience creating 
                digital solutions that combine functionality with beautiful design. I love 
                turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-dark-200 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sketching out ideas for my next creative project.
              </p>
              
              {/* Fun Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-sm text-dark-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-400 mb-1">∞</div>
                  <div className="text-sm text-dark-300">Cups of Coffee</div>
                </div>
              </div>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 card-hover"
                  >
                    <IconComponent className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="font-semibold text-dark-100 mb-2">{trait.title}</h4>
                    <p className="text-sm text-dark-300">{trait.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 card-hover">
              <h3 className="text-2xl font-bold text-gradient-pink mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-dark-100">{skill.name}</span>
                      <span className="text-sm text-dark-300">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${index * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 card-hover">
              <h4 className="text-lg font-semibold text-gradient-purple mb-4">When I'm Not Coding</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Coffee, text: 'Coffee Brewing' },
                  { icon: Music, text: 'Music Production' },
                  { icon: Palette, text: 'Digital Art' },
                ].map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 text-sm text-purple-300"
                    >
                      <IconComponent className="w-4 h-4" />
                      {interest.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
        <svg className="absolute top-20 right-10 w-24 h-24 opacity-10 hidden lg:block" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-pink-400" />
          <circle cx="50" cy="50" r="5" fill="currentColor" className="text-blue-400" />
        </svg>
      </div>

      <style>{`
        @keyframes skillBar {
          from { width: 0%; }
          to { width: var(--skill-width); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;