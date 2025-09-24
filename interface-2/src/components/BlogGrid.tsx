import React from 'react';
import BlogCard from './BlogCard';

interface BlogGridProps {
  activeFilter: string;
  searchQuery: string;
}

export default function BlogGrid({ activeFilter, searchQuery }: BlogGridProps) {
  const blogPosts = [
    {
      id: 1,
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      category: "UI/UX Design",
      author: "Design Team",
      date: "Jan 15, 2025",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Design", "UI/UX"]
    },
    {
      id: 2,
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Frontend",
      author: "Dev Team",
      date: "Jan 12, 2025",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "JavaScript"]
    },
    {
      id: 3,
      title: "Blog post title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Cognitive",
      author: "Research Team",
      date: "Jan 10, 2025",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Research", "UX"]
    }
  ];

  // Filter posts 
  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'all' || 
      post.category.toLowerCase().includes(activeFilter.replace('-', ' ')) ||
      post.tags.some(tag => tag.toLowerCase().includes(activeFilter.replace('-', ' ')));
    
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          category={post.category}
          author={post.author}
          date={post.date}
          image={post.image}
          tags={post.tags}
        />
      ))}
    </div>
  );
}