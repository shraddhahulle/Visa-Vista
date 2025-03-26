
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EligibilityChecker from '@/components/eligibility/EligibilityChecker';

const Eligibility = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">UK Visa Eligibility Checker</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Answer a few questions to receive personalized visa recommendations based on your profile.
              This tool will help you identify which UK visas you may be eligible for.
            </p>
          </div>
          
          <EligibilityChecker />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Eligibility;
