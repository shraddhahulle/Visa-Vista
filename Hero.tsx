
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="London Bridge Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="appear">
            <div className="inline-block bg-teal-50 text-teal-600 text-xs font-medium px-3 py-1 rounded-full mb-6">
              UK Visa Eligibility Navigator
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Simplify Your UK Visa Journey
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Navigate the UK immigration system with confidence. Get personalized visa recommendations, 
              document checklists, and expert guidance all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link to="/eligibility" className="button-primary flex items-center justify-center space-x-2">
                <span>Check My Eligibility</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/visa-types" className="button-outline flex items-center justify-center space-x-2">
                <span>Explore Visa Types</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center">
                <Check size={18} className="text-teal-600 mr-2" />
                <span className="text-sm text-gray-600">Personalized Recommendations</span>
              </div>
              <div className="flex items-center">
                <Check size={18} className="text-teal-600 mr-2" />
                <span className="text-sm text-gray-600">Document Checklists</span>
              </div>
              <div className="flex items-center">
                <Check size={18} className="text-teal-600 mr-2" />
                <span className="text-sm text-gray-600">Cost Estimation</span>
              </div>
            </div>
          </div>
          
          <div className="relative appear appear-delay-2">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-50 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-coral-50 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517394834181-95ed159986c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80" 
                  alt="London Bridge with UK Flag" 
                  className="w-full h-80 object-cover"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium mb-2">Discover UK Opportunities</h3>
                    <p className="text-white/80 text-sm">Study, work, or visit - find your perfect visa path</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-teal-600">
                  Trusted Guidance
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-lg shadow-lg z-20 max-w-xs transform rotate-2 animate-float">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Eligible for Student Visa</h4>
                    <p className="text-xs text-gray-500 mt-1">Processing time: ~3 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
