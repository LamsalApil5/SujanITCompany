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

      <section className=" bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-400">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Custom Software Development",
              "Web Application Design",
              "Mobile App Development",
              "Cloud Solutions",
              "UI/UX Design",
              "Enterprise Solutions",
              "Database Management",
              "AI & Machine Learning Solutions",
              "Blockchain Development",
              "DevOps & Automation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-red-500"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  {item}
                </h3>
                <p className="text-gray-600">
                  Tailored solutions to meet your specific needs in the real
                  estate industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen bg-orange-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Industry Experience",
              "Cutting-edge Technology",
              "Cost-effective Solutions",
              "Dedicated Support",
              "Customer-centric Approach",
              "Proven Track Record",
              "Scalability & Flexibility",
              "Innovative Solutions",
              "Expert Team",
              "Timely Delivery",
            ].map((item, index) => (
              <div key={index} className="border border-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item}
                </h3>
                <p>We excel in providing top-notch services to our clients.</p>
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
