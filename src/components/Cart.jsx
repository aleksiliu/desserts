import React from 'react';

import CakeIllustration from '../assets/illustration-empty-cart.svg';

function Cart({ cart }) {
  return (
<section class="my-16">
<div class="bg-white px-2 py-2 ">
    <h3 class="text-xl font-semibold text-orange-700 mb-4"> Your cart (0)</h3>
    <img src={CakeIllustration} alt="" class="mx-auto mb-4 w-24 h-24" />
    <p class="text-center">You  added items will appear here {cart.length}</p>
</div>
</section>
  );
}


export default Cart;