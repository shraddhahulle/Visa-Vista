
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Printer, Share2, ClipboardList } from 'lucide-react';
import { visaTypes, documentChecklists } from '@/lib/visa-data';
import { generatePDF } from '@/utils/pdf-generator';
import { toast } from 'sonner';

const DocumentChecker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Extract visa type from URL query params
    const params = new URLSearchParams(location.search);
    const visaParam = params.get('visa');
    
    if (visaParam && Object.keys(documentChecklists).includes(visaParam)) {
      setSelectedVisa(visaParam);
      
      // Initialize all checklist items as unchecked
      const initialCheckedState: Record<string, boolean> = {};
      documentChecklists[visaParam as keyof typeof documentChecklists].forEach((_, index) => {
        initialCheckedState[index] = false;
      });
      setCheckedItems(initialCheckedState);
    }
  }, [location]);

  const handleVisaChange = (visaId: string) => {
    // Update URL with new visa selection
    navigate(`/documents?visa=${visaId}`);
    setSelectedVisa(visaId);
    
    // Reset checklist
    const initialCheckedState: Record<string, boolean> = {};
    documentChecklists[visaId as keyof typeof documentChecklists].forEach((_, index) => {
      initialCheckedState[index] = false;
    });
    setCheckedItems(initialCheckedState);
  };

  const handleCheckItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getCompletionPercentage = () => {
    if (!selectedVisa) return 0;
    
    const checklist = documentChecklists[selectedVisa as keyof typeof documentChecklists];
    const totalItems = checklist.length;
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    
    return Math.round((checkedCount / totalItems) * 100);
  };

  const generateChecklistPDF = () => {
    if (!selectedVisa) return;
    
    const visaInfo = visaTypes.find(v => v.id === selectedVisa);
    const checklist = documentChecklists[selectedVisa as keyof typeof documentChecklists];
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    
    if (visaInfo) {
      generatePDF({
        title: `${visaInfo.name} Document Checklist`,
        content: [
          { type: 'heading', text: `${visaInfo.name} Document Checklist` },
          { type: 'paragraph', text: `Below is a comprehensive list of documents required for your ${visaInfo.name} application.` },
          { type: 'paragraph', text: `Progress: ${checkedCount} of ${checklist.length} documents collected (${getCompletionPercentage()}%)` },
          { type: 'subheading', text: 'Required Documents:' },
          ...checklist.map((document, index) => ({
            type: 'paragraph' as const,
            text: `${checkedItems[index] ? '✓ ' : '□ '}${document}`
          })),
          { type: 'subheading', text: 'Visa Information:' },
          { type: 'paragraph', text: `Processing Time: ${visaInfo.processingTime}` },
          { type: 'paragraph', text: `Application Fee: £${visaInfo.cost}` },
          { type: 'paragraph', text: `Visa Duration: ${visaInfo.duration}` },
          { type: 'paragraph', text: `Work Permissions: ${visaInfo.workAllowed}` },
          { type: 'footer', text: `Generated on ${new Date().toLocaleDateString()} | UK Visa Assistant` }
        ]
      });
      
      toast.success(`Generating your ${visaInfo.name} document checklist PDF...`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Document Checklist Generator</h2>
        <p className="text-gray-600 mb-6">
          Select your visa type to see a comprehensive list of required documents for your application.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(documentChecklists).map((visaId) => {
            const visa = visaTypes.find(v => v.id === visaId);
            if (!visa) return null;
            
            return (
              <button
                key={visaId}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedVisa === visaId
                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => handleVisaChange(visaId)}
              >
                {visa.name}
              </button>
            );
          })}
        </div>
      </div>

      {selectedVisa ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {visaTypes.find(v => v.id === selectedVisa)?.name} Documents
                </h3>
                <p className="text-gray-600">
                  Track your progress as you gather the required documents
                </p>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-36 h-2 bg-gray-100 rounded-full overflow-hidden mr-2">
                  <div 
                    className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getCompletionPercentage()}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{getCompletionPercentage()}%</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <ul className="space-y-3">
                {documentChecklists[selectedVisa as keyof typeof documentChecklists].map((document, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start p-3 rounded-lg transition-colors ${
                      checkedItems[index] ? 'bg-teal-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <button
                        className={`w-5 h-5 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                          checkedItems[index] 
                            ? 'border-teal-500 bg-teal-500 text-white' 
                            : 'border-gray-300'
                        }`}
                        onClick={() => handleCheckItem(index)}
                        aria-label={checkedItems[index] ? 'Mark as not collected' : 'Mark as collected'}
                      >
                        {checkedItems[index] && <CheckCircle className="w-full h-full p-0.5" />}
                      </button>
                    </div>
                    <label 
                      htmlFor={`document-${index}`}
                      className={`cursor-pointer flex-grow ${checkedItems[index] ? 'text-teal-700' : 'text-gray-700'}`}
                    >
                      {document}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={generateChecklistPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              
              <button
                onClick={() => window.print()}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Printer className="w-5 h-5" />
                <span>Print Checklist</span>
              </button>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Link copied to clipboard!');
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <ClipboardList className="w-6 h-6 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium mb-2">Select a Visa Type</h3>
          <p className="text-gray-600">
            Choose a visa type from the options above to see the required documents.
          </p>
        </div>
      )}
    </div>
  );
};

export default DocumentChecker;
