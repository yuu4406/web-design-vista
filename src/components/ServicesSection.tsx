
import React from "react";
import { Layout, Code, Smartphone, Globe, PenTool, BarChart3 } from "lucide-react";

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

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 flex justify-center items-center bg-[#F6F7FA] transition-colors duration-500 min-h-[560px]"
    >
      <style>
        {`
        .services-section-title {
          font-size: 2.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          color: #232323;
          letter-spacing: -1px;
          margin-bottom: 0.7rem;
          text-align: center;
        }
        .services-section-desc {
          color: #65696D;
          font-size: 1.14rem;
          font-weight: 500;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 0 6vw;
          width: 100%;
          max-width: 990px;
          margin: 0 auto;
        }
        @media (min-width: 600px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 38px;
          }
        }
        .service-card {
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 4px 24px 0 rgba(60,80,188,0.05), 0 1.5px 3px rgba(60,90,180,0.07);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 32px 26px 28px 26px;
          transition: box-shadow 0.28s cubic-bezier(.34,1.5,.64,1), transform 0.38s cubic-bezier(.28,.82,.64,1), background 0.23s;
          position: relative;
          min-height: 212px;
        }
        .service-card:hover {
          box-shadow: 0 7px 32px 0 rgba(60,90,180,0.10);
          transform: translateY(-4px) scale(1.03);
          background: #f9faff;
        }
        .service-icon {
          background: #e5ebfc;
          border-radius: 16px;
          padding: 12px;
          margin-bottom: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .service-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #1A1B23;
          margin-bottom: 0.66rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: -0.5px;
        }
        .service-desc {
          font-size: 1.04rem;
          color: #717892;
          letter-spacing: 0px;
          font-weight: 500;
        }
        `}
      </style>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="services-section-title">Our Services</div>
        <div className="services-section-desc mb-8">
          Providing complete web design and development services for your business
        </div>
        <div className="w-full max-w-[1200px] px-4 mb-8">
          <img 
            src="/lovable-uploads/dd513f70-9ec3-4f42-ae9b-c3a7cbae9727.png" 
            alt="Rua Tech Services" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card group" key={index}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
