import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../ui-elements/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import { ProductType } from '../../ts-types/types';


interface CartProps {
  onExit: () => void;
}

/** 
 * Represents the cart component.
*/
function Cart(props: CartProps): JSX.Element {

  const cartContext = useContext(CartContext);

  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const totalSum: number = cartContext.items.reduce(
    (sum: number, item: ProductType) => sum + (item.price * item.quantity), 0);

  const isEmptyCart: boolean = cartContext.items.length === 0;

  const handleRemoveItem = (id: number) => {
    cartContext.removeItem(id);
  };

  const handleAddItem = (item: ProductType) => {
    cartContext.addItem({...item, quantity: 1});
  };

  const handlePlaceOrder = () => {
    setIsOrdered(true); // set flag to show thank you message
    cartContext.clearCart(); // clear cart after order
  };

  const renderedCartItems: JSX.Element[] = 
                      cartContext.items.map(
                          (item: ProductType) => <CartItem
                          key={item.id}
                          product={item}
                          onRemove={handleRemoveItem.bind(null, item.id)}
                          onAdd={handleAddItem.bind(null, item)}
                          />
                      );

  const cartItemsList: JSX.Element = <ul className={classes['cart-items']}>
                                        {renderedCartItems}
                                      </ul>;

  const totalSumInfo: JSX.Element = <div className={classes.total}>
                                        <span>Total Sum</span>
                                        <span>${totalSum.toFixed(2)}</span>
                                      </div>;

  const thanksPhrase: JSX.Element = <div className={classes.thanks}>
                                        <span>Thanks for shopping with us!</span>
                                      </div>;
   
   // show in the summary thank you message if cart is ordered, or total sum info otherwise
  const summary: JSX.Element = isOrdered ? thanksPhrase : totalSumInfo;



  return (
    <Modal onExit={props.onExit} >
      {cartItemsList}
      {summary}
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']}
          onClick={props.onExit}
        >
          Exit
        </button>
        {!isEmptyCart && <button onClick={handlePlaceOrder} className={classes.button}>Place Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;