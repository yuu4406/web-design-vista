
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-design-purple font-heading text-xl font-bold">Web</span>
              <span className="text-design-light-blue font-heading text-xl font-bold">Vista</span>
            </div>
            <p className="text-gray-400 mb-6">
              Chúng tôi cung cấp dịch vụ thiết kế và phát triển web chuyên nghiệp, giúp doanh nghiệp của bạn thành công trong thế giới kỹ thuật số.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thiết kế UI/UX</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Phát triển Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thiết kế Responsive</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thiết kế đồ họa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dự án</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Đội ngũ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nhận thông tin</h3>
            <p className="text-gray-400 mb-4">
              Đăng ký nhận bản tin của chúng tôi để cập nhật thông tin mới nhất
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-design-blue"
              />
              <button className="bg-design-blue hover:bg-design-deep-purple transition-colors px-4 py-2 rounded-r-md">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 WebVista. Bản quyền thuộc về công ty.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Chính sách bảo mật</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Điều khoản sử dụng</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
