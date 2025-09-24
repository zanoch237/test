import React from 'react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

export default function BlogHero() {
  return (
    <div className="relative">
      {/* Hero Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 shadow-xl">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Woman in orange sweater"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Design In The Age Of AI: How to adapt lazily.
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed">
              Win lazily, you can build and launch your next Gen Z just stop caring about anything else.
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
                </div>
                <span className="text-white text-sm font-medium">AcuityUI_Wh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-300" />
                <span className="text-gray-200 text-sm">Jan 15, 2025</span>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                Design System
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                Sketch & CS
              </span>
            </div>
          </div>
          
          {/* Read More */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}