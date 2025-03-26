import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../store/slices/cartSlice';

const Cart = ({ onConfirmOrder }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#E4C268]">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">0</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-800">{item.quantity}x {item.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Total :</span>
          <span className="text-xl font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
        </div>
        <button
          onClick={onConfirmOrder}
          className="bg-[#E4C268] text-white px-6 py-2 rounded-lg mt-4 w-full hover:bg-[#d2ae5d] transition-colors"
        >
          Confirm order
        </button>
      </div>
    </div>
  );
};

export default Cart;
