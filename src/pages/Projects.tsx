import { useState } from 'react';

const projects = [
  {
    title: "Property Management System",
    description: "A comprehensive web-based solution for managing properties, tenants, and maintenance requests.",
    fullDescription: "This all-encompassing Property Management System enables property managers to efficiently oversee multiple properties, manage tenant information, track maintenance requests, and automate rent collection. The platform provides tools for managing leases, generating financial reports, tracking payments, and streamlining communication between tenants and property owners. With features like a tenant portal, automated reminders, and a detailed maintenance tracking system, this platform ensures that property managers stay on top of all property-related tasks, while improving tenant satisfaction and operational efficiency.",
    details: [
      "Multi-property management: Manage a diverse portfolio of residential and commercial properties from a single dashboard.",
      "Tenant portal for maintenance requests: Allow tenants to easily submit maintenance requests, track the status, and communicate with property managers.",
      "Automated rent collection: Automatically collect rent payments from tenants and track overdue payments with integrated reminders.",
      "Financial reporting and analytics: Generate financial reports to track revenue, expenses, and analyze the profitability of each property."
    ]
  },
  {
    title: "Real Estate Marketplace App",
    description: "A mobile application connecting buyers, sellers, and real estate agents for seamless property transactions.",
    fullDescription: "The Real Estate Marketplace App is a mobile platform that facilitates smooth property transactions by connecting buyers, sellers, and real estate agents. The app offers features such as property listing, property search with advanced filters, in-app messaging between buyers and agents, virtual tour integration, and secure document sharing. Buyers can browse a range of properties based on location, price, and type, while sellers can list their properties with detailed descriptions, photos, and pricing. The app ensures secure transactions by allowing for easy document sharing and signing, and also provides a seamless communication channel between all parties involved.",
    details: [
      "Property listing and search functionality: Sellers can list properties with photos, descriptions, and price, while buyers can search for properties with advanced filters.",
      "In-app messaging system: Allows real-time communication between buyers and sellers, or buyers and agents, ensuring that questions are quickly answered.",
      "Virtual tour integration: Buyers can take virtual tours of properties, allowing them to experience the property remotely before scheduling an in-person visit.",
      "Secure document sharing: Facilitates the secure exchange of documents such as contracts, agreements, and property deeds between parties."
    ]
  },
  {
    title: "Smart Home Integration Platform",
    description: "A cloud-based platform for integrating and managing smart home devices in residential properties.",
    fullDescription: "The Smart Home Integration Platform enables homeowners to connect, manage, and monitor smart home devices from a single dashboard. Whether it's controlling lights, thermostats, security cameras, or appliances, this platform provides seamless integration with a variety of IoT devices. It also offers energy consumption monitoring to help homeowners track their usage, optimize efficiency, and reduce utility costs. Predictive maintenance alerts notify users of potential issues before they arise, ensuring the smooth operation of all connected devices. The platform can be accessed remotely, allowing homeowners to control their systems from anywhere, whether at home or on the go.",
    details: [
      "IoT device management: Integrates and controls a wide range of smart home devices, including lights, locks, thermostats, security cameras, and more.",
      "Energy consumption monitoring: Track and analyze energy usage to help reduce electricity costs and improve energy efficiency.",
      "Remote control of home systems: Control your home systems, such as lights and temperature, from any device, whether you're at home or on the move.",
      "Predictive maintenance alerts: Receive notifications when devices require maintenance or when potential issues are detected, ensuring your home is always running smoothly."
    ]
  },
  {
    title: "Virtual Property Tour Software",
    description: "An immersive 3D virtual tour solution for showcasing properties to potential buyers or renters.",
    fullDescription: "This software enables real estate agents and property managers to offer virtual 3D tours of properties, allowing potential buyers and renters to explore homes or commercial spaces remotely. The 360-degree visualizations allow users to navigate through rooms, view detailed features, and interact with floor plans. Integrated with VR technology, this software provides a fully immersive experience for those using VR headsets, creating a true-to-life property viewing experience. The platform also integrates with property listing websites, making it easy to share virtual tours directly with interested buyers or renters, saving time and enhancing the property viewing process.",
    details: [
      "360-degree property visualization: Walkthrough properties in 3D, exploring every room and angle for a complete virtual tour experience.",
      "Interactive floor plans: View and interact with floor plans, enabling potential buyers or renters to understand the property's layout and flow.",
      "VR compatibility: Experience properties in full immersive VR, offering a real-time, interactive exploration experience.",
      "Integration with property listing platforms: Share virtual tours directly on property listing websites, increasing property exposure and reducing the need for in-person viewings."
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
                  <p className="text-gray-700 mb-4">{project.fullDescription}</p>
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
