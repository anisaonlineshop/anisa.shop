import React, { useState } from "react";
import products from "./products.json";
import Head from 'next/head';

function OnlineShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-6">Anisa Online Shop</h1>
      <p className="text-center text-gray-600 mb-10">Lowest prices on the Internet ✨</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg mt-2 font-bold text-gray-800">${product.price}</p>
            <button className="mt-3 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>

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

            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your email"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="text"
              name="Street"
              placeholder="Street"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="text"
              name="House Number"
              placeholder="House Number"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="text"
              name="City"
              placeholder="City"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="text"
              name="Post"
              placeholder="Postcode"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="text"
              name="Country"
              placeholder="Country"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
			<input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <textarea
              name="Message"
              placeholder="Shipping address or message"
              className="border border-gray-300 rounded-lg p-3"
              required
            />

            <button
              type="submit"
              className="bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default OnlineShop;
