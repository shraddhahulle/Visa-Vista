
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Globe, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { visaTypes, documentChecklists } from '@/lib/visa-data';
import { generatePDF } from '@/utils/pdf-generator';

const ResourceLinks = () => {
  const handleDocumentChecklist = (visaType: string) => {
    const visaInfo = visaTypes.find(v => v.id === visaType);
    const documents = documentChecklists[visaType as keyof typeof documentChecklists] || [];
    
    if (visaInfo) {
      generatePDF({
        title: `${visaInfo.name} Document Checklist`,
        content: [
          { type: 'heading', text: `${visaInfo.name} Document Checklist` },
          { type: 'paragraph', text: `Below is a comprehensive list of documents required for your ${visaInfo.name} application.` },
          { type: 'paragraph', text: `Processing Time: ${visaInfo.processingTime} | Cost: £${visaInfo.cost}` },
          { type: 'subheading', text: 'Required Documents:' },
          { type: 'list', items: documents },
          { type: 'subheading', text: 'Additional Requirements:' },
          { type: 'list', items: visaInfo.requirements },
          { type: 'footer', text: `Generated on ${new Date().toLocaleDateString()} | UK Visa Assistant` }
        ]
      });
      
      toast.success(`Generating ${visaInfo.name} checklist PDF...`);
    }
  };

  const handleApplicationGuide = (visaType: string) => {
    const visaInfo = visaTypes.find(v => v.id === visaType);
    
    if (visaInfo) {
      generatePDF({
        title: `${visaInfo.name} Application Guide`,
        content: [
          { type: 'heading', text: `${visaInfo.name} Application Guide` },
          { type: 'paragraph', text: `This guide will help you understand the application process for the ${visaInfo.name}.` },
          { type: 'subheading', text: 'Eligibility Requirements:' },
          { type: 'list', items: visaInfo.eligibilityPoints },
          { type: 'subheading', text: 'Application Process:' },
          { type: 'paragraph', text: `1. Complete the online application form at gov.uk` },
          { type: 'paragraph', text: `2. Pay the visa fee (£${visaInfo.cost}) and Immigration Health Surcharge if applicable` },
          { type: 'paragraph', text: `3. Book an appointment at a Visa Application Centre` },
          { type: 'paragraph', text: `4. Attend your appointment with all required documents` },
          { type: 'paragraph', text: `5. Provide biometrics (fingerprints and photograph)` },
          { type: 'paragraph', text: `6. Wait for a decision (typical processing time: ${visaInfo.processingTime})` },
          { type: 'subheading', text: 'Important Notes:' },
          { type: 'list', items: visaInfo.limitations },
          { type: 'footer', text: `Generated on ${new Date().toLocaleDateString()} | UK Visa Assistant` }
        ]
      });
      
      toast.success(`Generating ${visaInfo.name} application guide PDF...`);
    }
  };

  const handleCostBreakdown = () => {
    generatePDF({
      title: 'UK Visa Cost Breakdown',
      content: [
        { type: 'heading', text: 'UK Visa Cost Breakdown' },
        { type: 'paragraph', text: 'Below is a breakdown of costs for different UK visa categories.' },
        { type: 'table', headers: ['Visa Type', 'Application Fee', 'Healthcare Surcharge (per year)', 'Typical Additional Costs'],
          rows: visaTypes.map(visa => [
            visa.name,
            `£${visa.cost}`,
            visa.id === 'visitor' ? 'N/A' : '£624 (£470 for students)',
            visa.id === 'skilled-worker' ? 'Certificate of Sponsorship: £199' : 
            visa.id === 'student-visa' ? 'CAS: £21' : 'Biometric enrollment: £19.20'
          ])
        },
        { type: 'subheading', text: 'Additional Potential Costs:' },
        { type: 'list', items: [
          'Priority service: £500 (decision within 5 working days)',
          'Super Priority service: £800 (decision within 24 hours)',
          'English language test: £150-£200',
          'Tuberculosis test (if required): £50-£150',
          'Translation of documents: varies by length and language'
        ]},
        { type: 'footer', text: `Generated on ${new Date().toLocaleDateString()} | UK Visa Assistant` }
      ]
    });
    
    toast.success('Generating visa cost breakdown PDF...');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 flex flex-col">
        <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-teal-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">Document Checklists</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          Generate customized document checklists for your specific visa application.
        </p>
        <div className="space-y-2 mb-4">
          <button
            onClick={() => handleDocumentChecklist('student-visa')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Student Visa Checklist
          </button>
          <button
            onClick={() => handleDocumentChecklist('skilled-worker')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Work Visa Checklist
          </button>
          <button
            onClick={() => handleDocumentChecklist('visitor')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Tourist Visa Checklist
          </button>
        </div>
        <Link
          to="/documents"
          className="text-teal-600 font-medium text-sm flex items-center mt-auto"
        >
          View All Checklists
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 flex flex-col">
        <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mb-4">
          <Download className="w-6 h-6 text-teal-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">Application Guides</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          Download step-by-step guides for completing your UK visa application.
        </p>
        <div className="space-y-2 mb-4">
          <button
            onClick={() => handleApplicationGuide('student-visa')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Student Application Guide
          </button>
          <button
            onClick={() => handleApplicationGuide('skilled-worker')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Skilled Worker Guide
          </button>
          <button
            onClick={() => handleApplicationGuide('family-visa')}
            className="block text-teal-600 text-sm hover:underline"
          >
            Family Visa Guide
          </button>
        </div>
        <button
          onClick={handleCostBreakdown}
          className="text-teal-600 font-medium text-sm flex items-center mt-auto"
        >
          Download Cost Breakdown
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 flex flex-col">
        <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center mb-4">
          <Globe className="w-6 h-6 text-teal-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">Official Resources</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          Access official UK government visa and immigration resources.
        </p>
        <div className="space-y-2 mb-4">
          <a
            href="https://www.gov.uk/uk-visas-immigration"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-teal-600 text-sm hover:underline"
          >
            UK Visas & Immigration
          </a>
          <a
            href="https://www.gov.uk/find-a-visa-application-centre"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-teal-600 text-sm hover:underline"
          >
            Find a Visa Application Centre
          </a>
          <a
            href="https://www.gov.uk/check-uk-visa"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-teal-600 text-sm hover:underline"
          >
            Check if you need a UK visa
          </a>
        </div>
        <a
          href="https://www.gov.uk/browse/visas-immigration"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium text-sm flex items-center mt-auto"
        >
          Visit GOV.UK
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ResourceLinks;
