
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Award, Shield, Truck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок */}
        <div className="bg-primary/10 py-16">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">О нашем магазине</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий ассортимент качественных товаров по доступным ценам уже более 10 лет
            </p>
          </div>
        </div>

        {/* История компании */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-4">
                МойМагазин начал свою работу в 2013 году как небольшой онлайн-магазин с ограниченным ассортиментом товаров. 
                Благодаря нашему стремлению к качеству и отличному обслуживанию клиентов, мы быстро завоевали доверие покупателей.
              </p>
              <p className="text-gray-600 mb-4">
                За последние 10 лет мы значительно расширили ассортимент и улучшили сервис. Сегодня МойМагазин - 
                это тысячи товаров с быстрой доставкой по всей России и надежная гарантия качества.
              </p>
              <p className="text-gray-600">
                Мы постоянно развиваемся, чтобы сделать ваши покупки еще удобнее и приятнее.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="История компании" 
                className="w-full h-full object-cover object-center" 
                style={{ minHeight: '350px' }}
              />
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Качество</h3>
                <p className="text-gray-600">
                  Мы тщательно отбираем товары и работаем только с проверенными поставщиками
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Truck className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                <p className="text-gray-600">
                  Доставляем заказы в кратчайшие сроки по всей России
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Гарантия</h3>
                <p className="text-gray-600">
                  Предоставляем гарантию на все товары и возможность возврата
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Наши контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123, офис 456</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Mail className="text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@moymagazin.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3443183485217!2d37.618685!3d55.751244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1631534581044!5m2!1sru!2sru" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Карта расположения офиса"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Остались вопросы?</h2>
              <p className="text-gray-600 mb-8">
                Напишите нам, и мы ответим вам в ближайшее время
              </p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button type="submit" className="w-full md:w-auto">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
