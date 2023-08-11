import React, {useReducer, useMemo} from 'react';
import CartContext from './CartContext';
import { ProductType, CartContextType } from '../ts-types/types';

interface CartProviderProps {
  children: React.ReactNode;
}

const defaultCartState: CartContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
}

interface CartAction {
  name: string;
  item?: ProductType;
  id?: number;
}

// reducer function for the cart state
const cartReducer = (state: CartContextType, action: CartAction): CartContextType => {

  if (action.name === 'ADD') {
    // get the index of the item
    const itemIndex: number = state.items.findIndex(item => item.id === action.item!.id);

    // check if item already in the cart
    if (itemIndex >= 0) {

      // get the existing item
      const existingItem: ProductType = state.items[itemIndex];

      // create a new item with the updated quantity 
      const updatedItem: ProductType = {
                        ...existingItem, 
                        quantity: existingItem.quantity + action.item!.quantity
      };
      
      // create a new array based on the existing items
      const updatedItems: ProductType[] = [...state.items];

      // replace the existing item with the new item
      updatedItems[itemIndex] = updatedItem;

      return {...state, items: updatedItems};
    }
 
    // if the item is not in the cart, add it
    return {...state, items: state.items.concat(action.item!)};
  }
  
  if (action.name === 'REMOVE') {
    // find the index of the item in the cart
    const itemIndex: number = state.items.findIndex(item => item.id === action.id!);

    // get the item
    const item: ProductType = state.items[itemIndex];

    // if it's the last item, remove the item
    if (item.quantity === 1) {

      const updatedItems: ProductType[] = state.items.filter(item => item.id !== action.id!);

      return {...state, items: updatedItems};
    }
    
    // if it's not the last item, update the item quantity
    const updatedItem: ProductType = {
      ...item, 
      quantity: item.quantity - 1
    };
    const updatedItems: ProductType[] = [...state.items];
    updatedItems[itemIndex] = updatedItem;
    return {...state, items: updatedItems};
  }
  
  if (action.name === 'CLEAR') {
    return defaultCartState;
  }
  return defaultCartState;
};


/**
 * Represents the CartProvider component.
 */
function CartProvider({children}: CartProviderProps): JSX.Element {

  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item: ProductType) => {
    dispatch({name: 'ADD', item: item});
  };

  const removeItemHandler = (id: number) => {
    dispatch({name: 'REMOVE', id: id});
  };

  const clearCartHandler = () => {
    dispatch({name: 'CLEAR'});
  };

  // wrap the cartContext in a useMemo 
  // to avoid unnecessary re-renders
  const cartContext: CartContextType = useMemo(() => {
      return {
      items: cartState.items,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      clearCart: clearCartHandler 
    };
  }, [cartState.items]);


  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;