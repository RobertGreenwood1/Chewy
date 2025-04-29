export interface VanModel {
  id: 'pedernales' | 'rio-grande' | 'san-saba'; // Enforce specific layout IDs
  name: string;
  basePrice: number;
  price: number; // Updated: Assuming this is calculated or might be same as basePrice initially
  description: string;
  imageUrl: string;
  items: CustomizationOption[];
  chassisSizes: string[]; // e.g., ['sprinter144', 'sprinter170']
  defaultSelections: {
    wallColorId: string;
    cabinetId: string;
    counterId: string;
    hasBed: boolean;
    hasSeats: boolean;
  };
}

export interface ChassisOption {
  id: string;
  name: string;
  priceAdjustment: number;
  imageUrl: string;
}

export interface CustomizationOption {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

export interface VanConfiguration {
  [key: string]: string | string[] | undefined;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface CabinetOption {
  id: string;
  name: string;
  price: number;
}

export type CategoryType = 
  'chassis'
  | 'models'
  | 'wallcolor'
  | 'cabinets'
  | 'electrical'
  | 'heating'
  | 'exterior'
  | 'bathroom'
  | 'kitchen'
  | 'lighting'
  | 'power';

export const CATEGORY_ORDER: CategoryType[] = [
  'chassis',
  'models',
  'wallcolor',
  'cabinets',
  'electrical',
  'heating',
  'exterior',
  'bathroom',
  'kitchen',
  'lighting',
  'power'
];

// Interface for individual customization options