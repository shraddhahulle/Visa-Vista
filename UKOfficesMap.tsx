
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Navigation, Car, Bus, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const UKOfficesMap = () => {
  const [selectedOffice, setSelectedOffice] = useState<{name: string, address: string, city: string} | null>(null);
  const [transportMode, setTransportMode] = useState<'driving' | 'transit' | 'walking'>('driving');
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Get office data from localStorage
    const officeData = localStorage.getItem('selectedOffice');
    if (officeData) {
      setSelectedOffice(JSON.parse(officeData));
    }
  }, []);
  
  const getMapUrl = () => {
    if (!selectedOffice) {
      return `https://www.google.com/maps/embed/v1/search?q=UK+Visa+Application+Centre+London&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    }
    
    // Map URL with directions if address exists
    const destination = encodeURIComponent(selectedOffice.address + ', ' + selectedOffice.city + ', UK');
    return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&destination=${destination}&mode=${transportMode}`;
  };
  
  const handleTransportModeChange = (mode: 'driving' | 'transit' | 'walking') => {
    setTransportMode(mode);
    
    const modeName = mode === 'driving' ? 'car' : mode === 'transit' ? 'public transport' : 'walking';
    toast.info(`Showing ${modeName} directions to ${selectedOffice?.name}`, {
      duration: 2000,
    });
  };
  
  const handleMapLoad = () => {
    setMapLoaded(true);
    toast.success("Live map loaded successfully", { duration: 2000 });
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/uk-cities" className="inline-flex items-center text-teal-600 hover:text-teal-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Visa Offices
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">
              {selectedOffice ? selectedOffice.name : 'UK Visa Offices Map'}
            </h1>
            {selectedOffice && (
              <p className="text-gray-600">{selectedOffice.address}, {selectedOffice.city}</p>
            )}
          </div>
          
          <div className="bg-black rounded-xl p-4 shadow-lg mb-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-500 mx-auto mb-2"></div>
                    <p className="text-sm text-white">Loading live map...</p>
                  </div>
                </div>
              )}
              
              <iframe 
                src={getMapUrl()}
                className="w-full h-full border-0"
                title="Live Visa Office Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                onLoad={handleMapLoad}
              />
              
              {mapLoaded && (
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-md z-10">
                  <span className="text-xs text-teal-600 flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-1 animate-pulse"></span>
                    Live Map
                  </span>
                </div>
              )}
              
              <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-lg shadow-md z-10">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleTransportModeChange('driving')}
                    className={`flex items-center justify-center p-2 rounded ${
                      transportMode === 'driving' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    title="Driving directions"
                  >
                    <Car className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleTransportModeChange('transit')}
                    className={`flex items-center justify-center p-2 rounded ${
                      transportMode === 'transit' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    title="Public transport directions"
                  >
                    <Bus className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleTransportModeChange('walking')}
                    className={`flex items-center justify-center p-2 rounded ${
                      transportMode === 'walking' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    title="Walking directions"
                  >
                    <Users className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">Travel Information</h2>
            <p className="mb-4">
              {selectedOffice ? 
                `Use the interactive map above to navigate to ${selectedOffice.name}. You can toggle between different transportation modes to find the best route from your location.` :
                'Use the interactive map above to explore UK visa offices in London. Select a transportation mode to see the best routes.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Car className="w-5 h-5 text-teal-500 mr-2" />
                  <h3 className="font-medium">By Car</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Parking available nearby, but consider congestion charges in central London.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Bus className="w-5 h-5 text-teal-500 mr-2" />
                  <h3 className="font-medium">Public Transport</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Multiple bus and underground connections available to all visa offices.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-teal-500 mr-2" />
                  <h3 className="font-medium">Walking</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Most offices are within walking distance from major public transport hubs.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> Remember to book an appointment before visiting any visa application center. Most centers do not accept walk-in applicants.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UKOfficesMap;
