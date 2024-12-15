import { Product, ProductSorting } from '../types';

export function sortProducts(products: Product[], sorting: ProductSorting): Product[] {
  return [...products].sort((a, b) => {
    const multiplier = sorting.direction === 'asc' ? 1 : -1;
    
    switch (sorting.field) {
      case 'name':
        return multiplier * a.name.localeCompare(b.name);
      case 'price':
        return multiplier * (a.price - b.price);
      case 'rating':
        return multiplier * (a.rating - b.rating);
      default:
        return 0;
    }
  });
}