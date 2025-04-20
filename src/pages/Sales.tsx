
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const SalesPage = () => {
  const [daysLeft, setDaysLeft] = useState<number[]>([3]);
  
  const saleItems = [
    {
      id: 1,
      name: "Умные часы Xiaomi Watch S3",
      originalPrice: 9999,
      salePrice: 7999,
      discount: 20,
      image: "/placeholder.svg",
      category: "electronics",
      daysLeft: 3
    },
    {
      id: 2,
      name: "Беспроводные наушники Sony WH-1000XM5",
      originalPrice: 34999,
      salePrice: 29999,
      discount: 15,
      image: "/placeholder.svg",
      category: "electronics",
      daysLeft: 5
    },
    {
      id: 3,
      name: "Кофемашина DeLonghi Magnifica S",
      originalPrice: 45999,
      salePrice: 32199,
      discount: 30,
      image: "/placeholder.svg",
      category: "appliances",
      daysLeft: 2
    },
    {
      id: 4,
      name: "Кроссовки Nike Air Max 270",
      originalPrice: 12999,
      salePrice: 8449,
      discount: 35,
      image: "/placeholder.svg",
      category: "fashion",
      daysLeft: 7
    },
    {
      id: 5,
      name: "Смартфон Samsung Galaxy S23",
      originalPrice: 79999,
      salePrice: 67999,
      discount: 15,
      image: "/placeholder.svg",
      category: "electronics",
      daysLeft: 4
    },
    {
      id: 6,
      name: "Робот-пылесос Xiaomi Vacuum Mop 2",
      originalPrice: 22999,
      salePrice: 16099,
      discount: 30,
      image: "/placeholder.svg",
      category: "appliances",
      daysLeft: 1
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Сезонные скидки</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Успейте купить товары со скидками до 50%. Количество товаров ограничено!
          </p>
          <div className="inline-flex space-x-4">
            <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-gray-100">
              Все предложения
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Лучшие скидки
            </Button>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Скидки и акции</h2>
            <TabsList>
              <TabsTrigger value="all">Все скидки</TabsTrigger>
              <TabsTrigger value="electronics">Электроника</TabsTrigger>
              <TabsTrigger value="appliances">Бытовая техника</TabsTrigger>
              <TabsTrigger value="fashion">Одежда и обувь</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Осталось дней: {daysLeft[0]}</h3>
            <Slider
              value={daysLeft}
              min={1}
              max={7}
              step={1}
              onValueChange={setDaysLeft}
              className="max-w-md"
            />
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleItems
                .filter(item => item.daysLeft <= daysLeft[0])
                .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500">-{item.discount}%</Badge>
                    <Badge className="absolute top-2 left-2 bg-yellow-500">{item.daysLeft} дн.</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">{item.salePrice} ₽</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice} ₽</span>
                    </div>
                    <Button className="w-full mt-4">В корзину</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="electronics">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleItems
                .filter(item => item.category === "electronics" && item.daysLeft <= daysLeft[0])
                .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500">-{item.discount}%</Badge>
                    <Badge className="absolute top-2 left-2 bg-yellow-500">{item.daysLeft} дн.</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">{item.salePrice} ₽</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice} ₽</span>
                    </div>
                    <Button className="w-full mt-4">В корзину</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="appliances">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleItems
                .filter(item => item.category === "appliances" && item.daysLeft <= daysLeft[0])
                .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500">-{item.discount}%</Badge>
                    <Badge className="absolute top-2 left-2 bg-yellow-500">{item.daysLeft} дн.</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">{item.salePrice} ₽</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice} ₽</span>
                    </div>
                    <Button className="w-full mt-4">В корзину</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fashion">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleItems
                .filter(item => item.category === "fashion" && item.daysLeft <= daysLeft[0])
                .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500">-{item.discount}%</Badge>
                    <Badge className="absolute top-2 left-2 bg-yellow-500">{item.daysLeft} дн.</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">{item.salePrice} ₽</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice} ₽</span>
                    </div>
                    <Button className="w-full mt-4">В корзину</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-purple-50 rounded-lg p-6 mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на скидки</h2>
            <p className="text-gray-600 mb-6">
              Получайте уведомления о новых акциях и скидках первыми! Мы отправляем только важные сообщения, никакого спама.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalesPage;
