import React from 'react';
import { Code2, Palette, Lightbulb, Users, Coffee, Music } from 'lucide-react';
import { CreativeDoodle, PassionDoodle } from '../doodles/DoodleComponents';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-coral-500' },
    { name: 'React/Next.js', level: 90, color: 'bg-mint-500' },
    { name: 'Node.js/Express', level: 85, color: 'bg-purple-500' },
    { name: 'Python/Django', level: 80, color: 'bg-pink-500' },
    { name: 'UI/UX Design', level: 75, color: 'bg-peach-500' },
    { name: 'Database Design', level: 88, color: 'bg-lavender-500' },
  ];

  const traits = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code', color: 'mint' },
    { icon: Palette, title: 'Creative Design', description: 'Crafting beautiful user experiences', color: 'coral' },
    { icon: Lightbulb, title: 'Problem Solving', description: 'Finding innovative solutions', color: 'purple' },
    { icon: Users, title: 'Team Player', description: 'Collaborating effectively with teams', color: 'pink' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      mint: {
        bg: 'bg-mint-500/10',
        border: 'border-mint-500/30',
        text: 'text-mint-400',
        icon: 'text-mint-400'
      },
      coral: {
        bg: 'bg-coral-500/10',
        border: 'border-coral-500/30',
        text: 'text-coral-400',
        icon: 'text-coral-400'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'text-purple-400'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        icon: 'text-pink-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.mint;
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-radial from-mint-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-coral-500/8 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-rainbow">About Me</span>
          </h2>
          <div className="section-divider w-32 mx-auto"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        {/* Doodle Elements */}
        <div className="doodle-container top-10 right-20 hidden lg:block">
          <CreativeDoodle className="w-32 h-32" />
        </div>
        <div className="doodle-container bottom-20 left-16 hidden lg:block">
          <PassionDoodle className="w-28 h-28" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8 border border-mint-500/20 card-hover">
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
              
              {/* Enhanced Fun Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 glass card-hover">
                  <div className="text-2xl font-bold text-gradient-purple mb-1">50+</div>
                  <div className="text-sm text-dark-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-coral-500/10 to-peach-500/10 rounded-lg border border-coral-500/20 glass card-hover">
                  <div className="text-2xl font-bold text-gradient-pink mb-1">∞</div>
                  <div className="text-sm text-dark-300">Cups of Coffee</div>
                </div>
              </div>
            </div>

            {/* Enhanced Traits */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => {
                const IconComponent = trait.icon;
                const colorClasses = getColorClasses(trait.color);
                return (
                  <div
                    key={index}
                    className={`glass rounded-xl p-6 border ${colorClasses.border} card-hover`}
                  >
                    <IconComponent className={`w-8 h-8 ${colorClasses.icon} mb-3`} />
                    <h4 className="font-semibold text-dark-100 mb-2">{trait.title}</h4>
                    <p className="text-sm text-dark-300">{trait.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Skills */}
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8 border border-coral-500/20 card-hover">
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
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse relative`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${index * 0.2}s both`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Interests */}
            <div className="glass rounded-xl p-6 border border-purple-500/20 card-hover">
              <h4 className="text-lg font-semibold text-gradient-rainbow mb-4">When I'm Not Coding</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Coffee, text: 'Coffee Brewing', color: 'bg-coral-500/20 text-coral-300 border-coral-500/20' },
                  { icon: Music, text: 'Music Production', color: 'bg-purple-500/20 text-purple-300 border-purple-500/20' },
                  { icon: Palette, text: 'Digital Art', color: 'bg-mint-500/20 text-mint-300 border-mint-500/20' },
                ].map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-3 py-2 ${interest.color} rounded-full border text-sm card-hover`}
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

        {/* Enhanced decorative SVG */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <svg className="w-24 h-24 opacity-15 animate-float" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-mint-400" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" className="text-coral-400" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-pink-400 animate-pulse" />
            
            {/* Floating dots */}
            <circle cx="20" cy="30" r="2" fill="currentColor" className="text-mint-300 animate-pulse" />
            <circle cx="80" cy="25" r="2" fill="currentColor" className="text-coral-300 animate-pulse" />
            <circle cx="85" cy="75" r="2" fill="currentColor" className="text-purple-300 animate-pulse" />
            <circle cx="15" cy="70" r="2" fill="currentColor" className="text-pink-300 animate-pulse" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from { width: 0%; }
          to { width: var(--skill-width); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;