import React from 'react';
import classes from './CartItem.module.css';
import { ProductType } from '../../ts-types/types';
import { GoPlusCircle, GoNoEntry } from "react-icons/go";



type CartItemProps = {
  product: ProductType;
  onRemove: () => void;
  onAdd: () => void;
}

/** 
 * Represents the cart item component.
*/
const CartItem = (props: CartItemProps) => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.product.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.product.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.product.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>
          <GoNoEntry className={classes['cart-item-icon']} />
        </button>
        <button onClick={props.onAdd}>
          <GoPlusCircle className={classes['cart-item-icon']} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;