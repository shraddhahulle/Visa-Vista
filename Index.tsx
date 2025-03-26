
import React from 'react';
import Hero from '@/components/home/Hero';
import FeatureCards from '@/components/home/FeatureCards';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, FileText, HelpCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main>
        <Hero />
        <FeatureCards />

        {/* Call to Action Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Ready to Start Your UK Journey?</h2>
              <p className="text-gray-600 mb-8">
                Get personalized visa recommendations in just a few minutes. Our intelligent eligibility checker will guide you through the process.
              </p>
              <Link 
                to="/eligibility"
                className="button-primary inline-flex items-center space-x-2 px-8 py-4"
              >
                <span>Check My Eligibility Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">Quick Access</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                to="/visa-types"
                className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="rounded-full bg-teal-50 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-colors">
                  <CheckCircle className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-medium mb-4">Visa Types</h3>
                <p className="text-gray-600 mb-4">
                  Explore detailed information about different UK visa categories and their requirements.
                </p>
                <span className="text-teal-600 font-medium inline-flex items-center">
                  View All Visa Types
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link
                to="/uk-cities"
                className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="rounded-full bg-teal-50 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-colors">
                  <MapPin className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-medium mb-4">UK Cities Guide</h3>
                <p className="text-gray-600 mb-4">
                  Find visa application centers and accommodation options in major UK cities.
                </p>
                <span className="text-teal-600 font-medium inline-flex items-center">
                  Explore Cities
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link
                to="/documents"
                className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="rounded-full bg-teal-50 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-colors">
                  <FileText className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-medium mb-4">Document Checklist</h3>
                <p className="text-gray-600 mb-4">
                  Generate a personalized checklist of documents required for your visa application.
                </p>
                <span className="text-teal-600 font-medium inline-flex items-center">
                  Get My Checklist
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about UK visas and the application process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-8">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">How long does a UK visa application typically take to process?</h3>
                <p className="text-gray-600">
                  Processing times vary by visa type and application volume. Standard visitor visas usually take 3 weeks, student visas 3 weeks, and work visas 3-8 weeks. Priority services are available for an additional fee.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">What is the Immigration Health Surcharge (IHS) and who needs to pay it?</h3>
                <p className="text-gray-600">
                  The Immigration Health Surcharge is a fee that gives visa holders access to the UK's National Health Service (NHS). Most applicants applying for a visa longer than 6 months must pay this surcharge as part of their application.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">Can I work in the UK on a student visa?</h3>
                <p className="text-gray-600">
                  Yes, but with restrictions. If you're studying at degree level or above at a higher education institution, you can work up to 20 hours per week during term time and full-time during official holiday periods.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/resources"
                className="inline-flex items-center font-medium text-teal-600 hover:text-teal-700"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
