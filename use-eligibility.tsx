
import { useState } from 'react';
import { eligibilityQuestions, eligibilityMapping, visaTypes, VisaType } from '@/lib/visa-data';

export type EligibilityAnswer = {
  id: string;
  answer: string;
};

export const useEligibility = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<EligibilityAnswer[]>([]);
  const [recommendedVisas, setRecommendedVisas] = useState<VisaType[]>([]);
  const [alternativeVisas, setAlternativeVisas] = useState<VisaType[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Move to the next question
  const nextQuestion = (answer: string) => {
    const currentQuestion = eligibilityQuestions[currentQuestionIndex];
    
    // Save the answer
    const newAnswers = [...answers, { id: currentQuestion.id, answer }];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < eligibilityQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  // Go back to previous question
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
    }
  };

  // Calculate recommendation based on answers
  const calculateResults = (finalAnswers: EligibilityAnswer[]) => {
    setIsCalculating(true);
    
    // Generate a key for the mapping
    const answerKey = finalAnswers.map(a => a.answer).join('-');
    
    // Simulate API delay
    setTimeout(() => {
      // Find exact match from our mapping
      const exactRecommendation = eligibilityMapping[answerKey as keyof typeof eligibilityMapping];
      
      if (exactRecommendation) {
        const recommended = exactRecommendation.map(id => 
          visaTypes.find(visa => visa.id === id)
        ).filter(Boolean) as VisaType[];
        
        setRecommendedVisas(recommended);
        
        // Set alternatives (excluding recommended)
        const others = visaTypes.filter(visa => 
          !exactRecommendation.includes(visa.id)
        ).slice(0, 2);
        
        setAlternativeVisas(others);
      } else {
        // If no exact match, provide general recommendations
        const purposeAnswer = finalAnswers.find(a => a.id === 'purpose')?.answer;
        
        if (purposeAnswer === 'study') {
          setRecommendedVisas([visaTypes.find(v => v.id === 'student-visa')!]);
        } else if (purposeAnswer === 'work') {
          setRecommendedVisas([visaTypes.find(v => v.id === 'skilled-worker')!]);
        } else if (purposeAnswer === 'visit') {
          setRecommendedVisas([visaTypes.find(v => v.id === 'visitor')!]);
        } else if (purposeAnswer === 'family') {
          setRecommendedVisas([visaTypes.find(v => v.id === 'family-visa')!]);
        } else if (purposeAnswer === 'business') {
          setRecommendedVisas([visaTypes.find(v => v.id === 'innovator')!]);
        } else {
          // Default to student and visitor as recommendations
          setRecommendedVisas([
            visaTypes.find(v => v.id === 'student-visa')!,
            visaTypes.find(v => v.id === 'visitor')!
          ]);
        }
        
        // Set general alternatives
        setAlternativeVisas(visaTypes.filter(visa => 
          !recommendedVisas.map(v => v.id).includes(visa.id)
        ).slice(0, 2));
      }
      
      setIsComplete(true);
      setIsCalculating(false);
    }, 1500); // 1.5 second delay to simulate processing
  };

  // Reset the eligibility check
  const reset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setRecommendedVisas([]);
    setAlternativeVisas([]);
    setIsComplete(false);
  };

  return {
    currentQuestion: eligibilityQuestions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: eligibilityQuestions.length,
    answers,
    nextQuestion,
    previousQuestion,
    reset,
    isComplete,
    isCalculating,
    recommendedVisas,
    alternativeVisas
  };
};
