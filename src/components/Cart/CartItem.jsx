const CartItem = ({ item, onRemove }) => {
  return (
    <li className="flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">€{item.price.toFixed(2)}</p>
      </div>
      <button 
        onClick={() => onRemove(item.id)} 
        className="text-red-500 hover:text-red-700"
      >
        Supprimer
      </button>
    </li>
  );
};

export default CartItem;
