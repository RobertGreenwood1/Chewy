import { VanModel, ChassisOption, CustomizationOption } from '../types';

export const vanModels: VanModel[] = [
  {
    id: 'adventure',
    name: 'Adventure Series',
    basePrice: 85000,
    description: 'Perfect for weekend warriors and outdoor enthusiasts',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80'
  },
  {
    id: 'expedition',
    name: 'Expedition Series',
    basePrice: 95000,
    description: 'Built for extended journeys and full-time living',
    imageUrl: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80'
  }
];

export const chassisOptions: ChassisOption[] = [
  {
    id: 'sprinter144',
    name: 'Sprinter 144"',
    priceAdjustment: 70000,
    imageUrl: 'https://images.unsplash.com/photo-1543465077-db45d761642e?auto=format&fit=crop&q=80'
  },
  {
    id: 'sprinter170',
    name: 'Sprinter 170"',
    priceAdjustment: 73000,
    imageUrl: 'https://images.unsplash.com/photo-1626188593355-99b8a75a9de8?auto=format&fit=crop&q=80'
  }
];

export const customizationOptions: CustomizationOption[] = [
  {
    id: 'solar',
    category: 'Electrical',
    name: 'Solar Power System',
    price: 3500,
    description: '400W solar panel system with lithium batteries',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  },
  {
    id: 'kitchen',
    category: 'Interior',
    name: 'Deluxe Kitchen',
    price: 4500,
    description: 'Full kitchen with induction cooktop and refrigerator',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80'
  },
  {
    id: 'bathroom',
    category: 'Interior',
    name: 'Bathroom Package',
    price: 3800,
    description: 'Compact bathroom with shower and composting toilet',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80'
  }
];

export const colorOptions = [
  { id: 'white', name: 'Arctic White', hex: '#FFFFFF' },
  { id: 'silver', name: 'Metallic Silver', hex: '#C0C0C0' },
  { id: 'black', name: 'Midnight Black', hex: '#222222' },
  { id: 'blue', name: 'Ocean Blue', hex: '#1E3D59' }
];