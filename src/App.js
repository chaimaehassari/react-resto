import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu'; 
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Livraison from './pages/Livraison/Livraison';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';
import Cart from './components/Cart/Cart';
import livreson from './data/livreson';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);


  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const handleConfirmOrder = () => setShowCartModal(true);


  const handleNewOrder = () => {
    setCartItems([]);
    setShowCartModal(false);
  };

  
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faUtensils}
              size="2xl"
              className="text-[#E4C268] hover:text-[#d2ae5d] transition-colors"
            />
            <span className="ml-3 font-bold text-[#E4C268] text-2xl md:text-3xl">
            Golden<br /> Table
            </span>
          </Link>

          
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

     
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link">
              <span className="text-gray-800 hover:text-[#E4C268] transition-colors">
                Accueil
              </span>
            </Link>
            <Link to="/menu" className="nav-link">
              <span className="hover:text-gray-800 text-[#E4C268] transition-colors">
                Menu
              </span>
            </Link>
            <Link to="/livraison" className="nav-link">
              <span className="text-gray-800 hover:text-[#E4C268] transition-colors">
                Livraison
              </span>
            </Link>
            <Link to="/contact" className="bg-[#E4C268] text-white px-4 py-2 rounded-lg">  
            Reserve your table
            </Link>
          </div>
        </div>

        
        {menuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-gray-800 hover:bg-gray-100">
                Accueil
              </Link>
              <Link to="/menu" className="block py-2 text-gray-800 hover:bg-gray-100">
                Menu
              </Link>
              <Link to="/livraison" className="block py-2 text-gray-800 hover:bg-gray-100">
                Livraison
              </Link>
              <Link to="/contact" className="block py-2 text-gray-800 hover:bg-gray-100">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/livraison"
            element={
              <Livraison
                cartItems={cartItems}
                cartTotal={cartTotal}
                onAddToCart={handleAddToCart}
                onRemoveItem={handleRemoveItem}
                onConfirmOrder={handleConfirmOrder}
                onNewOrder={handleNewOrder}
                showCartModal={showCartModal}
                setShowCartModal={setShowCartModal}
              />
            }
          />
        </Routes>
      </main>

      {showCartModal && (
        <ConfirmationModal
          cartItems={cartItems}
          onClose={() => setShowCartModal(false)}
          onNewOrder={handleNewOrder}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;