import { useState } from 'react';

const projects = [
  {
    title: "Property Management System",
    description: "A comprehensive web-based solution for managing properties, tenants, and maintenance requests.",
    details: [
      "Multi-property management",
      "Tenant portal for maintenance requests",
      "Automated rent collection",
      "Financial reporting and analytics"
    ]
  },
  {
    title: "Real Estate Marketplace App",
    description: "A mobile application connecting buyers, sellers, and real estate agents for seamless property transactions.",
    details: [
      "Property listing and search functionality",
      "In-app messaging system",
      "Virtual tour integration",
      "Secure document sharing"
    ]
  },
  {
    title: "Smart Home Integration Platform",
    description: "A cloud-based platform for integrating and managing smart home devices in residential properties.",
    details: [
      "IoT device management",
      "Energy consumption monitoring",
      "Remote control of home systems",
      "Predictive maintenance alerts"
    ]
  },
  {
    title: "Virtual Property Tour Software",
    description: "An immersive 3D virtual tour solution for showcasing properties to potential buyers or renters.",
    details: [
      "360-degree property visualization",
      "Interactive floor plans",
      "VR compatibility",
      "Integration with property listing platforms"
    ]
  }
];

const Projects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div className="space-y-0">
      <section className="w-screen bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">Innovative solutions transforming the real estate industry</p>
        </div>
      </section>

      <section className="w-screen bg-white py-20">
        <div className="container mx-auto">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <button
                  className="w-full p-6 text-left bg-orange-500 text-white font-semibold flex justify-between items-center hover:bg-orange-600 transition duration-300"
                  onClick={() => toggleProject(index)}
                >
                  <span className="text-xl">{project.title}</span>
                  <span className="text-2xl">{openProject === index ? '−' : '+'}</span>
                </button>
                <div className={`p-6 bg-white transition-all duration-300 ease-in-out ${openProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-red-500">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
