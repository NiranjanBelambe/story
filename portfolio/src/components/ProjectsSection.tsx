import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Smartphone, Globe } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'purple'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and personalized weather alerts.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'pink'
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with rate limiting, authentication, and request routing. Built for high-performance applications.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Redis', 'Docker', 'Nginx', 'JWT'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'blue'
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'A React Native fitness tracking app with workout plans, progress tracking, and social features for fitness enthusiasts.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'purple'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design, smooth animations, and optimized performance. Built with accessibility in mind.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'pink'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'fullstack', name: 'Full Stack', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Eye },
    { id: 'backend', name: 'Backend', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        gradient: 'from-purple-600 to-purple-800'
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        gradient: 'from-blue-600 to-blue-800'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        gradient: 'from-pink-600 to-pink-800'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I love working with
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white glow-purple'
                    : 'bg-dark-800/50 text-dark-300 hover:text-purple-400 border border-purple-500/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                className={`group bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses.border} card-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center`}>
                    <Code className="w-16 h-16 text-white/50" />
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-dark-700 hover:bg-dark-600 rounded-full transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-100 mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 ${colorClasses.bg} ${colorClasses.text} rounded text-xs border ${colorClasses.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 py-2 px-4 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-gradient-purple mb-4">Want to see more?</h3>
            <p className="text-dark-200 mb-6">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 glow-purple"
            >
              <Github className="w-5 h-5" />
              Visit GitHub
            </a>
          </div>
        </div>

        {/* Decorative SVG */}
        <svg className="absolute bottom-10 right-10 w-20 h-20 opacity-10 hidden lg:block" viewBox="0 0 100 100">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <path d="M30,30 L70,30 L70,70 L30,70 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-pink-400" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSection;