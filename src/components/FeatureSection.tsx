
import { CheckCircle } from 'lucide-react';

const features = [
  "Exclusive, unique web designs",
  "Optimized user experience (UX/UI)",
  "Compatible with all devices",
  "Fast page loading speed",
  "Basic SEO integration",
  "Website security",
  "24/7 technical support",
  "Source code delivery"
];

const FeatureSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-design-purple/5 to-design-blue/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 10 years of experience in web design, we are committed to providing professional, 
              creative and effective web solutions for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-design-blue shrink-0 mt-1 mr-2" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-design-purple/10 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-design-blue/10 rounded-full z-0"></div>
            <div className="bg-white p-6 rounded-xl shadow-xl z-10 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-blue mb-2">10+</h3>
                  <p className="text-gray-600">Years of experience</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-purple mb-2">500+</h3>
                  <p className="text-gray-600">Completed projects</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-blue mb-2">50+</h3>
                  <p className="text-gray-600">Experts</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-purple mb-2">98%</h3>
                  <p className="text-gray-600">Satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
