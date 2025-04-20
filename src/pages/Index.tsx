
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  
  const filteredProducts = activeCategory === "Все" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Banner />
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Популярные товары</h2>
            
            <Tabs defaultValue="Все" className="mb-8">
              <TabsList className="flex justify-center flex-wrap mb-6">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">Показать ещё</Button>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-primary/10 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                Получайте информацию о новинках и специальных предложениях
              </p>
              <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Ваш e-mail" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 sm:flex-1" 
                />
                <Button>Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
