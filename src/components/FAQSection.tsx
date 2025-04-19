
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are digital products?",
    answer: "They are websites, online stores, and applications, including mobile applications. These are our specialty, but they aren't the only things we're passionate about. We can also help you with branding, from creating a memorable logo to figuring out what brand colors would suit you best."
  },
  {
    question: "Can you deliver a complete product?",
    answer: "Yes, we can! At Rua Tech, we handle the entire process from design to development to deployment. Our team of designers, developers, and project managers work together to ensure your project is delivered on time and to your exact specifications."
  },
  {
    question: "How much time do you need?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could require 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    question: "How much will it cost?",
    answer: "The cost depends on the complexity, features, and timeline of your project. We offer competitive rates and transparent pricing. Contact us for a free quote tailored to your specific needs and requirements."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies like React, TypeScript, and Tailwind CSS for frontend development. For backend development, we employ Node.js, Python, or other technologies based on project requirements. Our team stays updated with the latest industry trends to deliver high-quality solutions."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Absolutely! We offer various maintenance packages to keep your digital product running smoothly after launch. This includes regular updates, security patches, performance optimization, and technical support."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in">
          Simple answers to big questions.
        </h2>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-xl font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 text-lg pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
