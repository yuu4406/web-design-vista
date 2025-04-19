
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'E-Commerce', 'Business', 'Landing Page', 'Web Application'];

const projects = [
  {
    id: 1,
    title: 'Fashion E-Commerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    description: 'Fashion e-commerce website with modern interface and optimized user experience.'
  },
  {
    id: 2,
    title: 'Real Estate Company',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    description: 'Real estate project presentation website with elegant design.'
  },
  {
    id: 3,
    title: 'Product Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    description: 'New product landing page with high conversion rate.'
  },
  {
    id: 4,
    title: 'Management System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    description: 'HR and finance management web application for businesses.'
  },
  {
    id: 5,
    title: 'Electronics Store',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'Electronics e-commerce website with cart and payment features.'
  },
  {
    id: 6,
    title: 'Law Firm Website',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80',
    description: 'Professional and reputable law firm website.'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the featured projects we have completed
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"} 
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-design-blue" : "border-design-blue text-design-blue"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{project.description}</p>
                <div className="flex items-center">
                  <span className="bg-design-purple text-white text-xs px-3 py-1 rounded-full">{project.category}</span>
                  <Button variant="ghost" className="ml-auto text-white p-2">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-design-blue text-design-blue hover:bg-design-blue hover:text-white">
            View more projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
