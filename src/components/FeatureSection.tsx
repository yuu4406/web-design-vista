
import { CheckCircle } from 'lucide-react';

const features = [
  "Thiết kế web độc quyền, không trùng lặp",
  "Tối ưu trải nghiệm người dùng (UX/UI)",
  "Tương thích với mọi thiết bị",
  "Tốc độ tải trang nhanh",
  "Tích hợp SEO cơ bản",
  "Bảo mật website",
  "Hỗ trợ kỹ thuật 24/7",
  "Bàn giao source code"
];

const FeatureSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-design-purple/5 to-design-blue/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tại Sao Chọn Chúng Tôi?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Với hơn 10 năm kinh nghiệm trong ngành thiết kế web, chúng tôi cam kết mang đến những giải pháp web chuyên nghiệp, 
              sáng tạo và hiệu quả cho doanh nghiệp của bạn.
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
                  <p className="text-gray-600">Năm kinh nghiệm</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-purple mb-2">500+</h3>
                  <p className="text-gray-600">Dự án hoàn thành</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-blue mb-2">50+</h3>
                  <p className="text-gray-600">Chuyên gia</p>
                </div>
                <div className="text-center bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-design-purple mb-2">98%</h3>
                  <p className="text-gray-600">Khách hàng hài lòng</p>
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
