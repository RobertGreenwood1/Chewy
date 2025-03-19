export interface VanModel {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  imageUrl: string;
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
  modelId: string;
  chassisId: string;
  color: string;
  selectedOptions: string[];
}