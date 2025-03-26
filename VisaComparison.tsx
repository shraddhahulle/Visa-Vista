
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Info, ArrowRight, CheckCircle, Clock, Calendar, PoundSterling, Briefcase, FileText } from 'lucide-react';
import { visaTypes, VisaType } from '@/lib/visa-data';

const VisaComparison = () => {
  const [selectedVisas, setSelectedVisas] = useState<string[]>([]);

  const handleSelectVisa = (visaId: string) => {
    if (selectedVisas.includes(visaId)) {
      setSelectedVisas(selectedVisas.filter(id => id !== visaId));
    } else {
      if (selectedVisas.length < 2) {
        setSelectedVisas([...selectedVisas, visaId]);
      } else {
        setSelectedVisas([selectedVisas[1], visaId]);
      }
    }
  };

  const getSelectedVisaDetails = () => {
    return selectedVisas.map(id => visaTypes.find(visa => visa.id === id)).filter(Boolean) as VisaType[];
  };

  const selectedVisaDetails = getSelectedVisaDetails();

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compare UK Visa Types</h2>
        <p className="text-gray-600 mb-6">
          Select up to 2 visa types to compare their requirements, costs, and benefits side by side.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {visaTypes.map((visa) => (
            <button
              key={visa.id}
              className={`p-4 rounded-lg border transition-all ${
                selectedVisas.includes(visa.id)
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
              onClick={() => handleSelectVisa(visa.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  selectedVisas.includes(visa.id) ? 'bg-teal-100' : 'bg-gray-100'
                }`}>
                  {selectedVisas.includes(visa.id) ? 
                    <CheckCircle className="w-5 h-5 text-teal-500" /> :
                    <span className="text-sm">{selectedVisas.length + 1}</span>
                  }
                </div>
                <span className="text-sm font-medium line-clamp-2">{visa.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedVisaDetails.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {selectedVisaDetails.map((visa) => (
              <div key={visa.id} className="p-6" id={visa.id}>
                <h3 className="text-xl font-semibold mb-4">{visa.name}</h3>
                <p className="text-gray-600 mb-6">{visa.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Key Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-sm font-medium">Processing Time</span>
                          <span className="text-gray-600">{visa.processingTime}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <PoundSterling className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-sm font-medium">Visa Fee</span>
                          <span className="text-gray-600">£{visa.cost}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-sm font-medium">Duration</span>
                          <span className="text-gray-600">{visa.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Briefcase className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-sm font-medium">Work Permission</span>
                          <span className="text-gray-600">{visa.workAllowed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Eligibility Requirements</h4>
                    <ul className="space-y-2">
                      {visa.eligibilityPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {visa.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <Info className="w-5 h-5 text-coral-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link
                      to={`/documents?visa=${visa.id}`}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View Document Checklist
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedVisaDetails.length === 0 && (
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <Info className="w-6 h-6 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium mb-2">Select Visas to Compare</h3>
          <p className="text-gray-600">
            Choose up to 2 visa types from the options above to see a detailed comparison.
          </p>
        </div>
      )}
    </div>
  );
};

export default VisaComparison;
