
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Visa Types', path: '/visa-types' },
    { name: 'Documents', path: '/documents' },
    { name: 'UK Cities', path: '/uk-cities' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/f0692b1b-0c64-4e96-83bb-62dcfa1ce99e.png"
              alt="VisaVista Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/profile"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300"
            >
              <User size={18} />
              <span>Profile</span>
            </Link>
            <Link
              to="/eligibility"
              className="button-primary text-sm py-2 px-4"
            >
              Check Eligibility
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-teal-600'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link
                to="/profile"
                className="flex items-center space-x-1 text-sm font-medium text-gray-600"
              >
                <User size={18} />
                <span>Profile</span>
              </Link>
              <Link to="/eligibility" className="button-primary text-sm py-2 text-center">
                Check Eligibility
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
