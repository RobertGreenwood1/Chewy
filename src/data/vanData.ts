import { VanModel, ChassisOption, CustomizationOption } from '../types';
import { vanLayerImages } from './vanImageData';

// Define default selections used by models
const defaultModelSelections = {
  wallColorId: 'wall-white',
  cabinetId: 'cabinet-white',
  counterId: 'counter-walnut',
  hasBed: true,
  hasSeats: true,
};

// Define Van Models
const vanModels: VanModel[] = [
  {
    id: 'pedernales', 
    name: 'Pedernales',
    basePrice: 85000,
    price: 85000, 
    description: 'Perfect for weekend warriors and outdoor enthusiasts',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80',
    items: [], // Placeholder for potential future model-specific items
    chassisSizes: ['sprinter144', 'sprinter170'],
    defaultSelections: defaultModelSelections,
  },
  {
    id: 'rio-grande', 
    name: 'Rio Grande',
    basePrice: 95000,
    price: 95000,
    description: 'Built for extended journeys and full-time living',
    imageUrl: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80',
    items: [],
    chassisSizes: ['sprinter144', 'sprinter170'],
    defaultSelections: defaultModelSelections,
  },
  {
    id: 'san-saba', 
    name: 'San Saba', 
    basePrice: 80000, 
    price: 80000,
    description: 'Streamlined design focused on essentials',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80', 
    items: [],
    chassisSizes: ['sprinter144'], 
    defaultSelections: { wallColorId: 'wall-white', cabinetId: 'cabinet-white', counterId: 'counter-white', hasBed: true, hasSeats: true }, 
  }
];

// Define Chassis Options
const chassisOptions: ChassisOption[] = [
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

// Define Customization Options
const customizationOptions: CustomizationOption[] = [
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

// Define Color Options
const colorOptions = [
  { id: 'white', name: 'Arctic White', hex: '#FFFFFF' },
  { id: 'silver', name: 'Metallic Silver', hex: '#C0C0C0' },
  { id: 'black', name: 'Midnight Black', hex: '#222222' },
  { id: 'blue', name: 'Ocean Blue', hex: '#1E3D59' }
];

// Define Wall Color Options (Ensure only White and Finished exist)
export const wallColorOptions: CustomizationOption[] = [
  {
    id: 'wall-white',
    category: 'wallcolor',
    name: 'Painted Cedar', 
    price: 0, 
    description: 'Clean and bright painted walls.',
  },
  {
    id: 'wall-finished',
    category: 'wallcolor',
    name: 'Finished Cedar', 
    price: 1200,
    description: 'Natural wood finish for a warm, rustic look.',
  }
];

// Define Cabinet Color Options
export const cabinetOptions: CustomizationOption[] = [
  { id: 'cabinet-white', name: 'White', price: 0, imageUrl: '/assets/options/cabinet-white.png', category: 'visual', description: 'Standard white cabinets.' },
  { id: 'cabinet-green', name: 'Green', price: 300, imageUrl: '/assets/van-layers/170-pedernales/70.PD._0000s_0003s_0001_ped-cabinets-green.png', category: 'visual', description: 'Stylish green cabinets.' },
];

// Define Countertop Options
export const counterOptions: CustomizationOption[] = [
  { id: 'counter-white', name: 'White Laminate', price: 0, imageUrl: '/assets/options/counter-white.png', category: 'visual', description: 'Durable white laminate countertop.' },
  { id: 'counter-walnut', name: 'Walnut Butcher Block', price: 450, imageUrl: '/assets/options/counter-walnut.png', category: 'visual', description: 'Classic walnut butcher block.' },
  { id: 'counter-bamboo', name: 'Bamboo', price: 550, imageUrl: '/assets/options/counter-bamboo.png', category: 'visual', description: 'Eco-friendly bamboo countertop.' },
];

// Placeholder Electrical Options
const electricalOptions: CustomizationOption[] = [
  { id: 'electrical-solar-200w', category: 'electrical', name: '200W Solar Package', price: 2800, description: 'Provides off-grid power.' },
  { id: 'connectivity-weboost', category: 'electrical', name: 'weBoost Cell Signal Booster', price: 650, description: 'Enhances cell signal.' },
  { id: 'connectivity-starlink', category: 'electrical', name: 'Starlink Satellite Internet', price: 2500, description: 'High-speed internet anywhere.' }
];

// Placeholder Exterior Options
const exteriorOptions: CustomizationOption[] = [
  { id: 'exterior-awning', category: 'exterior', name: 'Manual Awning', price: 950, description: 'Provides shade and shelter.' },
  { id: 'exterior-roof-rack', category: 'exterior', name: 'Basic Roof Rack', price: 700, description: 'For carrying extra gear.' },
];

// Placeholder Bathroom Options
const bathroomOptions: CustomizationOption[] = [
  { id: 'bathroom-portable-toilet', category: 'bathroom', name: 'Compost Toilet', price: 150, description: 'Simple and removable.' },
  { id: 'bathroom-outdoor-shower', category: 'bathroom', name: 'Outdoor Shower Kit', price: 300, description: 'External shower hookup.' },
];

// Placeholder Kitchen Options
const kitchenOptions: CustomizationOption[] = [
  { id: 'kitchen-sink-pump', category: 'kitchen', name: 'Sink with Manual Pump', price: 400, description: 'Basic water system.' },
  { id: 'kitchen-cooler-fridge', category: 'kitchen', name: '12V Cooler Fridge', price: 600, description: 'Efficient refrigeration.' },
];

// Placeholder Lighting Options
const lightingOptions: CustomizationOption[] = [
  { id: 'lighting-standard', category: 'lighting', name: 'Standard Lighting Package', price: 500, description: 'Standard overhead LED lighting.' },
  { id: 'lighting-premium', category: 'lighting', name: 'Premium Lighting Package', price: 950, description: 'Dimmable, multi-zone lighting.' },
  { id: 'lighting-exterior', category: 'lighting', name: 'Exterior Lighting Kit', price: 400, description: 'Awning and underbody lights.' },
];

// Placeholder Power Options (distinct from electrical components)
const powerOptions: CustomizationOption[] = [
  { id: 'power-agm-100ah', category: 'power', name: '100Ah AGM Battery', price: 300, description: 'Standard deep-cycle battery.' },
  { id: 'power-lithium-100ah', category: 'power', name: '100Ah Lithium Battery', price: 900, description: 'Lightweight, high-performance.' },
];

// Placeholder Upholstery Options
const upholsteryOptions: CustomizationOption[] = [
 { id: 'upholstery-cloth', category: 'upholstery', name: 'Standard Cloth', price: 800, description: 'Durable fabric upholstery.' },
 { id: 'upholstery-vinyl', category: 'upholstery', name: 'Marine Grade Vinyl', price: 1200, description: 'Water-resistant and easy to clean.' },
];

// Placeholder Heating Options
const heatingOptions: CustomizationOption[] = [
  { id: 'heating-diesel-velit-gas', category: 'heating', name: 'Diesel/Velit/Gas Heater', price: 1800, description: 'Integrated diesel, Velit, or gas-powered heater.' }, 
  { id: 'heating-none', category: 'heating', name: 'No Heater', price: 0, description: 'No heating system installed.' } 
];

export {
  vanModels,
  chassisOptions,
  customizationOptions,
  colorOptions,
  vanLayerImages,
  electricalOptions,
  exteriorOptions,
  bathroomOptions,
  kitchenOptions,
  lightingOptions,
  powerOptions,
  upholsteryOptions,
  heatingOptions,
};