import React, { useState } from 'react';
import Desserts from './Desserts.jsx';
import Cart from './Cart.jsx';
import type { Dessert, CartItem } from '../data/types'; 

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (dessert: Dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === dessert.name);
      if (existingItem) {
        return prevCart.map(item =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (dessert: Dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === dessert.name);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If the quantity is 1, remove the item from the cart
          return prevCart.filter(item => item.name !== dessert.name);
        } else {
          // Otherwise, decrease the quantity by 1
          return prevCart.map(item =>
            item.name === dessert.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      // If the item is not found in the cart, return the cart as it is
      return prevCart;
    });
  };
  

  return (
    <div className="container grid grid-cols-2 gap-14 my-16" >
      <Desserts cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <aside>
        <Cart cart={cart} setCart={setCart} />
      </aside>
    </div>
  );
}

export default App;
