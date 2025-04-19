
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  {
    title: "B2B",
    description: "Empowering B2B brands with scalable, lead-focused, professional digital design solutions.",
  },
  {
    title: "SaaS",
    description: "Crafting SaaS websites to optimize user engagement and subscription conversions seamlessly.",
  },
  {
    title: "Fintech",
    description: "Secure fintech websites blending trust, payment functionality, and intuitive data visuals.",
  },
  {
    title: "Cybersecurity",
    description: "Designing trust-focused cybersecurity web platforms emphasizing protection, encryption, and reliability.",
  },
  {
    title: "Healthcare",
    description: "Creating healthcare websites integrating patient portals, compliance, and telemedicine tools.",
  },
  {
    title: "Startups",
    description: "Building startups' digital presence with growth, branding, and investor-oriented designs.",
  },
];

const CapabilitiesSection = () => {
  const isVisible = useScrollAnimation();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24" data-scroll>
      <div className={`container-custom transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-30'
      }`} style={{ transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Industries We Serve
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0.3,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 800ms ease',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-design-blue dark:text-design-light-blue">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
