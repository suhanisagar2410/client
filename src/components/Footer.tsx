import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/95 dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-400">
              <li>Email: your.email@example.com</li>
              <li>Location: Your City, Country</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-700 dark:text-gray-400">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 