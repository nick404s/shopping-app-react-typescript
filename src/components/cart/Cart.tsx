import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../ui-elements/Modal';
import CartContext from '../../store/CartContext';
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartProps {
  onExit: () => void;
  onOrder: () => void;
}

function Cart(props: CartProps): JSX.Element {

  const cartContext = useContext(CartContext);

  const totalSum: number = cartContext.items.reduce(
    (sum: number, item: Product) => sum + (item.price * item.quantity), 0);

  const isEmptyCart: boolean = cartContext.items.length === 0;

  const removeItemHandler = (id: number) => {
    cartContext.removeItem(id);
  };

  const addItemHandler = (item: Product) => {
    cartContext.addItem({...item, quantity: 1});
  };

  const handleOrderbBtn = () => {
    props.onOrder();
    cartContext.clearCart();
  };

  const cartItems: JSX.Element = 
                      <ul className={classes['cart-items']}>
                          {cartContext.items.map(
                              (item: Product) => <CartItem 
                              key={uuidv4()}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              quantity={item.quantity}
                              onRemove={removeItemHandler.bind(null, item.id)}
                              onAdd={addItemHandler.bind(null, item)}
                              />                     
                          )}
                      </ul>;

  return (
    <Modal onExit={props.onExit} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Sum</span>
        <span>${totalSum.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']}
          onClick={props.onExit}
        >
          Exit
        </button>
        {!isEmptyCart && <button onClick={handleOrderbBtn} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;