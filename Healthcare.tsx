
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  BriefcaseMedical, Info, Stethoscope, Pill, PoundSterling, 
  AlertTriangle, FileText, Phone, MapPin, Heart, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const healthcareInfo = [
  {
    title: "NHS Access",
    description: "The National Health Service (NHS) provides healthcare for UK residents. Visa holders paying the Immigration Health Surcharge (IHS) get access to NHS services.",
    icon: <Heart className="h-6 w-6 text-teal-500" />
  },
  {
    title: "Immigration Health Surcharge",
    description: "Most visa applicants staying over 6 months must pay the IHS. Current rates: £624 per year for students/youth mobility and £1,035 per year for other visas.",
    icon: <PoundSterling className="h-6 w-6 text-teal-500" />
  },
  {
    title: "Private Health Insurance",
    description: "Visitors on short-term visas (under 6 months) should arrange private health insurance before traveling to the UK.",
    icon: <Shield className="h-6 w-6 text-teal-500" />
  },
  {
    title: "Emergency Services",
    description: "For emergencies, call 999 or 112 for ambulance services. A&E departments handle emergency cases and are open 24/7.",
    icon: <Phone className="h-6 w-6 text-teal-500" />
  }
];

const majorHospitals = [
  {
    name: "Guy's and St Thomas' Hospital",
    city: "London",
    address: "Great Maze Pond, London SE1 9RT",
    services: ["Emergency Care", "Specialized Treatments", "International Patient Services"],
    mapLink: "https://goo.gl/maps/ZZQqXBtdY6QH6ZDMA"
  },
  {
    name: "Manchester Royal Infirmary",
    city: "Manchester",
    address: "Oxford Rd, Manchester M13 9WL",
    services: ["Emergency Department", "Specialist Services", "Teaching Hospital"],
    mapLink: "https://goo.gl/maps/wJ4e4mhHf7bFZ5jU8"
  },
  {
    name: "Royal Infirmary of Edinburgh",
    city: "Edinburgh",
    address: "51 Little France Crescent, Edinburgh EH16 4SA",
    services: ["Emergency Services", "Major Trauma Centre", "Specialist Units"],
    mapLink: "https://goo.gl/maps/9Z6JqRGkxzMxcqMH8"
  },
  {
    name: "Queen Elizabeth Hospital Birmingham",
    city: "Birmingham",
    address: "Mindelsohn Way, Birmingham B15 2GW",
    services: ["Major Trauma Centre", "Specialized Care", "Teaching Hospital"],
    mapLink: "https://goo.gl/maps/7LHr8nTnz9LYH17k7"
  }
];

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">UK Healthcare Information</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential information about healthcare access in the UK for visa holders and international visitors.
            </p>
          </div>
          
          {/* Healthcare Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
            <div className="flex items-start mb-6">
              <div className="rounded-full bg-teal-50 p-3 mr-5">
                <BriefcaseMedical className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-2">UK Healthcare System Overview</h2>
                <p className="text-gray-600">
                  The UK has a comprehensive healthcare system primarily delivered through the National Health Service (NHS). 
                  International visitors and visa holders have different levels of access depending on their visa type and length of stay.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {healthcareInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="rounded-full bg-teal-50 p-2 h-fit mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Major Hospitals Map */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Major UK Hospitals</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed/v1/search?q=major+hospitals+in+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  className="w-full h-[400px] border-0"
                  title="UK Hospitals Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium">Major UK Hospitals</h3>
                </div>
                <div className="p-4 max-h-[340px] overflow-y-auto">
                  {majorHospitals.map((hospital, index) => (
                    <div key={index} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                      <h4 className="font-medium text-teal-700">{hospital.name}</h4>
                      <div className="flex items-start mt-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{hospital.address}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {hospital.services.map((service, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                            {service}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={hospital.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-teal-600 hover:text-teal-700"
                      >
                        View on map
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Healthcare Requirements by Visa Type */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-xl font-semibold mb-6">Healthcare Requirements by Visa Type</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visa Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IHS Requirement</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NHS Access</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendations</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Student Visa</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£624 per year</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full access after paying IHS</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Register with a local GP upon arrival</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skilled Worker Visa</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1,035 per year</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full access after paying IHS</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Register with a local GP upon arrival</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Visitor Visa (&lt; 6 months)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Not required</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Emergency treatment only</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Private health insurance strongly recommended</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Family Visa</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1,035 per year per person</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full access after paying IHS</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Register all family members with a local GP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-teal-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-medium mb-4">Planning Your UK Journey?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Make sure to check all healthcare requirements for your visa type and calculate potential healthcare costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/cost-calculator">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Calculate Healthcare Costs
                </Button>
              </Link>
              <Link to="/visa-knowledge">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Visa Healthcare Requirements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Healthcare;
