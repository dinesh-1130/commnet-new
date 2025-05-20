import React, { useState, useEffect } from "react";

export default function OurProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  
  useEffect(() => {
    // If you have AOS, initialize it here
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
    }
  }, []);

  const projects = [
  {
    id: 1,
    image: "/assets/jewel.png",
    title: "Jewel Of Creek",
    subtitle: "ICT Infra",
    location: "Dubai, UAE",
    description: "A large-scale ICT infrastructure development featuring extensive cabling and surveillance systems tailored to a luxury waterfront development.",
    client: "GBM",
    scope: [
      "IT Structured Cabling - 13000 Points",
      "CCTV/Security System - 2500 Camera"
    ],
    value: "AED 15,17,820",
    duration: "3 Years"
  },
  {
    id: 2,
    image: "/assets/dewa.png",
    title: "CSOC Project",
    subtitle: "Cyber Security Operations Center",
    location: "Dubai, UAE",
    description: "A security-focused installation for DEWA integrating advanced racks, networking, and cyber security systems with full testing and commissioning.",
    client: "GBM",
    scope: [
      "DEWA Installation of CSOC Racks",
      "Network cabling for panel from CSOC Rack",
      "Installation of cyber security devices, Testing and commissioning"
    ],
    value: "AED 26,23,250",
    duration: "1 Year"
  },
  {
    id: 3,
    image: "/assets/atlantis.png",
    title: "Atlantis The Royal",
    subtitle: "Structured Cabling & GRMS",
    location: "Palm Jumeirah, Dubai",
    description: "An elite infrastructure implementation including GRMS and AV systems for one of the most luxurious landmarks in Dubai.",
    client: "GBM",
    scope: [
      "Structured Cabling",
      "AV-BGM system installation",
      "GRMS System Implemented - 820 Rooms"
    ],
    value: "AED 496,900",
    duration: "14 Months"
  },
  {
    id: 4,
    image: "/assets/occidental.png",
    title: "Occidental Hotel Al Jadaf",
    subtitle: "ELV & IT Infrastructure",
    location: "Al Jadaf, Dubai",
    description: "A comprehensive ELV and IT infrastructure implementation for a 5-star hotel including data, security, AV, and WiFi systems.",
    client: "Al Seeb Group",
    scope: [
      "Data Centre, Structured Cabling - 2500 Points",
      "Security System: CCTV - 315 / ACS Doors - 15",
      "AV-PA system/BGM, IPTV/SMATV - 800 Rooms",
      "Network-Switching and Routing",
      "WiFi and Telephony"
    ],
    value: "AED 40,07,700",
    duration: "21 Months"
  }
];

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-sky-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}
        />
        
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Delivering excellence in engineering and construction with innovative solutions
            and uncompromising quality across the UAE.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setActiveProject(project)}
              data-aos="fade-up"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sky-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.subtitle}
                </p>
                <div className="w-0 h-1 bg-sky-400 mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 bg-sky-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sky-100 mb-4">{project.subtitle}</p>
                  <span className="inline-block px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-sky-800 transition-colors duration-300">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto" data-aos="fade-up">
            <div className="relative">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-sky-500 mr-4"></div>
                <h3 className="text-lg font-semibold text-sky-600">{activeProject.subtitle}</h3>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeProject.title}</h2>
              
              <p className="text-gray-600 mb-6">{activeProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800">{activeProject.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-semibold text-gray-800">{activeProject.client}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Project Value</p>
                      <p className="font-semibold text-gray-800">{activeProject.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">{activeProject.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-800 mb-3">Scope of Work</p>
                <ul className="space-y-2">
                  {activeProject.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={closeProjectDetails}
                  className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-300"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}