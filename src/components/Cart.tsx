import React, { useState } from 'react';
import Modal from './Modal';

import type { CartItem, Watch } from '../data/types'; 
import Button from './Button';

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  removeFromCart: (watch: Watch) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0).toFixed(2); // Format to 2 decimal places
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
     setCart([]);
     setIsModalOpen(false);
  };

  return (
    <div className="bg-[#282828] rounded-lg shadow-lg p-6 sticky top-6 md:static md:top-2">
      <h2 className="text-xl font-semibold text-gray-300 mb-4">
        Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </h2>
      {cart.length === 0 ? (
        <>
       <svg width="80" height="80" className="mx-auto mb-4 w-24 h-24" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M675 400C675 336.523 651.206 278.508 612.087 234.372C612.016 234.097 611.95 233.822 611.858 233.548L580.056 138.142C576.987 128.939 570.6 121.572 562.5 117.133V37.5C562.5 16.8234 545.677 0 525 0H325C304.323 0 287.5 16.8234 287.5 37.5V117.131C279.4 121.572 273.011 128.939 269.944 138.142L238.142 233.548C238.052 233.822 237.984 234.097 237.913 234.372C214.891 260.347 197.175 291.125 186.498 325H162.5C141.822 325 125 341.822 125 362.5V437.5C125 458.178 141.822 475 162.5 475H186.498C197.175 508.878 214.892 539.658 237.916 565.634C237.988 565.908 238.053 566.181 238.144 566.453L269.945 661.859C273.012 671.061 279.398 678.428 287.498 682.869V762.5C287.498 783.177 304.322 800 324.998 800H524.998C545.675 800 562.498 783.177 562.498 762.5V682.87C570.602 678.43 576.991 671.061 580.058 661.858L611.861 566.452C611.953 566.177 612.02 565.898 612.092 565.622C651.209 521.487 675 463.475 675 400ZM293.659 146.048C295.364 140.936 300.13 137.5 305.519 137.5H462.495C469.398 137.5 474.995 131.903 474.995 125C474.995 118.097 469.398 112.5 462.495 112.5H312.5V37.5C312.5 30.6078 318.108 25 325 25H525C531.892 25 537.5 30.6078 537.5 37.5V112.5H512.502C505.598 112.5 500.002 118.097 500.002 125C500.002 131.903 505.598 137.5 512.502 137.5H544.481C549.87 137.5 554.636 140.934 556.341 146.047L574.155 199.491C532.489 168.416 480.855 150 425 150C369.145 150 317.511 168.416 275.845 199.491L293.659 146.048ZM162.5 450C155.608 450 150 444.392 150 437.5V362.5C150 355.608 155.608 350 162.5 350H180.027C176.733 366.161 175 382.881 175 400C175 417.119 176.733 433.839 180.027 450H162.5ZM425 175C549.066 175 650 275.934 650 400C650 524.066 549.066 625 425 625C300.934 625 200 524.066 200 400C200 275.934 300.934 175 425 175ZM556.342 653.953C554.637 659.066 549.872 662.5 544.484 662.5H512.505C505.602 662.5 500.005 668.097 500.005 675C500.005 681.903 505.602 687.5 512.505 687.5H537.5V762.5C537.5 769.392 531.892 775 525 775H325C318.108 775 312.5 769.392 312.5 762.5V687.5H462.498C469.402 687.5 474.998 681.903 474.998 675C474.998 668.097 469.402 662.5 462.498 662.5H305.522C300.133 662.5 295.367 659.066 293.663 653.953L275.848 600.513C317.514 631.584 369.147 650 425 650C480.858 650 532.492 631.583 574.158 600.506L556.342 653.953Z" fill="white"/>
<path d="M425 600C535.281 600 625 510.281 625 400C625 356.313 611.166 314.806 584.991 279.969C580.844 274.45 573.008 273.337 567.487 277.484C561.969 281.631 560.856 289.467 565.003 294.988C585.387 322.116 597.189 353.881 599.539 387.5H587.5C580.597 387.5 575 393.097 575 400C575 406.903 580.597 412.5 587.5 412.5H599.548C593.409 499.053 524.053 568.409 437.5 574.548V562.5C437.5 555.597 431.903 550 425 550C418.097 550 412.5 555.597 412.5 562.5V574.548C325.947 568.409 256.591 499.053 250.452 412.5H262.5C269.403 412.5 275 406.903 275 400C275 393.097 269.403 387.5 262.5 387.5H250.452C256.591 300.947 325.947 231.591 412.5 225.452V237.5C412.5 244.403 418.097 250 425 250C431.903 250 437.5 244.403 437.5 237.5V225.461C471.112 227.809 502.87 239.608 529.995 259.983C535.512 264.127 543.35 263.017 547.497 257.495C551.642 251.975 550.53 244.141 545.009 239.994C510.178 213.83 468.68 200 425 200C314.719 200 225 289.719 225 400C225 510.281 314.719 600 425 600Z" fill="white"/>
<path d="M425 275C418.097 275 412.5 280.597 412.5 287.5V400C412.5 400.105 412.513 400.205 412.516 400.309C412.522 400.562 412.533 400.816 412.555 401.069C412.569 401.239 412.589 401.406 412.611 401.573C412.641 401.808 412.675 402.041 412.717 402.275C412.752 402.461 412.791 402.645 412.834 402.828C412.883 403.034 412.934 403.241 412.994 403.445C413.052 403.65 413.117 403.85 413.186 404.05C413.247 404.23 413.311 404.408 413.381 404.586C413.467 404.803 413.561 405.017 413.658 405.228C413.731 405.386 413.805 405.542 413.884 405.697C413.998 405.919 414.12 406.134 414.247 406.348C414.302 406.441 414.345 406.536 414.402 406.627L476.902 506.627C479.273 510.42 483.347 512.503 487.514 512.503C489.777 512.503 492.067 511.889 494.127 510.602C499.981 506.942 501.759 499.231 498.102 493.377L437.5 396.414V287.5C437.5 280.597 431.903 275 425 275Z" fill="white"/>
</svg>

        <p className="text-gray-300 text-center">Your added items will appear here</p>
        </>
      ) : (
        <>
        <ul>
          {cart.map((item) => (
            <li key={item.name} className="mb-2">
             {item.quantity} x <span className="font-semibold">{item.name}</span> - {item.price} €
             <button onClick={() => removeFromCart(item)} className="text-md font-bold px-2">Remove</button>
            </li>
          ))}
        </ul>
        <p> Order Total: {calculateTotal()} €</p>

      <Button text="Confirm Order" color="secondary" onClick={handleConfirmOrder} className='w-full mt-4 font-bold' />
      
      </>
      )}
      
        <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Order Confirmed"
        buttonText="Start New Order"
      >
        <p className="text-gray-300">Thank you for your purchase.</p>
        {cart.map((watch) => {
          return (
            <div key={watch.name} className="relative mt-4">
              <p>{watch.brand}</p>
              <h2 className="font-bold">{watch.quantity} x {watch.name}</h2>
              <p className="text-gray-300">{watch.price} €</p>
             
            </div>
          );
        })}
         <p className='mt-4'> Order Total: {calculateTotal()} €</p>
      </Modal>
    </div>
  );
}

export default Cart;
