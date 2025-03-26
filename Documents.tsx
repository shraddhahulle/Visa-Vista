
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DocumentChecker from '@/components/documents/DocumentChecker';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, AlertTriangle, CheckCircle, Download } from 'lucide-react';

const Documents = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">Document Checklist Generator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Generate a comprehensive checklist of all documents required for your UK visa application.
              Track your progress as you gather the necessary paperwork.
            </p>
          </div>
          
          <DocumentChecker />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-coral-500 mr-2" />
                Important Document Guidelines
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Document translation</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Any document not in English or Welsh must be accompanied by a certified translation.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Original documents</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Always provide original documents unless specifically advised that copies are acceptable.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Document formatting</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Financial documents should cover the specified period (usually 28 or 90 consecutive days).
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Additional evidence</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Be prepared to provide additional documents if requested during the application process.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/visa-types"
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-medium mb-2 flex items-center">
                  <FileText className="w-5 h-5 text-teal-500 mr-2" />
                  Explore Visa Types
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  View comprehensive information about different UK visa categories.
                </p>
                <span className="text-teal-600 text-sm flex items-center">
                  View Visa Types
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link
                to="/eligibility"
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-medium mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                  Check Your Eligibility
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Not sure which visa to apply for? Use our eligibility checker.
                </p>
                <span className="text-teal-600 text-sm flex items-center">
                  Start Eligibility Check
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documents;
