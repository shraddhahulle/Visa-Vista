import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PoundSterling, Calculator, Check, FileText, BriefcaseMedical, Home, ShoppingBag, BookOpen, Train, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const visaTypes = [
  { id: 'student', name: 'Student Visa', fee: 363, ihsPerYear: 624 },
  { id: 'skilled-worker', name: 'Skilled Worker Visa', fee: 719, ihsPerYear: 1035 },
  { id: 'family', name: 'Family Visa', fee: 1538, ihsPerYear: 1035 },
  { id: 'visitor', name: 'Standard Visitor Visa', fee: 115, ihsPerYear: 0 },
  { id: 'global-talent', name: 'Global Talent Visa', fee: 623, ihsPerYear: 1035 }
];

const ukCityCosts = {
  london: {
    accommodation: { low: 800, high: 2000 },
    food: { low: 250, high: 500 },
    transport: { low: 140, high: 250 },
    utilities: { low: 150, high: 300 },
    entertainment: { low: 200, high: 500 }
  },
  manchester: {
    accommodation: { low: 500, high: 1200 },
    food: { low: 200, high: 400 },
    transport: { low: 70, high: 150 },
    utilities: { low: 120, high: 250 },
    entertainment: { low: 150, high: 400 }
  },
  birmingham: {
    accommodation: { low: 500, high: 1100 },
    food: { low: 200, high: 400 },
    transport: { low: 70, high: 150 },
    utilities: { low: 120, high: 250 },
    entertainment: { low: 150, high: 400 }
  },
  edinburgh: {
    accommodation: { low: 600, high: 1300 },
    food: { low: 220, high: 420 },
    transport: { low: 80, high: 160 },
    utilities: { low: 130, high: 260 },
    entertainment: { low: 180, high: 420 }
  },
  glasgow: {
    accommodation: { low: 500, high: 1100 },
    food: { low: 200, high: 400 },
    transport: { low: 70, high: 150 },
    utilities: { low: 120, high: 240 },
    entertainment: { low: 150, high: 380 }
  },
  other: {
    accommodation: { low: 450, high: 900 },
    food: { low: 180, high: 350 },
    transport: { low: 60, high: 130 },
    utilities: { low: 110, high: 220 },
    entertainment: { low: 130, high: 350 }
  }
};

const CostCalculator = () => {
  const [visaType, setVisaType] = useState('student');
  const [duration, setDuration] = useState(12);
  const [city, setCity] = useState('london');
  const [includeDependent, setIncludeDependent] = useState(false);
  const [dependents, setDependents] = useState(0);
  const [accommodationType, setAccommodationType] = useState('shared');
  const [lifestyle, setLifestyle] = useState(50);
  
  const [totalVisaCost, setTotalVisaCost] = useState(0);
  const [totalLivingCost, setTotalLivingCost] = useState(0);
  const [monthlyCosts, setMonthlyCosts] = useState({
    accommodation: 0,
    food: 0,
    transport: 0,
    utilities: 0,
    entertainment: 0
  });
  
  const calculateCosts = () => {
    // Selected visa type
    const selectedVisa = visaTypes.find(v => v.id === visaType);
    if (!selectedVisa) return;
    
    // Calculate visa costs
    const visaFee = selectedVisa.fee;
    const ihsFee = selectedVisa.ihsPerYear > 0 ? Math.ceil(duration / 12) * selectedVisa.ihsPerYear : 0;
    
    // Dependent costs
    const dependentVisaFee = includeDependent ? dependents * selectedVisa.fee : 0;
    const dependentIhsFee = includeDependent && selectedVisa.ihsPerYear > 0 
      ? dependents * Math.ceil(duration / 12) * selectedVisa.ihsPerYear 
      : 0;
    
    const totalVisa = visaFee + ihsFee + dependentVisaFee + dependentIhsFee;
    setTotalVisaCost(totalVisa);
    
    // Living costs calculation
    const cityCosts = ukCityCosts[city] || ukCityCosts.other;
    
    // Accommodation adjustment based on type
    let accommodationMultiplier = 1;
    if (accommodationType === 'shared') accommodationMultiplier = 0.7;
    if (accommodationType === 'private') accommodationMultiplier = 1;
    if (accommodationType === 'family') accommodationMultiplier = 1.3;
    
    // Lifestyle factor (0-100 scale)
    const lifestyleFactor = lifestyle / 100;
    
    // Calculate each monthly cost based on lifestyle and city
    const accommodation = (cityCosts.accommodation.low + (cityCosts.accommodation.high - cityCosts.accommodation.low) * lifestyleFactor) * accommodationMultiplier;
    const food = cityCosts.food.low + (cityCosts.food.high - cityCosts.food.low) * lifestyleFactor;
    const transport = cityCosts.transport.low + (cityCosts.transport.high - cityCosts.transport.low) * lifestyleFactor;
    const utilities = cityCosts.utilities.low + (cityCosts.utilities.high - cityCosts.utilities.low) * lifestyleFactor;
    const entertainment = cityCosts.entertainment.low + (cityCosts.entertainment.high - cityCosts.entertainment.low) * lifestyleFactor;
    
    // Adjust for dependents
    const dependentFactor = includeDependent ? 1 + (dependents * 0.5) : 1;
    
    const monthlyTotal = (accommodation + food + transport + utilities + entertainment) * dependentFactor;
    const livingTotal = monthlyTotal * duration;
    
    setMonthlyCosts({
      accommodation: Math.round(accommodation),
      food: Math.round(food),
      transport: Math.round(transport),
      utilities: Math.round(utilities),
      entertainment: Math.round(entertainment)
    });
    
    setTotalLivingCost(Math.round(livingTotal));
  };
  
  useEffect(() => {
    calculateCosts();
  }, [visaType, duration, city, includeDependent, dependents, accommodationType, lifestyle]);
  
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">UK Cost Calculator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estimate the total cost of your UK journey including visa fees, healthcare surcharge, accommodation, and living expenses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Form */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="rounded-full bg-teal-50 p-2">
                    <Calculator className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-xl font-medium">Personalize Your Cost Estimate</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Visa Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="visa-type">Visa Type</Label>
                      <Select value={visaType} onValueChange={setVisaType}>
                        <SelectTrigger id="visa-type">
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          {visaTypes.map(visa => (
                            <SelectItem key={visa.id} value={visa.id}>{visa.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Duration (months)</Label>
                      <div className="flex items-center">
                        <span className="mr-2 text-sm text-gray-500">1</span>
                        <Slider 
                          value={[duration]} 
                          min={1} 
                          max={60} 
                          step={1} 
                          onValueChange={(val) => setDuration(val[0])}
                          className="flex-1"
                        />
                        <span className="ml-2 text-sm text-gray-500">60</span>
                      </div>
                      <div className="text-center mt-1 text-sm font-medium">{duration} months</div>
                    </div>
                    
                    <div>
                      <Label htmlFor="uk-city">UK City</Label>
                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger id="uk-city">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="london">London</SelectItem>
                          <SelectItem value="manchester">Manchester</SelectItem>
                          <SelectItem value="birmingham">Birmingham</SelectItem>
                          <SelectItem value="edinburgh">Edinburgh</SelectItem>
                          <SelectItem value="glasgow">Glasgow</SelectItem>
                          <SelectItem value="other">Other Cities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Personal Preferences */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dependents-switch">Include Dependents</Label>
                      <Switch 
                        id="dependents-switch" 
                        checked={includeDependent}
                        onCheckedChange={setIncludeDependent}
                      />
                    </div>
                    
                    {includeDependent && (
                      <div>
                        <Label>Number of Dependents</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-sm text-gray-500">0</span>
                          <Slider 
                            value={[dependents]} 
                            min={0} 
                            max={5} 
                            step={1} 
                            onValueChange={(val) => setDependents(val[0])}
                            className="flex-1"
                          />
                          <span className="ml-2 text-sm text-gray-500">5</span>
                        </div>
                        <div className="text-center mt-1 text-sm font-medium">{dependents} dependents</div>
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="accommodation-type">Accommodation Type</Label>
                      <Select value={accommodationType} onValueChange={setAccommodationType}>
                        <SelectTrigger id="accommodation-type">
                          <SelectValue placeholder="Select accommodation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shared">Shared Accommodation</SelectItem>
                          <SelectItem value="private">Private Rental</SelectItem>
                          <SelectItem value="family">Family Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Lifestyle</Label>
                      <div className="flex items-center">
                        <span className="mr-2 text-sm text-gray-500">Budget</span>
                        <Slider 
                          value={[lifestyle]} 
                          min={0} 
                          max={100} 
                          step={10} 
                          onValueChange={(val) => setLifestyle(val[0])}
                          className="flex-1"
                        />
                        <span className="ml-2 text-sm text-gray-500">Luxury</span>
                      </div>
                      <div className="text-center mt-1 text-sm font-medium">
                        {lifestyle < 30 ? 'Budget' : lifestyle < 70 ? 'Moderate' : 'Comfortable'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Monthly Breakdown */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-medium mb-4">Monthly Cost Breakdown</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Home className="w-5 h-5 text-teal-500 mr-2" />
                      <span>Accommodation</span>
                    </div>
                    <span className="font-medium">£{monthlyCosts.accommodation}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 text-teal-500 mr-2" />
                      <span>Food & Groceries</span>
                    </div>
                    <span className="font-medium">£{monthlyCosts.food}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Train className="w-5 h-5 text-teal-500 mr-2" />
                      <span>Transportation</span>
                    </div>
                    <span className="font-medium">£{monthlyCosts.transport}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Home className="w-5 h-5 text-teal-500 mr-2" />
                      <span>Utilities & Bills</span>
                    </div>
                    <span className="font-medium">£{monthlyCosts.utilities}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <ShoppingBag className="w-5 h-5 text-teal-500 mr-2" />
                      <span>Entertainment & Leisure</span>
                    </div>
                    <span className="font-medium">£{monthlyCosts.entertainment}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-medium">Monthly Total</span>
                    <span className="font-bold text-lg">£{Object.values(monthlyCosts).reduce((a, b) => a + b, 0)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cost Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-teal-50 p-4 border-b border-teal-100">
                  <h3 className="font-medium text-lg flex items-center">
                    <PoundSterling className="w-5 h-5 text-teal-600 mr-2" />
                    Cost Summary
                  </h3>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Visa & IHS Costs */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <FileText className="w-4 h-4 text-teal-500 mr-2" />
                      Visa & Healthcare Costs
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Visa Application Fee</span>
                          <span>£{visaTypes.find(v => v.id === visaType)?.fee || 0}</span>
                        </div>
                        
                        {visaTypes.find(v => v.id === visaType)?.ihsPerYear > 0 && (
                          <div className="flex justify-between text-sm">
                            <span>Immigration Health Surcharge</span>
                            <span>£{Math.ceil(duration / 12) * (visaTypes.find(v => v.id === visaType)?.ihsPerYear || 0)}</span>
                          </div>
                        )}
                        
                        {includeDependent && dependents > 0 && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span>Dependent Visa Fees ({dependents})</span>
                              <span>£{dependents * (visaTypes.find(v => v.id === visaType)?.fee || 0)}</span>
                            </div>
                            
                            {visaTypes.find(v => v.id === visaType)?.ihsPerYear > 0 && (
                              <div className="flex justify-between text-sm">
                                <span>Dependent IHS ({dependents})</span>
                                <span>£{dependents * Math.ceil(duration / 12) * (visaTypes.find(v => v.id === visaType)?.ihsPerYear || 0)}</span>
                              </div>
                            )}
                          </>
                        )}
                        
                        <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                          <span>Subtotal</span>
                          <span>£{totalVisaCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Living Costs */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <Home className="w-4 h-4 text-teal-500 mr-2" />
                      Living Costs ({duration} months)
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between text-sm">
                        <span>Monthly Living Costs</span>
                        <span>£{Object.values(monthlyCosts).reduce((a, b) => a + b, 0)} × {duration}</span>
                      </div>
                      
                      <div className="flex justify-between font-medium pt-2 mt-2 border-t border-gray-200">
                        <span>Subtotal</span>
                        <span>£{totalLivingCost}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Total Estimated Cost</span>
                      <span className="font-bold text-xl">£{totalVisaCost + totalLivingCost}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Costs are estimates and may vary based on individual circumstances, changes in fees, and lifestyle choices.
                    </p>
                  </div>
                  
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Download Cost Breakdown
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cost Saving Tips */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold mb-6">Money-Saving Tips for UK Visa Applicants</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Consider cities outside London</h3>
                  <p className="text-gray-600 text-sm">Living costs can be 30-50% lower in cities like Manchester, Glasgow, or Cardiff compared to London.</p>
                </div>
              </div>
              
              <div className="flex">
                <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Apply during standard periods</h3>
                  <p className="text-gray-600 text-sm">Avoid priority or super-priority services unless absolutely necessary to save on processing fees.</p>
                </div>
              </div>
              
              <div className="flex">
                <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Shared accommodation</h3>
                  <p className="text-gray-600 text-sm">Consider house-sharing to significantly reduce your accommodation costs, especially in expensive cities.</p>
                </div>
              </div>
              
              <div className="flex">
                <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Student discounts</h3>
                  <p className="text-gray-600 text-sm">If on a student visa, use your student ID for discounts on transport, shopping, entertainment, and more.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Resources */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium mb-4">Need More Information?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.gov.uk/healthcare-immigration-application/how-much-pay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <BriefcaseMedical className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-sm font-medium">Official IHS Rates</span>
              </a>
              
              <a href="https://www.gov.uk/visa-fees" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FileText className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-sm font-medium">UK Visa Fees</span>
              </a>
              
              <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <PoundSterling className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-sm font-medium">UK Living Costs Data</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CostCalculator;
