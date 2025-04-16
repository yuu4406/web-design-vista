
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Code, Smartphone, Globe, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Layout className="h-10 w-10 text-design-blue" />,
    title: "Thiết Kế UI/UX",
    description: "Thiết kế giao diện đẹp mắt, dễ sử dụng và tối ưu trải nghiệm người dùng."
  },
  {
    icon: <Code className="h-10 w-10 text-design-blue" />,
    title: "Phát Triển Web",
    description: "Xây dựng website nhanh chóng, hiệu quả với công nghệ hiện đại."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-design-blue" />,
    title: "Responsive Design",
    description: "Đảm bảo website hoạt động tốt trên mọi thiết bị từ máy tính đến điện thoại."
  },
  {
    icon: <Globe className="h-10 w-10 text-design-blue" />,
    title: "Web Application",
    description: "Phát triển ứng dụng web phục vụ các nhu cầu kinh doanh chuyên biệt."
  },
  {
    icon: <PenTool className="h-10 w-10 text-design-blue" />,
    title: "Thiết Kế Đồ Họa",
    description: "Thiết kế logo, banner và các yếu tố đồ họa cho website của bạn."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-design-blue" />,
    title: "SEO Optimization",
    description: "Tối ưu hóa website để đạt thứ hạng cao trên các công cụ tìm kiếm."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch Vụ Của Chúng Tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cung cấp đầy đủ các dịch vụ thiết kế và phát triển web cho doanh nghiệp của bạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
