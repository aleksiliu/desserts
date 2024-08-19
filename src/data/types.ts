export interface Watch {
  image: string;
  name: string;
  brand: string;
  price: number;
}
  
  export interface CartItem extends Watch {
    quantity: number;
  }
  