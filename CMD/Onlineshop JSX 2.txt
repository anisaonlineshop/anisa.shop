import { useState } from 'react';
import products from './products.json';
import Head from 'next/head';

export default function OnlineShop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Head>
        <title>Anisa Online Shop - Lowest Prices</title>
        <meta name="description" content="Your trusted online store for quality products" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
        <header className="max-w-6xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Anisa Online Shop</h1>
              <p className="text-lg text-gray-600">Lowest price guaranteed</p>
            </div>
            <button 
              onClick={() => setShowCart(!showCart)}
              className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Cart ({cart.length})
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Shopping Cart Sidebar */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <ul className="divide-y divide-gray-200 mb-6">
                    {cart.map((item) => (
                      <li key={item.id} className="py-4 flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold mb-6">
                      <span>Total:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                      onClick={() => {
                        // Here you would integrate with Stripe or other payment processor
                        alert('Proceeding to checkout!');
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-500 mb-3 flex-grow">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
              
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-grow bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(product);
                    setShowCart(true);
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}