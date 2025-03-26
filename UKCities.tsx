
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ukCities } from '@/lib/uk-cities';
import { Link } from 'react-router-dom';
import { Building, Globe, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BackButton } from '@/components/ui/back-button';

const UKCitiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">UK Visa Offices</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find visa application centers across the UK with detailed location information and available services.
            </p>
          </div>
          
          {/* UK Visa Offices Section */}
          <div className="mb-16">
            {ukCities.map((city) => (
              <div key={city.id} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-teal-500 mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {city.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.visaOffices.map((office, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="p-6">
                        <h3 className="font-medium text-lg mb-3">{office.name}</h3>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{office.address}</span>
                          </div>
                          
                          <div className="flex items-start">
                            <Phone className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{office.phone}</span>
                          </div>
                          
                          <div className="flex items-start">
                            <Clock className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{office.hours}</span>
                          </div>
                          
                          <div className="flex items-start">
                            <Globe className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <a 
                              href={office.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-teal-600 hover:underline text-sm flex items-center"
                            >
                              Official Website <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg mb-4">
                          <h4 className="font-medium text-sm mb-2">Available Services:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {office.services.map((service, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-center">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 flex-shrink-0"></span>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className={`text-xs px-2 py-1 rounded-full ${office.appointmentRequired ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>
                            {office.appointmentRequired ? 'Appointment required' : 'Walk-in available'}
                          </span>
                          
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal-600 hover:underline flex items-center"
                          >
                            View on Map <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <BackButton />
      <Footer />
    </div>
  );
};

export default UKCitiesPage;
