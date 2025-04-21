
import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);

  // Xác định trạng thái hover (desktop) hoặc click (mobile)
  const handleExpand = () => setExpanded(true);
  const handleCollapse = () => setExpanded(false);

  return (
    <section id="services" className="relative py-24 md:py-40 flex justify-center items-center bg-[#F6F7FA] transition-colors duration-500" style={{ minHeight: 540 }}>
      <style>
        {`
        .services-circle {
          transition: all 0.7s cubic-bezier(.77, .2, .05, 1.0);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 4px 32px 0 rgba(60,80,188,0.08), 0 1.5px 2.2px rgba(60,90,180,0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
        }
        .services-circle .circle-title {
          font-size: 2.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          color: #232323;
          letter-spacing: -1px;
          margin-bottom: 0.5rem;
        }
        .services-circle .circle-desc {
          color: #65696D;
          font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          max-width: 250px;
        }
        .service-grid-container {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
          transition: opacity 0.55s, transform 0.7s cubic-bezier(.77, .2, .05, 1.0);
        }
        .service-grid-container-hidden {
          opacity: 0;
          transform: scale(0.8);
          pointer-events: none;
        }
        .services-circle-hide {
          opacity: 0;
          transform: scale(0.85);
          pointer-events: none;
          transition: opacity 0.38s, transform 0.6s cubic-bezier(.77, .2, .05, 1.0);
        }
        /* Dịch vụ grid style */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 24px 6vw;
          width: 100%;
          max-width: 940px;
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
        /* Btn close grid */
        .close-btn {
          position: absolute; 
          right: 16px; 
          top: 16px;
          background: #fff;
          border-radius: 50%;
          width: 36px; 
          height: 36px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          box-shadow: 0 0.5px 2px rgba(60,90,180,0.08);
          border: none;
          font-size: 1.3rem;
          color: #A2A5B6;
          cursor: pointer;
          z-index: 6;
          transition: background 0.2s;
        }
        .close-btn:hover {
          background: #f2f3fa;
        }
        /* Overlay fade bg effect */
        .services-overlay {
          background: rgba(220, 226, 245, 0.26);
          position: absolute;
          inset: 0;
          z-index: 2;
          border-radius: 9999px;
          opacity: 1;
        }
        @media(max-width: 500px){
          .services-circle {
            width: 92vw;
            height: 92vw;
            min-width: 202px;
            min-height: 202px;
            max-width: 99vw;
            max-height: 99vw;
          }
        }
        `}
      </style>
      {/* Overlay fade effect khi mở grid */}
      {expanded && <div className="services-overlay" onClick={handleCollapse} />}
      {/* Circle UI ban đầu */}
      <div
        className={`services-circle z-10 mx-auto ${expanded ? "services-circle-hide" : ""}`}
        tabIndex={0}
        onMouseEnter={handleExpand}
        onClick={handleExpand}
        onTouchEnd={handleExpand}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleExpand()}
        aria-label="Our Services"
        role="button"
      >
        <span className="circle-title">Our Services</span>
        <div className="circle-desc">
          Providing complete web design and development services for your business
        </div>
      </div>
      {/* Grid Service Cards */}
      <div
        className={
          "fixed inset-0 z-30 flex items-center justify-center p-4 " +
          (expanded ? "service-grid-container" : "service-grid-container-hidden")
        }
        onMouseLeave={() => {
          // Chỉ đóng khi ở desktop, không đóng trên mobile khi mouseleave.
          if (window.innerWidth > 800) handleCollapse();
        }}
      >
        <div className="relative bg-white/95 rounded-2xl py-8 px-4 md:px-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
          <button
            className="close-btn"
            aria-label="Close services"
            style={{ display: expanded ? "flex" : "none" }}
            onClick={handleCollapse}
          >
            ×
          </button>
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
      </div>
    </section>
  );
};

export default ServicesSection;
