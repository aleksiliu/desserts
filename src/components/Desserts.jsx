import React from 'react';
import { dessertItems } from '../data/desserts';

const Desserts = ({ addToCart })  => {
  return (
<main className="my-16">
  <h1 className="text-4xl font-semibold tracking-[-0.96px] mb-8">
   Desserts
  </h1>
  <div className="grid grid-cols-3 gap-6">
    {dessertItems.map((dessert => (
        <div className="relative">
            <div className="flex justify-center"> 
                {<img className="rounded mb-4" src={dessert.image.desktop} />}
                <div className="group absolute bottom-20">

              
                <button className="bg-white text-black border border-slate-500 px-6 py-4 rounded-full group-hover:hidden">
                        Add to Cart
                        </button>

        
                <div className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-4 rounded-full hidden group-hover:block">
                    <button className="text-lg font-bold px-2">-</button>
                    <span className="text-lg">1</span>
                    <button onClick={() => addToCart(dessert)} className="text-lg font-bold px-2">+</button>
                </div>
            </div>
        </div>
 
        <p>{dessert.category}</p>
        <h2 className="font-bold">{dessert.name}</h2>
        <p className="text-orange-700">{dessert.price} €</p>
        
        </div>

      )))}
  </div>
</main>
  );
}

export default Desserts;