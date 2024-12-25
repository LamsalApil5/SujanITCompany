import { Link } from "react-router-dom";
import image from "../images/Consulting.jpg";
const Home = () => {
  return (
    <div className="space-y-0">
      <section
        className="h-screen bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`, // Corrected background image syntax
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center flex flex-col items-center justify-center h-full">
          <div className="animate-slide-in">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Budget Homes IT Solutions
            </h1>
            <p className="text-xl mb-8">
              Empowering industries with cutting-edge technology and innovative
              IT solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-400">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Software Development",
                description:
                  "We specialize in creating customized software solutions that streamline your business operations and drive growth.",
              },
              {
                title: "Web Application Design",
                description:
                  "Our team designs intuitive, user-friendly web applications that provide an exceptional experience for your users.",
              },
              {
                title: "Mobile App Development",
                description:
                  "We create innovative and responsive mobile apps tailored to your business needs across various platforms.",
              },
              {
                title: "Cloud Solutions",
                description:
                  "Our cloud-based solutions offer scalability, flexibility, and security for your business data and applications.",
              },
              {
                title: "UI/UX Design",
                description:
                  "We focus on delivering engaging user interfaces and seamless user experiences that enhance the usability of your products.",
              },
              {
                title: "Enterprise Solutions",
                description:
                  "Our enterprise solutions help businesses optimize their resources, improve processes, and scale operations efficiently.",
              },
              {
                title: "Database Management",
                description:
                  "We provide comprehensive database management services to ensure your data is secure, organized, and accessible.",
              },
              {
                title: "AI & Machine Learning Solutions",
                description:
                  "Harness the power of AI and machine learning to drive intelligent automation and data-driven decision-making in your business.",
              },
              {
                title: "Blockchain Development",
                description:
                  "Our blockchain development services help create secure, transparent, and decentralized applications for your business.",
              },
              {
                title: "DevOps & Automation",
                description:
                  "We streamline your development and deployment processes with DevOps practices and automation tools to boost efficiency.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-red-500"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Experience",
                description:
                  "With years of industry experience, we have the knowledge and expertise to deliver exceptional results.",
              },
              {
                title: "Cutting-edge Technology",
                description:
                  "We use the latest technology and tools to build solutions that are both innovative and reliable.",
              },
              {
                title: "Cost-effective Solutions",
                description:
                  "Our solutions are designed to provide value for money, helping you get the most out of your investment.",
              },
              {
                title: "Dedicated Support",
                description:
                  "We offer dedicated support to ensure that all your needs are met promptly and effectively.",
              },
              {
                title: "Customer-centric Approach",
                description:
                  "Our focus is always on the customer, ensuring that we meet your specific requirements and exceed your expectations.",
              },
              {
                title: "Proven Track Record",
                description:
                  "We have a proven track record of successful projects and satisfied clients that vouch for our quality.",
              },
              {
                title: "Scalability & Flexibility",
                description:
                  "Our solutions are scalable and flexible, designed to grow with your business and adapt to changing needs.",
              },
              {
                title: "Innovative Solutions",
                description:
                  "We offer creative and innovative solutions that help you stay ahead of the competition and achieve your goals.",
              },
              {
                title: "Expert Team",
                description:
                  "Our team of experts is highly skilled, experienced, and committed to delivering the best possible results.",
              },
              {
                title: "Timely Delivery",
                description:
                  "We understand the importance of time, and we always deliver projects on schedule without compromising quality.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">
            Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Real Estate Agencies",
              "Property Management Firms",
              "Construction Companies",
              "Individual Homeowners",
              "Commercial Property Owners",
              "Architectural Firms",
              "Interior Designers",
              "Government Agencies",
              "Real Estate Developers",
              "Investment Firms",
              "Hospitality Industry",
              "Retail Chains",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-orange-400"
              >
                <h3 className="text-xl font-semibold text-orange-500">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
