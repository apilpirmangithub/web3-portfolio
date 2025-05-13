import React from 'react';
import { User, Twitter, Linkedin, Mail, ShieldCheck, Brain, Globe, Languages } from 'lucide-react';

const Portfolio = () => {
  const socialLinks = [
    { 
      icon: <Twitter className="w-6 h-6 text-blue-400" />, 
      name: 'Twitter/X', 
      link: 'https://x.com/apilpirman' 
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-600" />, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/pirman-herlambang-54737b187/' 
    }
  ];

  const roles = [
    {
      name: 'Supra Spartans (SupraLabs)',
      role: 'Community Growth & Thought Leader',
      activities: [
        'Educating and raising awareness about SupraOracles',
        'Regular contributions via Twitter and Discord'
      ],
      link: 'https://hub.supra.com/supraspartans',
      proofOfWork: [
        'https://x.com/apilpirman/status/1847570734182519087',
        'https://drive.google.com/drive/folders/1-3oNnC5t8d6bKRuNAyWhX8D9LLCKW_H0?usp=drive_link'
      ]
    },
    {
      name: 'Morph L2 Creator Program',
      role: 'Ecosystem Evangelist & Content Creator',
      activities: [
        'Creating educational and creative content about Morph',
        'Promotion via social media (Twitter)'
      ],
      link: 'https://www.morphl2.io/creators',
      proofOfWork: [
        'https://x.com/apilpirman/status/1920900836605260202',
        'https://drive.google.com/drive/folders/1bzOFGyF7iDbjpECZ_-KMq1Auw6EjzHg_?usp=sharing'
      ]
    }
  ];

  const skillSections = [
    {
      title: 'Soft Skills',
      icon: <Brain className="w-6 h-6 text-green-500" />,
      skills: [
        'Community Engagement',
        'Research & Trendspotting',
        'Leadership & Teamwork'
      ]
    },
    {
      title: 'Technical/Digital Skills',
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      skills: [
        'AI Prompting (ChatGPT, Midjourney, etc.)',
        'Content Editing (Vegas Pro, Photoshop)',
        'Basic Solidity, On-chain Analysis'
      ]
    },
    {
      title: 'Language Skills',
      icon: <Languages className="w-6 h-6 text-purple-500" />,
      skills: [
        'Bahasa Indonesia: Fluent (speaking & writing)',
        'English: Reading & writing proficiency only'
      ]
    }
  ];

  return (
  <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
    <div className="bg-white shadow-lg rounded-lg p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <img 
            src="/images/apil.jpg" 
            alt="Pirman Herlambang" 
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" 
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Pirman Herlambang</h1>
        <p className="text-xl text-gray-600">Web3 Community Builder & Content Creator</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=apilpirman@gmail.com&su=Kolaborasi Web3" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </div>
        </header>

        {/* Ongoing Roles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <ShieldCheck className="w-7 h-7 mr-2 text-orange-500" />
            Ongoing Roles & Programs
          </h2>
          {roles.map((role, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">{role.name}</h3>
              <p className="text-gray-600 mb-2">{role.role}</p>
              
              <div className="mb-2">
                <strong>Activities:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {role.activities.map((activity, actIndex) => (
                    <li key={actIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-2">
                <strong>Link:</strong>{' '}
                <a 
                  href={role.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {role.link}
                </a>
              </div>
              
              <div>
                <strong>Proof of Work:</strong>
                <div className="flex space-x-2 mt-1">
                  {role.proofOfWork.map((proof, proofIndex) => (
                    <a 
                      key={proofIndex}
                      href={proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Link {proofIndex + 1}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skillset */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Brain className="w-7 h-7 mr-2 text-green-500" />
            Skillset
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {skillSections.map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center mb-3">
                  {section.icon}
                  <h3 className="text-lg font-semibold ml-2">{section.title}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  {section.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration */}
        <section className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Collaboration</h2>
          <p className="text-gray-700 mb-4">
            Open for content collaboration, partnerships, and Web3 projects.
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=apilpirman@gmail.com&su=Kolaborasi Web3" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
