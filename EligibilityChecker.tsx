
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Clock, Download, PoundSterling, Calendar, Briefcase } from 'lucide-react';
import { useEligibility } from '@/hooks/use-eligibility';
import { visaTypes, documentChecklists } from '@/lib/visa-data';

const EligibilityChecker = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    answers,
    nextQuestion,
    previousQuestion,
    reset,
    isComplete,
    isCalculating,
    recommendedVisas,
    alternativeVisas
  } = useEligibility();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOption) {
      nextQuestion(selectedOption);
      setSelectedOption(null);
    }
  };
  
  // Generate PDF function (mock)
  const generatePDF = () => {
    alert('Generating your eligibility report...');
    // This would actually generate and download a PDF in a real application
  };

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
            <CheckCircle className="w-8 h-8 text-teal-500" />
          </div>
          <h2 className="text-3xl font-semibold mb-2">Your Eligibility Results</h2>
          <p className="text-gray-600">
            Based on your answers, here are the UK visas you may be eligible for.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 text-teal-500 mr-2" />
            Recommended Visa Options
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedVisas.map((visa) => (
              <div 
                key={visa.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-2">{visa.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{visa.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span><strong>Processing:</strong> {visa.processingTime}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <PoundSterling className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span><strong>Cost:</strong> £{visa.cost} (visa fee only)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span><strong>Duration:</strong> {visa.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Briefcase className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span><strong>Work:</strong> {visa.workAllowed}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      to={`/visa-types#${visa.id}`}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to={`/documents?visa=${visa.id}`}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center"
                    >
                      Document Checklist
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {alternativeVisas.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 text-coral-500 mr-2" />
              Alternative Options to Consider
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alternativeVisas.map((visa) => (
                <div 
                  key={visa.id}
                  className="bg-gray-50 rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:bg-white hover:shadow-sm"
                >
                  <h4 className="text-lg font-medium mb-2">{visa.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{visa.description}</p>
                  
                  <Link 
                    to={`/visa-types#${visa.id}`}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={generatePDF}
            className="flex items-center space-x-2 px-6 py-3 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            <span>Download Results</span>
          </button>
          
          <button
            onClick={reset}
            className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="text-center py-16">
        <div className="inline-block rounded-full h-16 w-16 bg-teal-50 p-4 animate-pulse mb-6">
          <Clock className="h-8 w-8 text-teal-500" />
        </div>
        <h3 className="text-xl font-medium mb-2">Analyzing Your Eligibility</h3>
        <p className="text-gray-600 mb-8">
          Please wait while we evaluate your profile against UK visa requirements...
        </p>
        <div className="max-w-md mx-auto h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-teal-600">
            {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
        <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedOption === option.value
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentQuestionIndex === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedOption
                ? 'bg-black text-white hover:bg-black/90'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'See Results'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Your answers help us determine which UK visas you may be eligible for.
        <br />
        This is for guidance only and does not guarantee visa approval.
      </div>
    </div>
  );
};

export default EligibilityChecker;
