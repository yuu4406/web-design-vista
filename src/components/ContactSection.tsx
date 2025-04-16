
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn để tư vấn giải pháp phù hợp nhất
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Họ tên</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">Số điện thoại</label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="0xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">Tiêu đề</label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Thiết kế website"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Nội dung</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Mô tả yêu cầu của bạn..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button type="submit" className="bg-design-blue hover:bg-design-deep-purple w-full md:w-auto">
                <Send className="mr-2 h-4 w-4" /> Gửi tin nhắn
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Thông tin liên hệ</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-design-blue/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-design-blue" />
                </div>
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-design-blue/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-design-blue" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@webvista.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-design-blue/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-design-blue" />
                </div>
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-600">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3">Giờ làm việc</h4>
              <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
              <p className="text-gray-600">Thứ 7: 8:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
