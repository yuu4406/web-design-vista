
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "SENECA",
    logo: null,
    quote: "We've doubled our conversion in just one month. That's the most direct metric of our success.",
    rating: 5,
    name: "Nikh Khosla",
    position: "CEO - Seneca (US)",
  },
  {
    company: "APOLLO",
    logo: null,
    quote: "They were one of the best UX designers I've worked with.",
    rating: 5,
    name: "Mac Piskorz",
    position: "CEO - Apollo Scooters (CA)",
  },
  {
    company: "PATHLOCK",
    logo: null,
    quote: "This was the most well-managed project I've been a part of.",
    rating: 5,
    name: "Sarah Johnson",
    position: "CTO - Pathlock",
  },
  {
    company: "CURIOUS THING",
    logo: null,
    quote: "The team at Rua Tech delivered our project ahead of schedule with exceptional attention to detail.",
    rating: 5,
    name: "David Chen",
    position: "Founder - Curious Thing",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Our clients love working with us!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-xl text-design-blue dark:text-design-light-blue mb-1">
                    {testimonial.company}
                  </h3>
                  <div className="flex items-center mt-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">5.0</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center">
                    <span className="text-design-blue dark:text-design-light-blue font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
