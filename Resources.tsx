
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResourceLinks from '@/components/resources/ResourceLinks';
import { faqData } from '@/lib/visa-data';
import { Search, Plus, Minus, Phone, BookOpen, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };
  
  const filteredFaqs = searchTerm
    ? faqData.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqData;

  const handleBookAppointment = () => {
    toast.success('Opening appointment booking system...', {
      duration: 3000,
    });
    window.open('https://www.gov.uk/book-an-appointment', '_blank');
  };

  const handleBrowseGuides = () => {
    toast.success('Opening visa guides library...', {
      duration: 3000,
    });
    window.open('https://www.gov.uk/browse/visas-immigration/student-visas', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">Resources & Support</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access helpful information, downloadable resources, and answers to frequently asked questions about UK visas.
            </p>
          </div>
          
          {/* Quick Access Links */}
          <ResourceLinks />
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <Minus className="flex-shrink-0 ml-2 text-teal-500" size={20} />
                      ) : (
                        <Plus className="flex-shrink-0 ml-2 text-gray-400" size={20} />
                      )}
                    </button>
                    
                    <div
                      className={`px-6 pb-4 text-gray-600 transition-all duration-300 ${
                        openFaqIndex === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No matching FAQs found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Support Options */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contact our support team or access additional resources for guidance on your UK visa journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-medium mb-2">Contact Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Speak with our visa specialists for personalized guidance.
                </p>
                <a
                  href="tel:+442012345678"
                  className="text-teal-600 font-medium text-sm"
                >
                  +44 20 1234 5678
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-medium mb-2">Comprehensive Guides</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Access in-depth articles and guides on UK immigration.
                </p>
                <button
                  onClick={handleBrowseGuides}
                  className="text-teal-600 font-medium text-sm"
                >
                  Browse Guides
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-medium mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Book an in-person consultation with our visa experts.
                </p>
                <button
                  onClick={handleBookAppointment}
                  className="text-teal-600 font-medium text-sm"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
