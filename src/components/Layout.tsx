import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Change the title based on the current location (route)
    switch (location.pathname) {
      case "/":
        document.title = "Home";
        break;
      case "/services":
        document.title = "Services";
        break;
      case "/projects":
        document.title = "Projects";
        break;
      case "/contact":
        document.title = "Contact";
        break;
      default:
        document.title = "Budget Homes Private";
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img
              src={logo} // Use the imported logo here
              alt="Budget Homes Private Tech Logo"
              className="w-20 object-contain mr-2 bg-transparent" 
            />
          </Link>
          <ul className="flex space-x-4 text-lg">
            <li>
              <Link to="/" className="hover:underline text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-orange-600 text-white p-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Footer Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-2  gap-2 underline">Contact Us</h3>
            <p>Phone: (+977) 9845617890</p>
            <p>Email: contact@budgethomesprivate.com</p>
            <p>Address: M8RR+VWJ Budget Homes Pvt.Ltd, Kathmandu 44600, Np</p>
          </div>

          {/* Social Media Links (Optional) */}
          <div>
            <h3 className="text-lg font-semibold  mb-2 gap-4 underline">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* About Section (Optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline">About Us</h3>
            <p>
              We specialize in providing innovative tech solutions for the real
              estate industry, helping businesses thrive in a digital-first
              world.
            </p>
          </div>
        </div>
        <hr className="mt-6" />
        <div className="text-center mt-6">
          <p>&copy; 2023 Budget Homes Private. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
