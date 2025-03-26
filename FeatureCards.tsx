
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, MapPin, BriefcaseMedical, PoundSterling, Book } from 'lucide-react';
import { useScrollFadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const FeatureCards = () => {
  const fadeInUp1 = useScrollFadeIn('up', 0.6, 0.1);
  const fadeInUp2 = useScrollFadeIn('up', 0.6, 0.2);
  const fadeInUp3 = useScrollFadeIn('up', 0.6, 0.3);
  const fadeInUp4 = useScrollFadeIn('up', 0.6, 0.4);
  const fadeInUp5 = useScrollFadeIn('up', 0.6, 0.5);
  const fadeInUp6 = useScrollFadeIn('up', 0.6, 0.6);

  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-teal-500" />,
      title: 'Eligibility Checker',
      description: 'Answer a few questions to receive personalized visa recommendations based on your profile.',
      link: '/eligibility',
      buttonText: 'Check Eligibility Now',
      animation: fadeInUp1
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-500" />,
      title: 'Document Checklist',
      description: 'Generate a customized document checklist for your specific visa application.',
      link: '/documents',
      buttonText: 'Create Your Checklist',
      animation: fadeInUp2
    },
    {
      icon: <MapPin className="h-10 w-10 text-teal-500" />,
      title: 'UK Visa Offices',
      description: 'Find UK visa application centers across major cities with an interactive map.',
      link: '/uk-cities',
      buttonText: 'View Visa Offices',
      animation: fadeInUp3
    },
    {
      icon: <BriefcaseMedical className="h-10 w-10 text-teal-500" />,
      title: 'Healthcare Information',
      description: 'Find hospitals, NHS details, health insurance requirements, and IHS surcharge information.',
      link: '/healthcare',
      buttonText: 'Healthcare Details',
      animation: fadeInUp4
    },
    {
      icon: <PoundSterling className="h-10 w-10 text-teal-500" />,
      title: 'Cost Calculator',
      description: 'Calculate total costs for your UK journey including visa fees, IHS, accommodation, and living expenses.',
      link: '/cost-calculator',
      buttonText: 'Calculate Costs',
      animation: fadeInUp5
    },
    {
      icon: <Book className="h-10 w-10 text-teal-500" />,
      title: 'Visa Knowledge Base',
      description: 'Access comprehensive information about UK visa types, policies, requirements, and recent updates.',
      link: '/visa-knowledge',
      buttonText: 'Explore Resources',
      animation: fadeInUp6
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Comprehensive Visa Guidance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our suite of tools designed to simplify every aspect of your UK visa application journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-100 h-full flex flex-col"
              // @ts-ignore
              ref={feature.animation.ref}
            >
              <div className="rounded-full bg-teal-50 w-16 h-16 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
              <Link to={feature.link} className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full bg-black text-white hover:bg-black/90 border-0"
                >
                  {feature.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
