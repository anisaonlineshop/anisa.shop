import React, { useState } from "react";
import products from "./products.json";

function OnlineShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-purple-600">Anisa Shop</h1>
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block border border-gray-300 rounded-md px-3 py-1 w-64"
        />
      </header>

      {/* Hero */}
      <div className="text-center py-10 px-4 bg-white shadow-sm">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Lowest prices on the Internet ✨</h2>
        <p className="text-gray-600">Fast delivery • Easy checkout • Trusted by many</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition cursor-pointer relative"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold text-white px-2 py-1 rounded">
              ⭐ Best Seller
            </span>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg mt-2 font-bold text-gray-900">€{product.price}</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Order Form */}
      {selectedProduct && (
        <div className="mt-16 max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order: {selectedProduct.name}</h2>
          <form
            action="https://formsubmit.co/anisa.online.handel@gmail.com"
            method="POST"
            className="grid gap-4"
          >
            <input type="hidden" name="_subject" value={`Order: ${selectedProduct.name}`} />
            <input type="hidden" name="Product" value={selectedProduct.name} />
            <input type="hidden" name="Price" value={selectedProduct.price} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <input name="Name" placeholder="Your name" className="input" required />
            <input type="email" name="Email" placeholder="Your email" className="input" required />
            <input name="Street" placeholder="Street" className="input" required />
            <input name="House Number" placeholder="House Number" className="input" required />
            <input name="City" placeholder="City" className="input" required />
            <input name="Post" placeholder="Postcode" className="input" required />
            <input name="Country" placeholder="Country" className="input" required />
            <input type="tel" name="Phone" placeholder="Phone Number" className="input" />
            <textarea name="Message" placeholder="Message" className="input" />

            <button
              type="submit"
              className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center py-6 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Anisa Online Shop. Built with ❤️ using React + Tailwind.
      </footer>

      {/* Floating Help */}
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
        Help
      </button>
    </div>
  );
}

export default OnlineShop;
