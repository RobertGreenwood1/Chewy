import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface ConfigurationStepProps {
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export const ConfigurationStep: React.FC<ConfigurationStepProps> = ({
  title,
  description,
  isActive,
  isCompleted,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-4 rounded-lg transition-colors text-left flex items-center justify-between',
        {
          'bg-blue-50 border-2 border-blue-500': isActive,
          'bg-gray-50 border-2 border-gray-200 hover:border-gray-300': !isActive,
          'bg-green-50 border-2 border-green-500': isCompleted && !isActive,
        }
      )}
    >
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <ChevronRight className={cn(
        'w-5 h-5 transition-transform',
        { 'transform rotate-90': isActive }
      )} />
    </button>
  );
};