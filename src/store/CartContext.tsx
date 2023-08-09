import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: Product[],
  addItem: (item: any) => void,
  removeItem: (id: number) => void,
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});


export default CartContext;