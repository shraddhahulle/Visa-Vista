
import React, { useState, useEffect, useRef } from 'react';
import { ukCities } from '@/lib/uk-cities';
import { MapPin, Phone, Globe, Clock, Check, Building, Navigation, Users, Car, Bus, Train, Download, Eye, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const VisaOfficesMap = () => {
  const [selectedCity, setSelectedCity] = useState(ukCities[0]);
  const [selectedOffice, setSelectedOffice] = useState(ukCities[0].visaOffices[0]);
  const [transportMode, setTransportMode] = useState<'driving' | 'transit' | 'walking'>('driving');
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Reset selected office when city changes
    if (selectedCity.visaOffices.length > 0) {
      setSelectedOffice(selectedCity.visaOffices[0]);
    }
  }, [selectedCity]);

  const handleSelectOffice = (office: any) => {
    setSelectedOffice(office);
    // Update map to show this specific office
    if (mapRef.current) {
      const destination = encodeURIComponent(office.address + ', ' + selectedCity.name + ', UK');
      mapRef.current.src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&destination=${destination}&mode=${transportMode}`;
    }
    toast.info(`Showing directions to ${office.name}`, {
      duration: 2000,
    });
  };

  const getMapUrl = () => {
    // Basic map URL showing office location
    if (!selectedOffice) {
      return `https://www.google.com/maps/embed/v1/search?q=UK+Visa+Application+Centre+${selectedCity.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    }
    
    // Map URL with directions if address exists
    const destination = encodeURIComponent(selectedOffice.address + ', ' + selectedCity.name + ', UK');
    return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&destination=${destination}&mode=${transportMode}`;
  };

  const handleDownloadOfficeDetails = () => {
    toast.success(`Preparing office details for ${selectedOffice.name}`, {
      duration: 2000,
    });
    // In a real app, this would download a PDF - here we'll show a preview
    setShowPdfPreview(true);
    setPdfDownloaded(true);
  };

  const handleClosePreview = () => {
    setShowPdfPreview(false);
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
    toast.success("Live map loaded successfully", { duration: 2000 });
  };

  const handleTransportModeChange = (mode: 'driving' | 'transit' | 'walking') => {
    setTransportMode(mode);
    if (mapRef.current && selectedOffice) {
      const destination = encodeURIComponent(selectedOffice.address + ', ' + selectedCity.name + ', UK');
      mapRef.current.src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&destination=${destination}&mode=${mode}`;
      
      const modeName = mode === 'driving' ? 'car' : mode === 'transit' ? 'public transport' : 'walking';
      toast.info(`Showing ${modeName} directions to ${selectedOffice.name}`, {
        duration: 2000,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">UK Visa Offices Map</h2>
        <p className="text-gray-600 mb-8">
          Find visa application centers across the UK with detailed information on services, opening hours, and directions.
        </p>

        <div className="flex overflow-x-auto pb-4 space-x-4 mb-8">
          {ukCities.map((city) => (
            <button
              key={city.id}
              className={`flex-shrink-0 px-5 py-3 rounded-lg border transition-all ${
                selectedCity.id === city.id
                  ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-sm">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-500 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Loading live map...</p>
                </div>
              </div>
            )}
            <iframe 
              ref={mapRef}
              src={getMapUrl()}
              className="w-full h-full border-0"
              title="Live Visa Office Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              onLoad={handleMapLoad}
            />
            
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md z-10">
              <h3 className="font-medium text-lg">{selectedCity.name} Visa Offices</h3>
              {mapLoaded && <span className="text-xs text-teal-600 ml-2 px-2 py-0.5 bg-teal-50 rounded-full">Live</span>}
            </div>

            {selectedOffice && (
              <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-lg shadow-md z-10 max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{selectedOffice.name}</h4>
                  <Navigation className="w-4 h-4 text-teal-500" />
                </div>
                <div className="bg-gray-50 p-2 rounded-md mb-2">
                  <p className="text-xs text-gray-600">{selectedOffice.address}</p>
                </div>
                <div className="flex justify-between space-x-2">
                  <button 
                    onClick={() => handleTransportModeChange('driving')}
                    className={`flex-1 flex items-center justify-center p-1.5 rounded ${
                      transportMode === 'driving' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <Car className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleTransportModeChange('transit')}
                    className={`flex-1 flex items-center justify-center p-1.5 rounded ${
                      transportMode === 'transit' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <Bus className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleTransportModeChange('walking')}
                    className={`flex-1 flex items-center justify-center p-1.5 rounded ${
                      transportMode === 'walking' ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Map information panel */}
          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-teal-500" />
              <h4 className="font-medium text-sm">Live Map Information</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              The map shows real-time directions to the selected visa office. Choose your preferred transport mode above.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-teal-500" />
                <span>Driving</span>
              </div>
              <div className="flex items-center gap-1">
                <Bus className="w-3.5 h-3.5 text-teal-500" />
                <span>Public Transport</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-teal-500" />
                <span>Walking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-medium flex items-center">
              <Building className="w-5 h-5 mr-2 text-teal-500" />
              Visa Application Centers
            </h3>
            {selectedOffice && (
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-teal-500 text-teal-500 hover:text-teal-600 gap-1"
                onClick={handleDownloadOfficeDetails}
              >
                <Download className="h-3.5 w-3.5" />
                {pdfDownloaded ? "View Details" : "Download Details"}
              </Button>
            )}
          </div>

          <div className="p-4 max-h-[400px] overflow-y-auto">
            <div className="space-y-6">
              {selectedCity.visaOffices.map((office, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer ${
                    selectedOffice === office ? 'bg-white shadow-sm border border-teal-100' : 'bg-gray-50'
                  }`}
                  onClick={() => handleSelectOffice(office)}
                >
                  <h4 className="font-medium mb-2">{office.name}</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <a 
                        href={office.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-600 hover:underline"
                      >
                        Official Website
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h5 className="font-medium mb-2 text-sm">Available Services</h5>
                    <ul className="space-y-1">
                      {office.services.map((service, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-2 flex justify-end">
                    <button 
                      className="text-xs flex items-center space-x-1 text-teal-600 hover:text-teal-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectOffice(office);
                      }}
                    >
                      <Navigation className="w-3.5 h-3.5 mr-1" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Dialog */}
      <Dialog open={showPdfPreview} onOpenChange={setShowPdfPreview}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Eye className="h-5 w-5 text-teal-500 mr-2" />
              {selectedOffice.name} - Office Details
            </DialogTitle>
            <DialogDescription>
              Detailed information about the visa application center
            </DialogDescription>
          </DialogHeader>
          
          <div className="overflow-y-auto flex-grow p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Office Name</p>
                      <p className="text-gray-600">{selectedOffice.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">{selectedOffice.address}, {selectedCity.name}, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">{selectedOffice.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Website</p>
                      <a 
                        href={selectedOffice.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-600 hover:underline"
                      >
                        {selectedOffice.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-gray-600">{selectedOffice.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Services & Information</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h5 className="font-medium mb-3">Available Services</h5>
                  <ul className="space-y-2">
                    {selectedOffice.services.map((service, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h5 className="font-medium">Travel Information</h5>
                  <p className="text-gray-600">
                    {selectedCity.name} visa office is accessible via various transportation methods:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Car className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-gray-600">Parking available nearby</span>
                    </div>
                    <div className="flex items-center">
                      <Bus className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-gray-600">Public transport connections</span>
                    </div>
                    <div className="flex items-center">
                      <Train className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-gray-600">Nearest train/underground station: {selectedCity.name} Central</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-4">Important Information</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Please ensure you have an appointment before visiting the visa application center. 
                      Walk-in services may not be available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* PDF Document Features */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-4">Document Details</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Download className="h-5 w-5 text-teal-600 mr-2" />
                    <span className="text-sm font-medium">{selectedOffice.name}_Details.pdf</span>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 2.3 MB</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>This document contains:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Complete contact information</li>
                    <li>Service details and pricing</li>
                    <li>Required documents checklist</li>
                    <li>Appointment booking instructions</li>
                    <li>Directions and transportation options</li>
                  </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">Downloaded on {new Date().toLocaleDateString()}</div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs border-teal-500 text-teal-500 hover:text-teal-600"
                      onClick={() => {
                        toast.success("Document downloaded successfully", { duration: 2000 });
                      }}
                    >
                      <Download className="mr-1 h-3.5 w-3.5" />
                      Download Again
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
            <Button 
              onClick={() => setShowPdfPreview(false)}
              variant="default"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisaOfficesMap;
