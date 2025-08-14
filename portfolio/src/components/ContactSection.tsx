import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'niranjanbelambe28@gmail.com',
      href: 'mailto:niranjanbelambe28@gmail.com',
      color: 'purple'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9665408390',
      href: 'tel:+919665408390',
      color: 'blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: '#',
      color: 'pink'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/NiranjanBelambe',
      color: 'text-dark-300 hover:text-purple-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/niranjan-belambe-71329018b/',
      color: 'text-dark-300 hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/BelambeNiranjan',
      color: 'text-dark-300 hover:text-pink-400'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      href: '#',
      color: 'text-dark-300 hover:text-purple-400'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'text-purple-400'
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        icon: 'text-blue-400'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        icon: 'text-pink-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-purple">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-gradient-blue mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const colorClasses = getColorClasses(info.color);
                  
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-4 p-4 ${colorClasses.bg} rounded-xl border ${colorClasses.border} hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center border ${colorClasses.border} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${colorClasses.icon}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-dark-100">{info.label}</div>
                        <div className={`${colorClasses.text} text-sm`}>{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-xl font-bold text-gradient-pink mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center gap-3 px-4 py-3 bg-dark-700/50 rounded-lg border border-dark-600 ${social.color} transition-all duration-300 hover:scale-105 hover:border-purple-500/30`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Fun Message */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-gradient-purple mb-4">Coffee Chat?</h3>
              <p className="text-dark-200 leading-relaxed">
                I'm always up for a good conversation about technology, design, or life in general. 
                Whether you have a project idea, want to collaborate, or just want to say hi, 
                don't hesitate to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-gradient-pink mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 glow-purple"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-700 text-center">
          <p className="text-dark-400 mb-4">
            © 2025 Niranjan Belambe. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-sm text-dark-500">
            Designed and developed with passion in Bengaluru
          </p>
        </div>

        {/* Decorative SVG */}
        <svg className="absolute top-10 right-10 w-20 h-20 opacity-10 hidden lg:block animate-float" viewBox="0 0 100 100">
          <path d="M50,10 L90,50 L50,90 L10,50 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-pink-400" />
          <path d="M35,35 L65,35 L65,65 L35,65 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;