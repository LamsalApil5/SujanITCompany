import { useState } from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We create tailored software solutions to meet your specific business needs in the real estate industry.",
    details: [
      "Requirements analysis and planning",
      "Design and architecture",
      "Development and testing",
      "Deployment and maintenance",
    ],
  },
  {
    title: "Web Application Design",
    description:
      "Our team designs and develops responsive web applications for property management and real estate transactions.",
    details: [
      "User experience (UX) design",
      "Responsive front-end development",
      "Back-end integration",
      "Performance optimization",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We build mobile apps for both iOS and Android platforms to enhance your real estate business operations.",
    details: [
      "Native and cross-platform development",
      "UI/UX design for mobile",
      "Integration with device features",
      "App store submission and management",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide cloud-based services for secure data storage, management, and accessibility in the real estate sector.",
    details: [
      "Cloud migration strategies",
      "Scalable infrastructure setup",
      "Data security and compliance",
      "Continuous monitoring and optimization",
    ],
  },
];

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="space-y-0">
      <section className="w-screen bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive IT solutions for the real estate industry
          </p>
        </div>
      </section>

      <section className="w-screen bg-white py-20">
        <div className="container mx-auto">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <button
                  className="w-full p-6 text-left bg-orange-500 text-white font-semibold flex justify-between items-center hover:bg-orange-600 transition duration-300"
                  onClick={() => toggleService(index)}
                >
                  <span className="text-xl">{service.title}</span>
                  <span className="text-2xl">
                    {openService === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`p-6 bg-white transition-all duration-300 ease-in-out ${
                    openService === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-800 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-orange-500">
                    {service.details.map((detail, detailIndex) => (
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

export default Services;
