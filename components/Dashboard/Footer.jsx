import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            Discover seamless online banking with Ever Green Trustco. Manage
            your finances effortlessly, access a range of business and corporate
            banking services, and explore investment opportunities in commercial
            real estate assets. Experience secure, convenient, and tailored
            financial solutions with Ever Green Trustco online bank.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/user-dashboard">User Dashboard</a>
            </li>
            <li>
              <a href="/our-branches">Our Branches</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>{" "}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/user-dashboard">User Dashboard</a>
            </li>
            <li>
              <a href="/our-branches">Our Branches</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>{" "}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/user-dashboard">User Dashboard</a>
            </li>
            <li>
              <a href="/our-branches">Our Branches</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Add other sections similarly */}
        <div className="flex space-x-4">
          <a href="#" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Ever Green Trustco. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
