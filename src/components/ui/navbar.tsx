
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary mr-8">
            МойМагазин
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-primary font-medium">
              Каталог
            </Link>
            <Link to="/sales" className="text-gray-700 hover:text-primary font-medium">
              Скидки
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              О нас
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
          <Button variant="ghost" size="icon">
            <User />
          </Button>
          <Button variant="default">
            <ShoppingCart className="mr-2" />
            Корзина
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary py-2">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-primary py-2">
              Каталог
            </Link>
            <Link to="/sales" className="text-gray-700 hover:text-primary py-2">
              Скидки
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary py-2">
              О нас
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon">
                <Search />
              </Button>
              <Button variant="ghost" size="icon">
                <User />
              </Button>
              <Button variant="default">
                <ShoppingCart className="mr-2" />
                Корзина
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
