
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";

const commonQuestions = [
  "I want to leave an inquiry",
  "I would like to schedule a call",
  "I would like to talk to a human",
  "What services do you offer?",
  "How long does a project usually take?",
  "What is your pricing structure?"
];

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { 
      text: "Hello there! 👋 I'm here to help you get your project proposal. 📝", 
      isBot: true 
    },
    { 
      text: "What would you like to do?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, isBot: false }]);
      
      // Simulate AI response after a brief delay
      setTimeout(() => {
        let response = "Thank you for your message. Our team will get back to you soon!";
        
        if (input.toLowerCase().includes("pricing") || input.toLowerCase().includes("cost")) {
          response = "Our pricing varies based on project requirements. We'd be happy to provide a custom quote for your specific needs.";
        } else if (input.toLowerCase().includes("time") || input.toLowerCase().includes("schedule") || input.toLowerCase().includes("deadline")) {
          response = "Project timelines depend on complexity and scope. Simple projects may take 2-4 weeks, while more complex ones might require 2-3 months.";
        }
        
        setMessages(prev => [...prev, { text: response, isBot: true }]);
      }, 1000);
      
      setInput("");
    }
  };

  const handleQuestionClick = (question: string) => {
    setMessages([...messages, { text: question, isBot: false }]);
    
    // Simulate AI response after a brief delay
    setTimeout(() => {
      let response = "Thank you for your interest. Our team will get back to you shortly!";
      
      if (question === "I want to leave an inquiry") {
        response = "Great! Please provide some details about your project or requirements, and our team will contact you soon.";
      } else if (question === "I would like to schedule a call") {
        response = "Excellent! Please let us know your preferred date and time, and we'll arrange a call with our team.";
      } else if (question === "I would like to talk to a human") {
        response = "Of course! I'll connect you with one of our team members. Please provide your email address, and someone will reach out to you shortly.";
      } else if (question === "What services do you offer?") {
        response = "We offer web design, app development, UX/UI design, branding, and digital marketing services. Our team specializes in creating seamless digital experiences tailored to your business needs.";
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <Button 
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg animate-float-animation z-50"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[90%] sm:w-[380px] p-0 border-l rounded-l-xl" side="right">
          <div className="flex flex-col h-full bg-white dark:bg-gray-900">
            <SheetHeader className="bg-design-blue dark:bg-design-deep-purple text-white p-4 rounded-tl-xl">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-4 w-4 text-design-blue dark:text-design-light-blue" />
                </div>
                <SheetTitle className="text-white">Rua Tech Team</SheetTitle>
              </div>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`mb-4 max-w-[80%] ${
                    msg.isBot 
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tr-xl rounded-br-xl rounded-bl-xl" 
                      : "bg-design-blue dark:bg-design-deep-purple text-white ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl"
                  } p-3 animate-fade-in`}
                  style={{animationDelay: `${idx * 100}ms`}}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            {messages.length <= 3 && (
              <div className="px-4 py-3 border-t dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Choose an option:</p>
                <div className="flex flex-col gap-2 mb-2">
                  {commonQuestions.slice(0, 3).map((q, idx) => (
                    <Button 
                      key={idx}
                      variant="outline" 
                      className="justify-start text-left h-auto py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => handleQuestionClick(q)}
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AIChatWidget;
