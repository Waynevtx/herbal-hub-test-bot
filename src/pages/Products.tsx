import React, { useState, useMemo } from 'react';
import CategorySidebar from '../components/products/CategorySidebar';
import ProductFilters from '../components/products/ProductFilters';
import SearchBar from '../components/products/SearchBar';
import ProductSort from '../components/products/ProductSort';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/products/ProductModal';
import MobileMenu from '../components/MobileMenu';
import { Product, ProductFilter, ProductSorting } from '../types';
import { products } from '../data/products';
import { filterProducts } from '../utils/productFilters';
import { sortProducts } from '../utils/productSort';
import '../styles/animations.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sorting, setSorting] = useState<ProductSorting>({
    field: 'name',
    direction: 'asc'
  });
  const [filters, setFilters] = useState<ProductFilter>({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    benefits: [],
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = filterProducts(products, filters, searchQuery);
    return sortProducts(filtered, sorting);
  }, [filters, searchQuery, sorting]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Our Herbal Collection</h1>
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              Menu
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:flex-1">
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
            <ProductSort sorting={sorting} onSortChange={setSorting} />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block space-y-6">
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setFilters(prev => ({ ...prev, category }));
              }}
            />
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}