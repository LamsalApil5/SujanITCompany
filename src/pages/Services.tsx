import { useState } from "react";
import CloudSolution from "../images/CloudSolution.jpeg"
import CustomSoftwareDevelopment from "../images/CustomSoftwareDevelopment.png"
import MobileApp from "../images/MobileApp.jpg"
import webApplication from "../images/webApplication.png"


const services = [
  {
    title: "Custom Software Development",
    description:
      "We create bespoke software solutions tailored to your business requirements, empowering you to streamline operations and improve efficiency. Our software is scalable, secure, and optimized to fit your needs.",
    image: CustomSoftwareDevelopment, // Replace with actual image URL
    details: [
      "Comprehensive requirements gathering and analysis to understand business challenges",
      "Tailored design and architecture for optimal system performance",
      "Full-cycle development with an emphasis on testing and quality assurance",
      "Seamless deployment with ongoing maintenance and support for software longevity",
    ],
  },
  {
    title: "Web Application Design",
    description:
      "We design and develop intuitive, responsive web applications that provide seamless user experiences across all devices. Our web apps are optimized for performance, security, and scalability.",
    image: webApplication, // Replace with actual image URL
    details: [
      "User experience (UX) design focused on intuitive navigation and aesthetic appeal",
      "Responsive front-end development for compatibility with mobile, tablet, and desktop devices",
      "Robust back-end integration with secure, scalable databases and server-side technologies",
      "Performance optimization to ensure fast loading times and efficient operation",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Our team creates mobile applications for both iOS and Android platforms. We offer cross-platform development as well as native applications designed for enhanced functionality and integration with device features.",
    image: MobileApp,
    details: [
      "Expert development in both native and cross-platform frameworks, including React Native and Flutter",
      "UI/UX design that aligns with the platform-specific guidelines for an immersive experience",
      "Integration with device features such as camera, GPS, and push notifications",
      "App store submission and management for both iOS and Android platforms, ensuring a smooth launch",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "We offer scalable, secure, and cost-effective cloud solutions to optimize your business processes. From cloud migration to infrastructure management, we ensure your data is secure and always accessible.",
    image: CloudSolution, // Replace with actual image URL
    details: [
      "Cloud migration strategies to seamlessly move your data and services to the cloud",
      "Scalable infrastructure setup to accommodate future growth and demand fluctuations",
      "Advanced data security and compliance with industry standards to protect your information",
      "Continuous monitoring and optimization of cloud resources to ensure performance and cost-efficiency",
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
            Comprehensive IT solutions to enhance your business operations
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
                    openService === index ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
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
