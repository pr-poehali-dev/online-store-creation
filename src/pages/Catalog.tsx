
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Filter, SlidersHorizontal } from "lucide-react";

// Временные данные для примера
const products = [
  {
    id: 1,
    title: "Смартфон XYZ Pro 128GB",
    price: 29990,
    oldPrice: 34990,
    image: "/placeholder.svg",
    category: "Электроника",
    isSale: true
  },
  {
    id: 2,
    title: "Ноутбук UltraBook 15' 8GB/256GB",
    price: 49990,
    image: "/placeholder.svg",
    category: "Компьютеры",
    isNew: true
  },
  {
    id: 3,
    title: "Беспроводные наушники SoundMax",
    price: 4990,
    oldPrice: 6990,
    image: "/placeholder.svg",
    category: "Аудио",
    isSale: true
  },
  {
    id: 4,
    title: "Умные часы FitPro S1",
    price: 7990,
    image: "/placeholder.svg",
    category: "Гаджеты",
    isNew: true
  },
  {
    id: 5,
    title: "Фотоаппарат ProShot X500",
    price: 34990,
    image: "/placeholder.svg",
    category: "Фото и видео"
  },
  {
    id: 6,
    title: "Игровая приставка GameConsole 5",
    price: 39990,
    image: "/placeholder.svg",
    category: "Игры и развлечения"
  },
  {
    id: 7,
    title: "Планшет TabPro 10.1' 64GB",
    price: 19990,
    oldPrice: 22990,
    image: "/placeholder.svg",
    category: "Электроника",
    isSale: true
  },
  {
    id: 8,
    title: "Электронная книга ReadMax",
    price: 8990,
    image: "/placeholder.svg",
    category: "Гаджеты"
  }
];

const categories = [
  "Все", "Электроника", "Компьютеры", "Аудио", "Гаджеты", "Фото и видео", "Игры и развлечения"
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = activeCategory === "Все" 
    ? products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    : products.filter(product => 
        product.category === activeCategory && 
        product.price >= priceRange[0] && 
        product.price <= priceRange[1]
      );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Каталог товаров</h1>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2"
          >
            <Filter size={16} />
            Фильтры
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Фильтры */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-sm mb-4 md:mb-0`}>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <SlidersHorizontal size={18} />
                Фильтры
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Категории</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}`}
                          checked={activeCategory === category} 
                          onCheckedChange={() => setActiveCategory(category)}
                        />
                        <Label 
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Цена</h4>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      min={0}
                      max={50000}
                      step={1000}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        placeholder="От"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="h-8"
                      />
                      <span>—</span>
                      <Input
                        type="number"
                        placeholder="До"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Скидки</h4>
                  <div className="flex items-center">
                    <Checkbox id="sale-only" />
                    <Label htmlFor="sale-only" className="ml-2 text-sm cursor-pointer">Только со скидкой</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="w-full">Применить</Button>
          </div>
          
          {/* Товары */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">По вашему запросу ничего не найдено</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveCategory("Все");
                    setPriceRange([0, 50000]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
