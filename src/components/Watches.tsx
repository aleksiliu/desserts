import React from 'react';
import { watchItems } from '../data/watches.ts';
import Button from '../components/Button';

import type { Watch, CartItem } from '../data/types.ts'; 

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
      <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
        {watchItems.map((watch: Watch) => {
          // Find the specific watch in the cart
          const cartItem = cart.find((item) => item.name === watch.name);
          const quantity = cartItem ? cartItem.quantity : 0; 

          return (
            <div key={watch.name}>
              <div className='mb-2'>
                <img className="rounded mb-4" src={watch.image} alt={watch.name} />
                <div className="group relative -mt-10 z-1 flex justify-center">
                  <Button text="Add to Cart" onClick={() => addToCart(watch)} className='group-hover:hidden' />
         
                  <div className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-4 rounded-full hidden group-hover:inline-block">
                    <button onClick={() => removeFromCart(watch)} className="text-lg font-bold px-2">-</button>
                    <span className="text-lg">{quantity}</span>
                    <button onClick={() => addToCart(watch)} className="text-lg font-bold px-2">+</button>
                  </div>
                </div>
              </div>
              <p>{watch.brand}</p>
              <h2 className="font-bold">{watch.name}</h2>
              <p className="text-gray-300">{watch.price} €</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Watches;
