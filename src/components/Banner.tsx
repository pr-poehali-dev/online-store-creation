
import { Button } from "@/components/ui/button";

export const Banner = () => {
  return (
    <div className="bg-primary/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Лучшие товары для вашего комфорта
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              Широкий ассортимент качественных товаров по доступным ценам с доставкой по всей России
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Смотреть каталог</Button>
              <Button variant="outline" size="lg">Акции и скидки</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Баннер" 
              className="max-w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
