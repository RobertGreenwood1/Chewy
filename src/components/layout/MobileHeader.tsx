import React from 'react';
import { Switch } from '../ui/switch';

interface MobileHeaderProps {
  vehiclePrice: number;
  packagePrice: number;
  upgradesTotal: number;
  totalPrice: number;
  progress: number; // 0-100 representing completion percentage
  hasOwnVan: boolean;
  onHasOwnVanToggle: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  vehiclePrice,
  packagePrice,
  upgradesTotal,
  totalPrice,
  progress,
  hasOwnVan,
  onHasOwnVanToggle
}) => {
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
      <div className="mobile-header">
        <div className={`mobile-header-box shadow-sm ${hasOwnVan ? 'text-gray-400 line-through bg-gray-100' : ''}`}>
          <div className="mobile-header-box-label">VEHICLE</div>
          <div className="mobile-header-box-value">{formatPrice(vehiclePrice)}</div>
        </div>
        <div className="mobile-header-box shadow-sm">
          <div className="mobile-header-box-label">PACKAGE</div>
          <div className="mobile-header-box-value">{formatPrice(packagePrice)}</div>
        </div>
        <div className="mobile-header-box shadow-sm">
          <div className="mobile-header-box-label">UPGRADES</div>
          <div className="mobile-header-box-value">{formatPrice(upgradesTotal)}</div>
        </div>
        <div className="mobile-header-box shadow-sm">
          <div className="mobile-header-box-label">TOTAL</div>
          <div className="mobile-header-box-value font-bold">{formatPrice(totalPrice)}</div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-medium text-gray-700">Configuration Progress</span>
        </div>
        <span className="text-xs font-medium text-green-600">{progress}%</span>
      </div>
      <div className="mobile-progress">
        <div 
          className="mobile-progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <label htmlFor="mobile-own-van" className="text-sm font-medium text-gray-700">
          I already have a van
        </label>
        <Switch
          id="mobile-own-van"
          checked={hasOwnVan}
          onCheckedChange={onHasOwnVanToggle}
          aria-label="Toggle if you already own a van"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
