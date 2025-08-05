import React from 'react';
import { GraduationCap, Award, Book, Calendar, MapPin, Star } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      gpa: '3.8/4.0',
      description: 'Specialized in Machine Learning and Software Engineering. Completed thesis on "Scalable Web Application Architecture".',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Teaching Assistant for Data Structures & Algorithms',
        'Led student tech innovation club'
      ],
      color: 'purple'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      gpa: '3.7/4.0',
      description: 'Comprehensive program covering software development, system design, and project management.',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Society',
        'Winner of Annual Hackathon 2016'
      ],
      color: 'blue'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️',
      color: 'purple'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: '🔧',
      color: 'blue'
    },
    {
      name: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2022',
      icon: '⚛️',
      color: 'pink'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2021',
      icon: '🍃',
      color: 'purple'
    }
  ];

  const courses = [
    'Advanced Algorithms & Data Structures',
    'Machine Learning & AI',
    'Distributed Systems',
    'Software Architecture',
    'Database Systems',
    'Computer Networks',
    'Web Development',
    'Mobile App Development'
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
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-blue">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gradient-purple mb-8">Academic Background</h3>
            
            {education.map((edu, index) => {
              const colorClasses = getColorClasses(edu.color);
              
              return (
                <div
                  key={index}
                  className={`bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} card-hover relative`}
                >
                  {/* Degree Icon */}
                  <div className={`absolute -top-4 -left-4 w-8 h-8 ${colorClasses.dot} rounded-full flex items-center justify-center`}>
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-dark-100 mb-2">{edu.degree}</h4>
                    <h5 className={`text-lg font-semibold ${colorClasses.text} mb-3`}>
                      {edu.school}
                    </h5>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-200 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h6 className="font-semibold text-dark-100 mb-3">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-dark-200">
                          <div className={`w-1.5 h-1.5 ${colorClasses.dot} rounded-full mt-2 flex-shrink-0`}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications & Courses */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gradient-pink mb-8">Certifications</h3>
              <div className="grid gap-4">
                {certifications.map((cert, index) => {
                  const colorClasses = getColorClasses(cert.color);
                  
                  return (
                    <div
                      key={index}
                      className={`bg-dark-800/30 backdrop-blur-sm rounded-xl p-6 border ${colorClasses.border} card-hover`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center text-2xl border ${colorClasses.border}`}>
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-dark-100 mb-1">{cert.name}</h4>
                          <p className="text-dark-300 text-sm mb-1">{cert.issuer}</p>
                          <p className={`text-xs ${colorClasses.text}`}>{cert.date}</p>
                        </div>
                        <Award className={`w-6 h-6 ${colorClasses.text}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Relevant Courses */}
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-bold text-gradient-blue mb-6 flex items-center gap-2">
                <Book className="w-6 h-6" />
                Relevant Coursework
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-sm text-blue-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Philosophy */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-gradient-purple mb-4">Learning Philosophy</h3>
              <p className="text-dark-200 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My education provided a strong foundation, but I'm always exploring new frameworks, 
                tools, and methodologies to enhance my skills and deliver better solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
        <svg className="absolute top-20 right-10 w-24 h-24 opacity-10 hidden lg:block" viewBox="0 0 100 100">
          <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <path d="M40,40 L60,40 L60,60 L40,60 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-pink-400" />
        </svg>
      </div>
    </section>
  );
};

export default EducationSection;