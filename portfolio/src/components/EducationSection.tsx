import React from 'react';
import { GraduationCap, Award, Book, Calendar, MapPin, Star } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      school: 'National Institute of Technology, Surat',
      location: 'Surat, India',
      period: '2019 - 2023',
      gpa: '8.86/10',
      description: 'Built a strong foundation in algorithms, systems, and software engineering through coursework, projects, and hands-on problem-solving.',
      achievements: [
        'Graduated with a CGPA of 8.86/10 from a premier engineering institute',
        'Head of Cybersecurity in MLSA club',
        'Active participant in technical hackathons and coding competitions',
        'Developed multiple full-stack applications as part of coursework and personal projects'
      ],
      color: 'purple'
    }
];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect-Associate',
      link: 'https://www.credly.com/earner/earned/badge/72b0bcb8-eaf0-4d3f-b9ec-110e35372b28',
      issuer: 'Amazon Web Services',
      date: '5/10/2025',
      color: 'purple'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      link: 'https://www.credly.com/earner/earned/badge/72b0bcb8-eaf0-4d3f-b9ec-110e35372b28',
      issuer: 'Amazon Web Services',
      date: '10/26/2024',
      color: 'blue'
    }
  ];

  const courses = [
    'C, C++, Java, Python',
    'Advanced Data Structures & Algorithms',
    'Operating Systems',
    'Computer Architecture',
    'Database Management Systems',
    'Digital Design & Computer Organization',
    'Mathematics for Computer Science',
    'Microcontrollers',
    'Cybersecurity & Ethical Hacking',
    'Cryptography',
    'Data Science'
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
                  
                        <div className="flex-1">
                          <h4 className="font-semibold text-dark-100 mb-1">{cert.name}</h4>
                          <p className="text-dark-300 text-sm mb-1">{cert.issuer}</p>
                          <p className={`text-xs ${colorClasses.text}`}>{cert.date}</p>
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`text-xs ${colorClasses.text} underline hover:opacity-80 transition`}>
                                Credly Link</a>
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