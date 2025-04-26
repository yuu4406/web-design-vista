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

const flowerImg = "/public/lovable-uploads/2947a3e6-516a-48da-b7de-1f587b1d207d.png";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 flex justify-center items-center bg-[#F6F7FA] transition-colors duration-500 min-h-[560px]"
    >
      {/* BG hoa lá bên trái */}
      <img
        src={flowerImg}
        className="pointer-events-none select-none absolute left-0 top-4 md:top-12 w-[160px] md:w-[220px] opacity-30 z-0 animate-[growIn_1.5s_ease-out] hover:scale-110 transition-transform duration-700"
        style={{
          filter:
            "drop-shadow(0 4px 24px rgba(59,130,246,0.08)) drop-shadow(0 0 0 #3B82F6)",
          mixBlendMode: "multiply",
          animation: "floatLeaves 6s ease-in-out infinite",
        }}
        alt=""
        aria-hidden="true"
      />
      {/* BG hoa lá bên phải */}
      <img
        src={flowerImg}
        className="pointer-events-none select-none absolute right-0 bottom-4 md:bottom-12 w-[160px] md:w-[220px] opacity-30 z-0 animate-[growIn_1.5s_ease-out] hover:scale-110 transition-transform duration-700"
        style={{
          transform: "scaleX(-1) rotate(6deg)",
          filter:
            "drop-shadow(0 4px 24px rgba(59,130,246,0.08)) drop-shadow(0 0 0 #3B82F6)",
          mixBlendMode: "multiply",
          animation: "floatLeavesReverse 7s ease-in-out infinite",
        }}
        alt=""
        aria-hidden="true"
      />
      <style>
        {`
        @keyframes growIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 0.3;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes floatLeaves {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        @keyframes floatLeavesReverse {
          0% {
            transform: scaleX(-1) rotate(6deg) translateY(0);
          }
          50% {
            transform: scaleX(-1) rotate(9deg) translateY(-15px);
          }
          100% {
            transform: scaleX(-1) rotate(6deg) translateY(0);
          }
        }

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
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        <div className="services-section-title">Our Services</div>
        <div className="services-section-desc">
          Providing complete web design and development services for your business
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
