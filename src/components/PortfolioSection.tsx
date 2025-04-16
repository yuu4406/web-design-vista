
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const categories = ['Tất cả', 'E-Commerce', 'Doanh nghiệp', 'Landing Page', 'Ứng dụng Web'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Thời Trang',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    description: 'Website bán hàng thời trang với giao diện hiện đại và tối ưu trải nghiệm người dùng.'
  },
  {
    id: 2,
    title: 'Công ty Bất Động Sản',
    category: 'Doanh nghiệp',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    description: 'Website giới thiệu dự án bất động sản với thiết kế sang trọng.'
  },
  {
    id: 3,
    title: 'Landing Page Sản Phẩm',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    description: 'Landing page giới thiệu sản phẩm mới với tỷ lệ chuyển đổi cao.'
  },
  {
    id: 4,
    title: 'Hệ Thống Quản Lý',
    category: 'Ứng dụng Web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    description: 'Ứng dụng web quản lý nhân sự và tài chính cho doanh nghiệp.'
  },
  {
    id: 5,
    title: 'Cửa Hàng Điện Tử',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'Website bán hàng điện tử với đầy đủ tính năng giỏ hàng, thanh toán.'
  },
  {
    id: 6,
    title: 'Website Công ty Luật',
    category: 'Doanh nghiệp',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80',
    description: 'Website công ty luật với giao diện chuyên nghiệp, uy tín.'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredProjects = activeCategory === 'Tất cả'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dự Án Tiêu Biểu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các dự án tiêu biểu mà chúng tôi đã thực hiện
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
            Xem thêm dự án
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
