import React from 'react';
import { Search } from 'lucide-react';

interface FilterTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function FilterTabs({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }: FilterTabsProps) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'gen-z', label: 'Gen Z Stuff' },
    { id: 'ui', label: 'User Interface' },
    { id: 'ux', label: 'User Experience' },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-80">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search blog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}