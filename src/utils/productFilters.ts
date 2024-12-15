import { Product, ProductFilter } from '../types';

export function filterProducts(
  products: Product[],
  filters: ProductFilter,
  searchQuery: string
): Product[] {
  return products.filter((product) => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Price filter
    if (
      product.price < filters.minPrice ||
      (filters.maxPrice > 0 && product.price > filters.maxPrice)
    ) {
      return false;
    }

    // Benefits filter
    if (
      filters.benefits.length > 0 &&
      !filters.benefits.some((benefit) => product.benefits.includes(benefit))
    ) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.benefits.some((benefit) =>
          benefit.toLowerCase().includes(searchLower)
        )
      );
    }

    return true;
  });
}