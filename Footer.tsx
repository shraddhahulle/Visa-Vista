
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, FileText, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/lovable-uploads/f0692b1b-0c64-4e96-83bb-62dcfa1ce99e.png"
              alt="VisaVista Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
              Your trusted companion for navigating UK visa requirements and eligibility.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-black mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/eligibility"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors"
                >
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link
                  to="/visa-types"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors"
                >
                  Visa Types
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors"
                >
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link
                  to="/uk-cities"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors"
                >
                  UK Cities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-black mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors flex items-center space-x-2"
                >
                  <FileText size={16} />
                  <span>Visa Application Guide</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Document Templates</span>
                </a>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors flex items-center space-x-2"
                >
                  <FileText size={16} />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/browse/visas-immigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-500 text-sm transition-colors flex items-center space-x-2"
                >
                  <FileText size={16} />
                  <span>Official UK Gov Resources</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-black mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Visa Street, London, UK
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">support@visavista.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} VisaVista. All rights reserved. 
            <span className="block sm:inline sm:ml-2">
              This tool provides guidance only and is not a substitute for professional immigration advice.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
