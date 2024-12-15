export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ProductFilter {
  category: string;
  minPrice: number;
  maxPrice: number;
  benefits: string[];
}

export interface ProductSorting {
  field: 'price' | 'name' | 'rating';
  direction: 'asc' | 'desc';
}