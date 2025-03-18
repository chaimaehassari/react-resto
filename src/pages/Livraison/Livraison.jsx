import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/Cart/Cart';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import livreson from '../../data/livreson';

const Livraison = ({ cartItems, cartTotal, onAddToCart, onRemoveItem, onNewOrder, showCartModal, setShowCartModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const filteredProducts = selectedCategory === "All"
    ? [...livreson.categories.flatMap((c) => c.items), ...livreson.promotions]
    : livreson.categories.find((cat) => cat.name === selectedCategory).items;

  return (
    <div className="flex flex-col lg:flex-row container mx-auto p-4">
   
      <div className="lg:w-3/4 lg:pr-4">
       
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-bold mb-2">
          Filter by category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="Tous">All</option>
            {livreson.categories.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

       
        <ProductList
          products={filteredProducts}
          onAddToCart={onAddToCart}
        />
      </div>

    
      <div className="lg:w-1/4 mt-4 lg:mt-0">
        <Cart
          cartItems={cartItems}
          cartTotal={cartTotal}
          onConfirmOrder={() => setShowCartModal(true)}
          onRemoveItem={onRemoveItem}
        />
      </div>

    
      {showCartModal && (
        <ConfirmationModal
          cartItems={cartItems}
          onClose={() => setShowCartModal(false)}
          onNewOrder={onNewOrder}
        />
      )}
    </div>
  );
};

export default Livraison;