
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-design-blue">Thiết Kế Web</span> Chất Lượng Cao
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Chúng tôi tạo ra những website đẹp mắt, hiện đại và tối ưu hóa cho kinh doanh của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-design-blue hover:bg-design-deep-purple text-lg py-6 px-8">
                Liên hệ ngay
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-design-blue text-design-blue hover:bg-design-blue hover:text-white text-lg py-6 px-8">
                Xem dự án
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="bg-gradient-to-tr from-design-purple/20 to-design-blue/20 p-4 rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Web Design Process"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-design-purple text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold">+500</p>
              <p className="text-sm">Dự án hoàn thành</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
