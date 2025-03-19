import React, { useState, useEffect } from 'react';
import { vanModels, chassisOptions, customizationOptions, colorOptions } from '../data/vanData';
import { cn } from '../lib/utils';
import type { VanConfiguration, CustomizationOption } from '../types';
import testImage from '../assets/test.png'; // Adjust the path as needed
import logo from '../assets/logo.png'; // Add this import at the top with other imports

// Import ShadCN components
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

// Define the category types
type CategoryType = 
  | 'chassis' 
  | 'colors' 
  | 'models' 
  | 'laminate' 
  | 'upholstery' 
  | 'electrical' 
  | 'heating'
  | 'exterior' 
  | 'storage' 
  | 'bathroom' 
  | 'kitchen' 
  | 'lighting'
  | 'offgrid'
  | 'security';

type ViewType = 'interior' | 'exterior' | 'rear' | 'reartop';

// Define the order of categories
const CATEGORY_ORDER: CategoryType[] = [
  'chassis', 'colors', 'models', 'laminate', 'upholstery', 'electrical', 'heating',
  'exterior', 'storage', 'bathroom', 'kitchen', 'lighting', 'offgrid', 'security'
];

interface CategoryProps {
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

// Updated Category component with ShadCN-inspired styling (badges removed)
const Category: React.FC<CategoryProps> = ({ title, isActive, isCompleted, onClick }) => {
  return (
    <div 
      className={cn(
        "py-3 px-6 cursor-pointer font-medium relative transition-all duration-200 border-l-4",
        isActive 
          ? "bg-[#F8BC40] text-gray-800 border-l-4 border-[#F8BC40]" 
          : isCompleted
            ? "text-gray-700 hover:bg-white/50 border-l-4 border-green-500"
            : "text-gray-700 hover:bg-white/50 border-l-4 border-transparent",
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-wider font-semibold">{title}</span>
      </div>
    </div>
  );
};

// Updated EmailModal with ShadCN components
const EmailModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Reset email and error when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a slight delay for better UX
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <Card className="z-10 w-full max-w-md shadow-2xl">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-bold text-[#F8BC40] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stay Connected
            </CardTitle>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <CardDescription className="text-gray-700 mt-2">
            We'll send your custom configuration to this email and keep you updated on your Chewy journey.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="youremail@example.com"
                  className="w-full pl-10 p-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F8BC40] focus:border-transparent transition-all"
                  autoFocus
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-end gap-3 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => handleSubmit(e as any)}
            className="gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Updated GlobalStyles component with better animations and scrollbar
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }
      
      .custom-scrollbar::-webkit-scrollbar {
        width: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: rgba(248, 188, 64, 0.4);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: rgba(248, 188, 64, 0.6);
      }

      .fade-in {
        animation: fadeIn 0.5s ease-in-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .slide-in {
        animation: slideIn 0.5s ease-in-out;
      }
      
      @keyframes slideIn {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      .option-transition {
        transition: all 0.2s ease-in-out;
      }
      
      .option-transition:hover {
        transform: translateY(-2px);
      }
      
      @media (max-width: 1280px) {
        .mobile-stack {
          flex-direction: column;
        }
        
        .mobile-full {
          width: 100%;
        }
      }
    `
  }} />
);

// Enhanced OptionItem component with animations and better styling
const OptionItem = ({ 
  isSelected, 
  name, 
  price, 
  onClick, 
  showPrice = true 
}: { 
  isSelected: boolean; 
  name: string; 
  price?: number; 
  onClick: (e: React.MouseEvent) => void;
  showPrice?: boolean;
}) => (
  <div 
    className={cn(
      "flex items-center justify-between py-3 px-6 text-gray-700 cursor-pointer transition-all duration-200 rounded-md my-1 option-transition",
      isSelected 
        ? "bg-[#F8BC40]/20 shadow-sm border border-[#F8BC40]/30" 
        : "hover:bg-white/60 border border-transparent hover:border-gray-200"
    )}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-pressed={isSelected}
  >
    <div className="flex items-center pointer-events-none flex-1 min-w-0 mr-4">
      <Checkbox 
        checked={isSelected} 
        className="flex-shrink-0"
        // Disable actual checkbox click since we're handling it at the parent div level
        onClick={(e) => e.stopPropagation()}
      />
      <span className="font-medium ml-3 truncate">{name}</span>
    </div>
    {showPrice && price !== undefined && (
      <div className={cn(
        "pointer-events-none font-semibold flex-shrink-0 rounded-full px-2 py-0.5 text-sm",
        isSelected ? "bg-[#F8BC40]/30 text-gray-800" : "bg-gray-100 text-gray-700"
      )}>
        ${price.toLocaleString()}
      </div>
    )}
  </div>
);

// Update the Van Visualization Component with loading state and effects
const VanImageVisualization = ({ 
  imagePath, 
  view, 
  opacity 
}: { 
  imagePath: string, 
  view: ViewType,
  opacity: number 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Reset loading state when view or image changes
  useEffect(() => {
    setIsLoading(true);
  }, [imagePath, view]);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F8BC40]"></div>
        </div>
      )}
      <img 
        src={imagePath}
        alt={`${view} view of the van`}
        className="max-w-full max-h-full object-contain transition-opacity duration-500"
        style={{ opacity: isLoading ? 0 : opacity }}
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Add a subtle shadow under the vehicle */}
      <div 
        className="absolute bottom-10 w-3/4 h-4 bg-black/10 blur-xl rounded-full"
        style={{ opacity: isLoading ? 0 : opacity * 0.5 }}
      ></div>
    </div>
  );
};

export const VanBuilder: React.FC = () => {
  // Active category state
  const [activeCategory, setActiveCategory] = useState<CategoryType>('chassis');
  
  // Completed categories
  const [completedCategories, setCompletedCategories] = useState<CategoryType[]>([]);
  
  // Active view state
  const [activeView, setActiveView] = useState<ViewType>('exterior');
  
  // Configuration state
  const [configuration, setConfiguration] = useState<VanConfiguration>({
    modelId: '',
    chassisId: '',
    color: '',
    selectedOptions: [],
  });

  // Predefined custom option lists for better state management
  const laminateOptions = [
    { id: 'laminate-oak', name: 'Oak Finish', price: 1200 },
    { id: 'laminate-maple', name: 'Maple Finish', price: 1500 },
    { id: 'laminate-walnut', name: 'Walnut Finish', price: 1800 },
  ];
  
  const upholsteryOptions = [
    { id: 'upholstery-leather', name: 'Premium Leather', price: 3000 },
    { id: 'upholstery-fabric', name: 'Durable Fabric', price: 1500 },
    { id: 'upholstery-vinyl', name: 'Marine-Grade Vinyl', price: 2200 },
  ];
  
  const heatingOptions = [
    { id: 'heating-diesel', name: 'Diesel Heater System', price: 2500 },
    { id: 'heating-propane', name: 'Propane Heating', price: 1800 },
    { id: 'heating-ac', name: 'Air Conditioning', price: 3500 },
  ];
  
  // Add these arrays with the other predefined option lists

  const exteriorOptions = [
    { id: 'exterior-awning', name: 'Retractable Awning', price: 1800 },
    { id: 'exterior-ladder', name: 'Roof Access Ladder', price: 800 },
    { id: 'exterior-bikemount', name: 'Bike Mount (2 Bikes)', price: 950 },
    { id: 'exterior-solarpanels', name: 'Solar Panel Package (200W)', price: 2400 },
  ];

  const storageOptions = [
    { id: 'storage-garage', name: 'Rear Garage Storage', price: 1200 },
    { id: 'storage-overhead', name: 'Overhead Cabinets', price: 2400 },
    { id: 'storage-underbed', name: 'Under-bed Storage System', price: 1800 },
    { id: 'storage-drawers', name: 'Custom Drawer System', price: 1500 },
  ];

  const bathroomOptions = [
    { id: 'bathroom-toilet', name: 'Composting Toilet', price: 1200 },
    { id: 'bathroom-shower', name: 'Indoor Shower System', price: 3500 },
    { id: 'bathroom-sink', name: 'Bathroom Sink & Vanity', price: 1800 },
    { id: 'bathroom-outdoorshower', name: 'Outdoor Shower Kit', price: 650 },
  ];

  const kitchenOptions = [
    { id: 'kitchen-stove', name: 'Propane 2-Burner Stove', price: 850 },
    { id: 'kitchen-sink', name: 'Stainless Steel Sink', price: 550 },
    { id: 'kitchen-fridge', name: '12V Refrigerator', price: 1200 },
    { id: 'kitchen-countertop', name: 'Premium Countertop Upgrade', price: 900 },
  ];

  const lightingOptions = [
    { id: 'lighting-led', name: 'LED Lighting Package', price: 800 },
    { id: 'lighting-dimmer', name: 'Dimmer Switch System', price: 350 },
    { id: 'lighting-accent', name: 'Accent Lighting', price: 450 },
    { id: 'lighting-exterior', name: 'Exterior Lighting Package', price: 600 },
  ];

  const offgridOptions = [
    { id: 'offgrid-battery', name: 'Lithium Battery System (200Ah)', price: 3500 },
    { id: 'offgrid-inverter', name: '2000W Pure Sine Inverter', price: 1200 },
    { id: 'offgrid-solar', name: 'Additional Solar (300W)', price: 2800 },
    { id: 'offgrid-alternator', name: 'DC-DC Charging System', price: 850 },
  ];

  const securityOptions = [
    { id: 'security-alarm', name: 'Security Alarm System', price: 1200 },
    { id: 'security-lockbox', name: 'Hidden Valuables Lockbox', price: 550 },
    { id: 'security-windows', name: 'Privacy Window Tint', price: 800 },
    { id: 'security-doorlocks', name: 'Enhanced Door Locks', price: 450 },
  ];
  
  // Update the price calculation useEffect:
  useEffect(() => {
    // This ensures price updates are always triggered on config changes
    const updateTotalPrice = () => {
      // Simply calling these functions will ensure their values are re-calculated
      getVehicleChassisPrice();
      getBasePackagePrice();
      getUpgradesTotal();
      calculateTotal();
    };
    
    updateTotalPrice();
  }, [configuration]);

  // Set initial default selection when component mounts
  useEffect(() => {
    // Remove the default chassis selection
    // Previously set Sprinter 170 as default
  }, []);

  // Calculate total price
  const calculateTotal = (): number => {
    let total = 0;
    
    // Add chassis price
    const chassis = chassisOptions.find(c => c.id === configuration.chassisId);
    if (chassis) {
      total += chassis.priceAdjustment;
    }
    
    // Add base model price
    const selectedPackage = modelPackages.find(m => m.id === configuration.modelId);
    if (selectedPackage) {
      total += selectedPackage.price;
    }
    
    // Add customization options
    const options = configuration.selectedOptions.map(
      optId => customizationOptions.find(opt => opt.id === optId) ||
              // Try to find in our local option arrays
              [...laminateOptions, ...upholsteryOptions, ...heatingOptions].find(item => item.id === optId)
    );

    total += options.reduce((sum: number, opt) => sum + (opt?.price || 0), 0);

    return total;
  };

  // Get vehicle chassis price (if chassis selected, otherwise 0)
  const getVehicleChassisPrice = (): number => {
    const chassis = chassisOptions.find(c => c.id === configuration.chassisId);
    return chassis?.priceAdjustment || 0;
  };

  // Custom model data that maps to our vanModels
  const modelPackages = [
    { id: 'classic', name: 'Classic Base Package', price: 49995, vanModelId: 'adventure' },
    { id: 'kronos', name: 'Kronos Base Package', price: 86995, vanModelId: 'expedition' },
    { id: 'metis', name: 'Metis Base Package', price: 85995, vanModelId: 'adventure' },
    { id: 'ultra', name: 'Ultra Base Package', price: 99995, vanModelId: 'expedition' },
  ];

  // Get base package price (if model selected, otherwise 0)
  const getBasePackagePrice = (): number => {
    const selectedPackage = modelPackages.find(m => m.id === configuration.modelId);
    return selectedPackage?.price || 0;
  };

  // Get upgrades total (all selected options)
  const getUpgradesTotal = (): number => {
    const options = configuration.selectedOptions.map(
      optId => customizationOptions.find(opt => opt.id === optId) ||
              // Try to find in our local option arrays
              [...laminateOptions, ...upholsteryOptions, ...heatingOptions].find(item => item.id === optId)
    );
    return options.reduce((sum: number, opt) => sum + (opt?.price || 0), 0);
  };

  // Handle chassis selection
  const handleChassisSelect = (chassisId: string) => {
    setConfiguration(prev => ({
      ...prev,
      chassisId
    }));
    
    // Mark chassis as completed when selected
    if (!completedCategories.includes('chassis')) {
      setCompletedCategories(prev => Array.from(new Set([...prev, 'chassis'])));
      setTimeout(() => setActiveCategory('models'), 500);
    }
  };

  // Handle model selection
  const handleModelSelect = (modelId: string) => {
    setConfiguration(prev => ({
      ...prev,
      modelId
    }));
    
    // Mark models as completed when selected
    if (!completedCategories.includes('models')) {
      setCompletedCategories(prev => Array.from(new Set([...prev, 'models'])));
      setTimeout(() => setActiveCategory('colors'), 500);
    }
  };

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setConfiguration(prev => ({
      ...prev,
      color
    }));
    
    // Mark colors as completed when selected
    if (!completedCategories.includes('colors')) {
      setCompletedCategories(prev => Array.from(new Set([...prev, 'colors'])));
      setTimeout(() => setActiveCategory('laminate'), 500);
    }
  };

  // Handle option selection
  const handleOptionToggle = (optionId: string) => {
    setConfiguration(prev => {
      const isSelected = prev.selectedOptions.includes(optionId);
      
      if (isSelected) {
        return {
          ...prev,
          selectedOptions: prev.selectedOptions.filter(id => id !== optionId)
        };
      } else {
        return {
          ...prev,
          selectedOptions: [...prev.selectedOptions, optionId]
        };
      }
    });

    // Add the current category to completed based on what type of option was selected
    if (!completedCategories.includes(activeCategory)) {
      setCompletedCategories(prev => {
        // Create a new array with unique values
        return Array.from(new Set([...prev, activeCategory]));
      });
      
      // Determine the next category to navigate to
      const currentIndex = CATEGORY_ORDER.indexOf(activeCategory);
      if (currentIndex >= 0 && currentIndex < CATEGORY_ORDER.length - 1) {
        const nextCategory = CATEGORY_ORDER[currentIndex + 1];
        setTimeout(() => setActiveCategory(nextCategory), 500);
      }
    }
  };

  // Email modal state
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  // Handle continue button click
  const handleContinue = () => {
    // Remove all validation checks and simply open the modal
    setEmailModalOpen(true);
  };
  
  // Handle email submission
  const handleEmailSubmit = (email: string) => {
    // Process the order with the email
    alert(`Thank you! Your custom van configuration has been sent to ${email}.\nTotal: $${calculateTotal().toLocaleString()}`);
    setEmailModalOpen(false);
  };

  // Render category content functions for each category
  const renderChassisOptions = () => (
    <div className="py-2 space-y-1 px-4">
      {chassisOptions.map(chassis => (
        <OptionItem 
          key={chassis.id} 
          isSelected={configuration.chassisId === chassis.id}
          name={chassis.name}
          price={chassis.priceAdjustment}
          onClick={(e) => {
            e.stopPropagation();
            handleChassisSelect(chassis.id);
          }}
        />
      ))}
    </div>
  );

  const renderModelOptions = () => (
    <div className="py-2 space-y-1 px-4">
      {modelPackages.map(model => (
        <OptionItem 
              key={model.id}
          isSelected={configuration.modelId === model.id}
          name={model.name}
          price={model.price}
          onClick={(e) => {
            e.stopPropagation();
            handleModelSelect(model.id);
          }}
        />
          ))}
        </div>
  );

  const renderColorOptions = () => (
    <div className="py-2 px-4 bg-white space-y-1 relative z-0">
      {colorOptions.map(color => (
        <OptionItem 
          key={color.id} 
          isSelected={configuration.color === color.id}
          name={color.name}
          onClick={(e) => {
            e.stopPropagation();
            handleColorSelect(color.id);
          }}
        />
          ))}
        </div>
  );

  const renderElectricalOptions = () => (
    <div className="py-2 px-4 bg-white space-y-1 relative z-0">
      {customizationOptions
        .filter(opt => opt.category === 'Electrical')
        .map(option => (
          <OptionItem 
            key={option.id} 
            isSelected={configuration.selectedOptions.includes(option.id)}
            name={option.name}
            price={option.price}
            onClick={(e) => {
              e.stopPropagation();
              handleOptionToggle(option.id);
            }}
          />
        ))}
    </div>
  );

  const renderLaminateOptions = () => (
    <div className="py-2 px-4 bg-white space-y-1 relative z-0">
      {laminateOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderUpholsteryOptions = () => (
    <div className="py-2 px-4 bg-white space-y-1 relative z-0">
      {upholsteryOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderHeatingOptions = () => (
    <div className="py-2 px-4 bg-white space-y-1 relative z-0">
      {heatingOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  // Add these render functions with the other render functions

  const renderExteriorOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {exteriorOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderStorageOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {storageOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  // Similarly add render functions for bathroom, kitchen, lighting, offgrid, and security
  // For brevity, I'll show just one more and then update the JSX to include all options

  const renderBathroomOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {bathroomOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderKitchenOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {kitchenOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderLightingOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {lightingOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderOffgridOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {offgridOptions.map(option => (
        <OptionItem 
          key={option.id} 
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  const renderSecurityOptions = () => (
    <div className="py-2 px-4 bg-white bg-opacity-90 space-y-1 relative z-0 ml-4">
      {securityOptions.map(option => (
        <OptionItem 
          key={option.id}
          isSelected={configuration.selectedOptions.includes(option.id)}
          name={option.name}
          price={option.price}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionToggle(option.id);
          }}
        />
      ))}
    </div>
  );

  // Update the getVanImagePath function to use the correct path
  const getVanImagePath = () => {
    // Use the imported image
    return testImage;
  };

  // Add a fade transition when switching images
  const [imageOpacity, setImageOpacity] = useState(1);

  // Update this effect to animate view changes
  useEffect(() => {
    // Fade out
    setImageOpacity(0);
    
    // Fade in after a brief delay
    const timer = setTimeout(() => {
      setImageOpacity(1);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [activeView, configuration.chassisId, configuration.color]);

  // Updated calculation function for progress percentage
  const calculateProgressPercentage = (): number => {
    // Count unique completed categories (no duplicates)
    const uniqueCompletedCategories = new Set(completedCategories);
    // Calculate as a percentage of total categories
    return Math.min(
      Math.round((uniqueCompletedCategories.size / CATEGORY_ORDER.length) * 100),
      100 // Ensure it doesn't exceed 100%
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#FDF8E2] via-white to-[#FCEFCA] text-gray-800 font-sans">
      <GlobalStyles />
      
      {/* Yellow header with logo and title */}
      <div className="bg-[#F8BC40] px-6 py-2 flex items-center">
        <img src={logo} alt="Chewy Logo" className="h-8 mr-3" />
        <h1 className="text-xl font-bold text-gray-800">Chewy Custom Builder</h1>
      </div>
      
      {/* Main content with improved layout - adjust flex-1 to account for header height */}
      <div className="flex flex-1 overflow-hidden h-[calc(100vh-48px)]">
        {/* Left sidebar - Categories */}
        <div className="w-96 flex flex-col overflow-hidden bg-white/50 backdrop-blur-sm border-r border-white/50">
          {/* Title with improved styling */}
          <div className="py-3 px-6 sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
            <h2 className="text-lg font-bold text-gray-800">Customize Your Van</h2>
            <p className="text-gray-600 text-xs mt-0.5">Select options to build your dream van</p>
          </div>
          
          {/* Categories with scrolling */}
          <div className="overflow-y-auto custom-scrollbar flex-1 pt-2 pb-6">
            {CATEGORY_ORDER.map((category) => (
              <div key={category} className="mb-1">
                <Category 
                  title={category === 'chassis' ? 'Vehicle Chassis' : 
                         category === 'electrical' ? 'Electrical & Connectivity' :
                         category === 'heating' ? 'Heating & Cooling' :
                         category === 'exterior' ? 'Exterior Features' :
                         category === 'storage' ? 'Storage Solutions' :
                         category === 'bathroom' ? 'Bathroom Options' :
                         category === 'kitchen' ? 'Kitchen Features' :
                         category === 'lighting' ? 'Lighting Systems' :
                         category === 'offgrid' ? 'Off-Grid Power' :
                         category === 'security' ? 'Security Features' :
                         category.charAt(0).toUpperCase() + category.slice(1)}
                  isActive={activeCategory === category}
                  isCompleted={completedCategories.includes(category)}
                  onClick={() => setActiveCategory(category)}
                />
                
                {/* Options drawer with animation */}
                {activeCategory === category && (
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-white/30">
                    {/* Render the appropriate options based on category */}
                    {category === 'chassis' && renderChassisOptions()}
                    {category === 'models' && renderModelOptions()}
                    {category === 'colors' && renderColorOptions()}
                    {category === 'electrical' && renderElectricalOptions()}
                    {category === 'laminate' && renderLaminateOptions()}
                    {category === 'upholstery' && renderUpholsteryOptions()}
                    {category === 'heating' && renderHeatingOptions()}
                    {category === 'exterior' && renderExteriorOptions()}
                    {category === 'storage' && renderStorageOptions()}
                    {category === 'bathroom' && renderBathroomOptions()}
                    {category === 'kitchen' && renderKitchenOptions()}
                    {category === 'lighting' && renderLightingOptions()}
                    {category === 'offgrid' && renderOffgridOptions()}
                    {category === 'security' && renderSecurityOptions()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center - Van Visualization with improved styling */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-opacity-5 pointer-events-none">
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          {/* View controls - moved closer to top for space efficiency */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-md z-10">
            <ToggleGroup type="single" value={activeView} onValueChange={(value) => value && setActiveView(value as ViewType)}>
              <ToggleGroupItem value="interior" aria-label="Interior View">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
                Interior
              </ToggleGroupItem>
              <ToggleGroupItem value="exterior" aria-label="Exterior View">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 8.757a.5.5 0 01.707 0L10 12.879l4.121-4.122a.5.5 0 11.707.707l-4.475 4.475a.5.5 0 01-.707 0L5.172 9.464a.5.5 0 010-.707z" clipRule="evenodd" />
                </svg>
                Exterior
              </ToggleGroupItem>
              <ToggleGroupItem value="rear" aria-label="Rear View">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Rear
              </ToggleGroupItem>
              <ToggleGroupItem value="reartop" aria-label="Rear Top View">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                Top
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6 pt-14 pb-20">
            {/* Enhanced Van Visualization */}
            <VanImageVisualization 
              imagePath={getVanImagePath()}
              view={activeView}
              opacity={imageOpacity}
            />
                    </div>
          
          {/* Updated configuration progress at the bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-md p-3 rounded-xl w-2/3 max-w-lg">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-[#F8BC40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-sm">Configuration Progress</span>
              </div>
              <span className="font-medium text-sm text-[#F8BC40]">
                {calculateProgressPercentage()}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#F8BC40] h-2 rounded-full transition-all duration-500" 
                style={{ width: `${calculateProgressPercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right sidebar - Price summary */}
        <div className="w-96 flex flex-col self-start bg-white/30 backdrop-blur-sm border-l border-white/50 h-full">
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Build Summary</h2>
            <p className="text-gray-600 text-xs mb-2">Your custom van configuration</p>
            <Separator className="mb-3" />
          </div>
          
          {/* Scrollable content area for cards */}
          <div className="overflow-y-auto custom-scrollbar flex-1 px-4 pb-4">
            {/* Remove Configuration Summary box and keep only Price Summary */}
            <div className="slide-in">
              <Card className="shadow-md border border-gray-100">
                <CardHeader className="pb-2 bg-gradient-to-r from-white to-gray-50 py-3">
                  <CardTitle className="text-base flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#F8BC40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Price Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Chassis:</span>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-sm">
                        {chassisOptions.find(c => c.id === configuration.chassisId)?.name || 'Not selected'}
                      </span>
                      <span className="font-semibold text-[#F8BC40]">
                        ${getVehicleChassisPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Base Package:</span>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-sm">
                        {modelPackages.find(m => m.id === configuration.modelId)?.name || 'Not selected'}
                      </span>
                      <span className="font-semibold text-[#F8BC40]">
                        ${getBasePackagePrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Color:</span>
                    <span className="font-medium">
                      {colorOptions.find(c => c.id === configuration.color)?.name || 'Not selected'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Upgrades ({configuration.selectedOptions.length}):</span>
                    <span className="font-semibold text-[#F8BC40]">${getUpgradesTotal().toLocaleString()}</span>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-bold text-gray-800 text-lg">Total:</span>
                    <span className="font-bold text-xl text-[#F8BC40]">${calculateTotal().toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action buttons */}
          <div className="p-4 border-t border-gray-200/50 bg-white/40">
            <Button
              className="w-full mb-3 bg-[#F8BC40] hover:bg-[#E6AB30] text-white"
              onClick={() => setEmailModalOpen(true)}
            >
              <span className="mr-2">Save Configuration</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </Button>
            
              <Button
              variant="outline"
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700"
              onClick={() => window.location.reload()}
              >
              Reset Configuration
              </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Email Modal */}
      <EmailModal 
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
};