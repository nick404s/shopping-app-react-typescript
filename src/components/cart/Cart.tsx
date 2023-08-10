import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../ui-elements/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import { ProductType } from '../../ts-types/types';


interface CartProps {
  onExit: () => void;
  onOrder: () => void;
}

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

  const handleOrderItems = () => {
    setIsOrdered(true);
 
    // set timeout to clear cart after order
    setTimeout(() => {
      setIsOrdered(false);
    }
    , 3000);
    props.onOrder();
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

  const thanksPhrase: JSX.Element = <div className={classes.total}>
                                        <span>Thanks for your order!</span>
                                      </div>;
                                      
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
        {!isEmptyCart && <button onClick={handleOrderItems} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;