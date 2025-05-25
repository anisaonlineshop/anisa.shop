import React, { useState } from "react";
import productsData from "./products.json";

const OnlineShop = () => {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Online Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-bold mt-1">${product.price}</p>
            <button
              className="bg-blue-600 text-white px-4 py-1 mt-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="text-gray-800">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>

          <form
            action="https://formsubmit.co/anisa.online.handel@gmail.com"
            method="POST"
            className="flex flex-col gap-2 border-t pt-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />

            {/* Hidden input to send cart as text */}
            <input
              type="hidden"
              name="order"
              value={cart.map((item) => `${item.name} - $${item.price}`).join(", ")}
            />
			
			<div style={{ display: "none" }}>
    <input type="text" name="_honey" />
    <input type="hidden" name="_captcha" value="false" />
  </div>

  <button type="submit">Place Order</button>

            {/* Optional: Redirect URL after submit */}
            <input type="hidden" name="_next" value="https://thankyou-page.com" />

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Place Order via Email
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default OnlineShop;
