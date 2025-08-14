import React from 'react';
import { Heart, Camera, Music, Gamepad2, Palette, Coffee, Mountain, Book, Pencil, Volleyball } from 'lucide-react';

const PassionsSection: React.FC = () => {
  const passions = [
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Passionate gamer who enjoys both competitive and story-driven experiences. Love exploring game design and mechanics.',
    color: 'purple',
    tags: ['RPG', 'Strategy', 'FPS']
  },
  {
    icon: Volleyball,
    title: 'Cricket',
    description: 'Big cricket enthusiast who enjoys following matches and playing casually with friends.',
    color: 'blue',
    tags: ['Batting', 'Bowling', 'Fielding']
  },
  {
    icon: Pencil,
    title: 'Sketching',
    description: 'Enjoy sketching and doodling, often bringing ideas to life on paper before turning them digital.',
    color: 'pink',
    tags: ['Portraits', 'Concept Art', 'Line Work']
  },
  {
    icon: Palette,
    title: 'Digital Art',
    description: 'Creating digital illustrations and designs using modern tools. Love experimenting with styles and color palettes.',
    color: 'purple',
    tags: ['Illustration', 'UI Design', 'Concept Art']
  },
  {
    icon: Book,
    title: 'Reading',
    description: 'Enjoy diving into books, from sci-fi adventures to thought-provoking non-fiction.',
    color: 'blue',
    tags: ['Sci-Fi', 'Technology', 'Self-Improvement']
  },
  {
    icon: Music,
    title: 'Music',
    description: 'Passionate about listening to and exploring diverse genres, from lo-fi beats to energetic soundtracks.',
    color: 'pink',
    tags: ['Lo-fi', 'Electronic', 'Instrumental']
  }
];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'text-purple-400',
        tag: 'bg-purple-500/20 text-purple-300'
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        icon: 'text-blue-400',
        tag: 'bg-blue-500/20 text-blue-300'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        icon: 'text-pink-400',
        tag: 'bg-pink-500/20 text-pink-300'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="passions" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Passions & Interests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Beyond coding, these are the things that fuel my creativity and keep me inspired
          </p>
        </div>

        {/* Passions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {passions.map((passion, index) => {
            const IconComponent = passion.icon;
            const colorClasses = getColorClasses(passion.color);
            
            return (
              <div
                key={index}
                className={`group bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} card-hover relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 ${colorClasses.bg} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 border ${colorClasses.border} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${colorClasses.icon}`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 group-hover:${colorClasses.text} transition-colors duration-300`}>
                  {passion.title}
                </h3>
                
                <p className="text-dark-300 leading-relaxed mb-6">
                  {passion.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {passion.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${colorClasses.tag} rounded-full text-xs font-medium border ${colorClasses.border}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Philosophy */}
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" className="text-purple-500" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gradient-purple mb-6">My Philosophy</h3>
            
            <p className="text-lg text-dark-200 leading-relaxed max-w-4xl mx-auto mb-8">
              I believe that creativity and technical skills go hand in hand. My diverse interests 
              fuel my innovation as a developer, bringing fresh perspectives to problem-solving. 
              Whether I'm composing music, capturing a perfect shot, or brewing the perfect cup of coffee, 
              these passions teach me patience, attention to detail, and the importance of continuous learning.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-dark-300">Always Learning</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-400">🎨</div>
                <div className="text-sm text-dark-300">Creative Expression</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-400">🌱</div>
                <div className="text-sm text-dark-300">Personal Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <svg className="absolute top-10 left-10 w-16 h-16 opacity-10 hidden lg:block animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <path d="M30,50 Q50,30 70,50 Q50,70 30,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-pink-400" />
        </svg>

        <svg className="absolute bottom-20 right-20 w-20 h-20 opacity-10 hidden lg:block animate-pulse" viewBox="0 0 100 100">
          <polygon points="50,10 90,35 75,85 25,85 10,35" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
          <circle cx="50" cy="50" r="8" fill="currentColor" className="text-pink-400" />
        </svg>
      </div>
    </section>
  );
};

export default PassionsSection;