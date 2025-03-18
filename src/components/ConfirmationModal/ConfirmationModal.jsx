export default function ConfirmationModal({ cartItems, onClose, onNewOrder }) {
 
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-xl font-bold mt-4">Order Confirmed!</h2>
          <p className="text-gray-500 mt-2">Thank you for your order</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
       
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>€{item.price.toFixed(2)}</span>
            </div>
          ))}

          
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-xl font-bold text-gray-800">Total :</span>
            <span className="text-xl font-bold text-gray-800">€{cartTotal.toFixed(2)}</span>
          </div>
        </div>

      
        <button
          onClick={() => {
            onNewOrder();
            onClose();
          }}
          className="w-full bg-[#E4C268] text-white py-3 rounded-lg mt-6 hover:bg-secondary"
        >
          New Order
        </button>
      </div>
    </div>
  );
}