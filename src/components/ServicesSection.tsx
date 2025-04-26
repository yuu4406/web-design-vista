import React from "react";
import { Layout, Code, Smartphone, Globe, PenTool, BarChart3, Leaf } from "lucide-react";

const services = [
  {
    icon: <Layout className="h-8 w-8 text-[#3B82F6]" />,
    title: "UI/UX Design",
    description: "Beautiful interfaces with optimized user experience."
  },
  {
    icon: <Code className="h-8 w-8 text-[#3B82F6]" />,
    title: "Web Development",
    description: "Fast and efficient website development with modern technologies."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#3B82F6]" />,
    title: "Responsive Design",
    description: "Ensuring websites work perfectly on all devices from desktop to mobile."
  },
  {
    icon: <Globe className="h-8 w-8 text-[#3B82F6]" />,
    title: "Web Applications",
    description: "Development of web applications serving specific business needs."
  },
  {
    icon: <PenTool className="h-8 w-8 text-[#3B82F6]" />,
    title: "Graphic Design",
    description: "Design of logos, banners and graphic elements for your website."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#3B82F6]" />,
    title: "SEO Optimization",
    description: "Optimizing websites to achieve high rankings on search engines."
  }
];

const flowerImg = "/public/lovable-uploads/2947a3e6-516a-48da-b7de-1f587b1d207d.png";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 flex justify-center items-center bg-[#F6F7FA] transition-colors duration-500 min-h-[560px]"
    >
      {/* Left leaf */}
      <div className="pointer-events-none select-none absolute left-0 top-4 md:top-12 w-[160px] md:w-[220px] opacity-30 z-0 animate-[growIn_1.5s_ease-out]">
        <Leaf 
          className="w-full h-full text-[#3B82F6]"
          style={{
            filter: "drop-shadow(0 4px 24px rgba(59,130,246,0.08))",
            mixBlendMode: "multiply",
            transform: "scale(0)",
            animation: "growLeaf 2s ease-out forwards",
          }}
        />
      </div>

      {/* Right leaf */}
      <div className="pointer-events-none select-none absolute right-0 bottom-4 md:bottom-12 w-[160px] md:w-[220px] opacity-30 z-0 animate-[growIn_1.5s_ease-out]">
        <Leaf 
          className="w-full h-full text-[#3B82F6]"
          style={{
            transform: "scaleX(-1) rotate(6deg) scale(0)",
            filter: "drop-shadow(0 4px 24px rgba(59,130,246,0.08))",
            mixBlendMode: "multiply",
            animation: "growLeafReverse 2.5s ease-out forwards",
          }}
        />
      </div>

      <style>
        {`
        @keyframes growLeaf {
          0% {
            transform: scale(0) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 0.3;
          }
        }
        
        @keyframes growLeafReverse {
          0% {
            transform: scaleX(-1) rotate(6deg) scale(0) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scaleX(-1) rotate(6deg) scale(1) translateY(0);
            opacity: 0.3;
          }
        }
        `}
      </style>

      <div className="w-full flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Providing complete web design and development services for your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
