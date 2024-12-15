import React from 'react';
import { ProductSorting } from '../../types/product';

interface ProductSortProps {
  sorting: ProductSorting;
  onSortChange: (sorting: ProductSorting) => void;
}

export default function ProductSort({ sorting, onSortChange }: ProductSortProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm text-gray-600">Sort by:</label>
      <select
        value={`${sorting.field}-${sorting.direction}`}
        onChange={(e) => {
          const [field, direction] = e.target.value.split('-') as [ProductSorting['field'], ProductSorting['direction']];
          onSortChange({ field, direction });
        }}
        className="border rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500"
      >
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="rating-desc">Highest Rated</option>
      </select>
    </div>
  );
}