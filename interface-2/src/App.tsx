import React, { useState } from 'react';
import Header from './components/Header';
import BlogHero from './components/BlogHero';
import FilterTabs from './components/FilterTabs';
import BlogGrid from './components/BlogGrid';
import Sidebar from './components/Sidebar';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <span className="text-blue-600 text-sm font-medium">Read Our Blog</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Browse Our Resources
          </h1>
          <p className="text-gray-600 max-w-2xl">
            We provide tips and resources from industry leaders. For real.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <BlogHero />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FilterTabs
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <BlogGrid 
              activeFilter={activeFilter}
              searchQuery={searchQuery}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;