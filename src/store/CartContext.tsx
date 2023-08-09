import React from 'react';
import { CartContextType } from '../ts-types/types';


const CartContext = React.createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});


export default CartContext;