export interface Dessert {
    name: string;
    category: string;
    price: number;
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  
  export interface CartItem extends Dessert {
    quantity: number;
  }
  