import React from 'react';
import { cn } from '../../lib/utils';
import { VanModel } from '../../types';

type CategoryType = 
  | 'chassis' 
  | 'models'
  | 'wallcolor'
  | 'electrical' 
  | 'heating'
  | 'exterior' 
  | 'bathroom' 
  | 'kitchen' 
  | 'lighting'
  | 'power'
  | 'cabinets';

interface CategoryOption {
  id: string;
  name: string;
  price: number;
  category?: string;
}

interface MobileNavigationProps {
  categories: {
    type: CategoryType;
    title: string;
    isCompleted: boolean;
    isLocked: boolean;
    options: CategoryOption[];
  }[];
  selectedOptions: string[];
  onOptionSelect: (optionId: string, categoryType: CategoryType) => void;
  activeCategory: CategoryType | null;
  setActiveCategory: (category: CategoryType | null) => void;
  selectedModel: VanModel | null;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  categories,
  selectedOptions,
  onOptionSelect,
  activeCategory,
  setActiveCategory,
  selectedModel
}) => {
  // Function to determine if an option is selected (utility function)
  const isOptionSelected = (optionId: string): boolean => {
    return selectedOptions.includes(optionId);
  };

  const toggleCategory = (categoryType: CategoryType) => {
    if (activeCategory === categoryType) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryType);
    }
  };

  // Format price to USD
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="mobile-only">
      {categories.map((category) => (
        <div key={category.type} className="mobile-config-section">
          <div 
            className={cn(
              'mobile-config-header',
              category.isCompleted && 'completed',
              activeCategory === category.type && 'active',
              category.isLocked && 'locked'
            )}
            onClick={() => !category.isLocked && toggleCategory(category.type)}
          >
            <div className="mobile-config-header-title">{category.title}</div>
            <div>
              {/* Add Status Icon */}
              {category.isLocked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ) : category.isCompleted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : activeCategory === category.type ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>
          <div className={cn(
            'mobile-config-content',
            activeCategory === category.type && 'open'
          )}>
            {category.options.map((option) => {
              const isSelected = category.type === 'models' 
                ? option.id === selectedModel?.id 
                : isOptionSelected(option.id);

              return (
                <div 
                  key={option.id}
                  className={cn(
                    'p-3 my-1 rounded-md transition-all shadow-sm cursor-pointer',
                    isSelected 
                      ? 'bg-[#F8BC40] text-white' 
                      : 'bg-white hover:bg-gray-50 border border-gray-100'
                  )}
                  onClick={() => onOptionSelect(option.id, category.type)}
                >
                  <div className="flex justify-between items-center">
                    <div>{option.name}</div>
                    <div>{formatPrice(option.price)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileNavigation;
