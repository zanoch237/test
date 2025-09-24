import React from 'react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export default function BlogCard({ title, excerpt, category, author, date, image, tags }: BlogCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={16} className="text-gray-700" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2 block">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Author and Date */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={12} className="text-gray-500" />
              </div>
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}