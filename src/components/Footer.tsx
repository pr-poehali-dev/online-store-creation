
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">МойМагазин</h3>
            <p className="text-gray-600 mb-4">
              Ваш надежный партнер в мире покупок. Мы предлагаем лучшие товары по доступным ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-600 hover:text-primary">
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-primary">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-600 hover:text-primary">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/loyalty" className="text-gray-600 hover:text-primary">
                  Программа лояльности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/vacancies" className="text-gray-600 hover:text-primary">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-primary">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-600">+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-600">info@moimagazin.ru</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-600">
                  г. Москва, ул. Примерная, д. 123
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} МойМагазин. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
