const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mt-1">€{product.price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-[#E4C268] hover:bg-[#d2ae5d] text-white px-3 py-1 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;