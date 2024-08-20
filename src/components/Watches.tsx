import React from 'react';
import { watchItems } from '../data/watches';

import type { Watch, CartItem } from '../data/types'; 

interface WatchesProps {
  cart: CartItem[];
  addToCart: (watch: Watch) => void;
  removeFromCart: (watch: Watch) => void;
}

const Watches: React.FC<WatchesProps> = ({ addToCart, removeFromCart, cart }) => {
  return (
    <main>
      <h1 className="text-gray-300 text-4xl font-semibold tracking-[-0.96px] mb-8">
       Watches
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {watchItems.map((watch: Watch) => {
          // Find the specific watch in the cart
          const cartItem = cart.find((item) => item.name === watch.name);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={watch.name} className="relative">
              <div className="flex justify-center">
                <img className="rounded mb-4" src={watch.image} alt={watch.name} />
                <div className="group absolute bottom-20">
                  <button
                    onClick={() => addToCart(watch)}
                    className="bg-white text-black border border-slate-500 px-6 py-4 rounded-full group-hover:hidden flex items-center shadow"
                  >
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                    Add to Cart
                  </button>
                  <div className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-4 rounded-full hidden group-hover:flex items-center">
                    <button onClick={() => removeFromCart(watch)} className="text-lg font-bold px-2">-</button>
                    <span className="text-lg">{quantity}</span>
                    <button onClick={() => addToCart(watch)} className="text-lg font-bold px-2">+</button>
                  </div>
                </div>
              </div>
              <p>{watch.brand}</p>
              <h2 className="font-bold">{watch.name}</h2>
              <p className="text-orange-700">{watch.price} €</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Watches;
