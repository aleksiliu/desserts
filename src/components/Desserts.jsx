import React from 'react';
import { dessertItems } from '../data/desserts';

const Desserts = ({ addToCart, cart }) => {
  return (
    <main>
      <h1 className="text-4xl font-semibold tracking-[-0.96px] mb-8">
        Desserts
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {dessertItems.map((dessert) => {
          // Find the specific dessert in the cart
          const cartItem = cart.find((item) => item.name === dessert.name);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={dessert.name} className="relative">
              <div className="flex justify-center">
                <img className="rounded mb-4" src={dessert.image.desktop} alt={dessert.name} />
                <div className="group absolute bottom-20">
                  <button
                    onClick={() => addToCart(dessert)}
                    className="bg-white text-black border border-slate-500 px-6 py-4 rounded-full group-hover:hidden"
                  >
                    Add to Cart
                  </button>
                  <div className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-4 rounded-full hidden group-hover:flex items-center">
                    <button className="text-lg font-bold px-2">-</button>
                    <span className="text-lg">{quantity}</span>
                    <button onClick={() => addToCart(dessert)} className="text-lg font-bold px-2">+</button>
                  </div>
                </div>
              </div>
              <p>{dessert.category}</p>
              <h2 className="font-bold">{dessert.name}</h2>
              <p className="text-orange-700">{dessert.price} €</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Desserts;
