import React from 'react';
import { Calendar, User, TrendingUp } from 'lucide-react';

export default function Sidebar() {
  const recentPosts = [
    {
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Denys Rish",
      date: "Jan 15",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Month",
      date: "Jan 12",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "US",
      date: "Jan 10",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Recent Posts Section */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp size={20} className="text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recent</h3>
        </div>
        
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={8} className="text-gray-500" />
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}