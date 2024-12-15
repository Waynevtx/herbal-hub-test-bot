import React from 'react';
import { ProductFilter } from '../../types/product';

interface ProductFiltersProps {
  filters: ProductFilter;
  onFilterChange: (filters: ProductFilter) => void;
}

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const benefits = [
    'Digestive Health',
    'Immune Support',
    'Stress Relief',
    'Energy Boost',
    'Sleep Aid',
    'Detoxification'
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Price Range</label>
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange({
                ...filters,
                minPrice: Number(e.target.value)
              })}
              className="w-24 px-2 py-1 border rounded-md"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({
                ...filters,
                maxPrice: Number(e.target.value)
              })}
              className="w-24 px-2 py-1 border rounded-md"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Health Benefits</label>
          <div className="space-y-2 mt-1">
            {benefits.map((benefit) => (
              <label key={benefit} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.benefits.includes(benefit)}
                  onChange={(e) => {
                    const newBenefits = e.target.checked
                      ? [...filters.benefits, benefit]
                      : filters.benefits.filter((b) => b !== benefit);
                    onFilterChange({ ...filters, benefits: newBenefits });
                  }}
                  className="rounded text-emerald-600"
                />
                <span className="ml-2 text-sm text-gray-600">{benefit}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}