// /src/components/App.jsx
import React, { useState } from 'react';
import Desserts from './Desserts';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
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

  return (
    <div className="container grid grid-cols-2 gap-14">
      <Desserts addToCart={addToCart} />
      <aside>
        <Cart cart={cart} />
      </aside>
    </div>
  );
}

export default App;
