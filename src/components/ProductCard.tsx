
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard = ({
  id,
  title,
  price,
  oldPrice,
  image,
  category,
  isNew = false,
  isSale = false
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-green-500">Новинка</Badge>
        )}
        {isSale && (
          <Badge variant="destructive" className="absolute top-2 right-2">Скидка</Badge>
        )}
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{title}</h3>
        <div className="mt-2 flex items-center">
          <div className="font-bold text-lg text-primary">{price} ₽</div>
          {oldPrice && (
            <div className="ml-2 text-sm text-gray-500 line-through">{oldPrice} ₽</div>
          )}
        </div>
        <Button className="mt-3 w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
