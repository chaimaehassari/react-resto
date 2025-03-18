import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-bold">€{product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-2 bg-[#E4C268] text-white px-4 py-2 rounded-lg"
          >
           add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;