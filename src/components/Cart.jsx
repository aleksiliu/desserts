import React from 'react';

import CakeIllustration from '../assets/illustration-empty-cart.svg';

function Cart({ cart }) {
  return (
<section className="my-16">
<div className="bg-white px-2 py-2 ">
    <h3 className="text-xl font-semibold text-orange-700 mb-4"> Your cart (0)</h3>
    <img src={CakeIllustration} alt="" className="mx-auto mb-4 w-24 h-24" />
    <p className="text-center">You added items will appear here {cart.length}</p>
</div>
{console.log(cart)}
</section>
  );
}


export default Cart;