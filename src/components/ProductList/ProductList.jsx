import React from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import saladeCésar from '../../utils/images/saladeCésar.jpg';  
import Bruschetta from '../../utils/images/Bruschetta.jpeg';  
import Soupe from '../../utils/images/Soupe.jpg';  
import SteakFrites from '../../utils/images/SteakFrites.png';  
import PizzaMargherita from '../../utils/images/PizzaMargherita.jpg';  
import SpaghettiBolognese from '../../utils/images/SpaghettiBolognese.webp';
import CrèmeBrûléet from '../../utils/images/CrèmeBrûlée.jpg';
import Tiramisu from '../../utils/images/Tiramisu.jpeg';
import FondantChocolat from '../../utils/images/FondantChocolat.jpg';
import Soda from '../../utils/images/Soda.jpeg'; 
import JusOrange from '../../utils/images/JusOrange.jpg'; 
import avocado from '../../utils/images/avocado.jpg'; 

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  
  // Associe chaque produit à une image
  const imageMap = {
    "Salade César": saladeCésar,
    "Bruschetta": Bruschetta,
    "Soupe à l'oignon": Soupe,
    "Steak Frites": SteakFrites,  
    "Pizza Margherita": PizzaMargherita, 
    "Spaghetti Bolognese": SpaghettiBolognese,
    "Crème Brûlée": CrèmeBrûléet,
    "Tiramisu": Tiramisu,
    "Fondant au Chocolat": FondantChocolat,
    "Soda": Soda, 
    "Jus d'Orange": JusOrange,
    "Avocado Juice": avocado, 
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const imageSrc = imageMap[product.name] || product.image || "/images/default.jpg";
        
        return (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold">€{product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-[#E4C268] text-white px-4 py-2 rounded-lg"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
