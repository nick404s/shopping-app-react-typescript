import React from 'react';
import classes from './CartItem.module.css';
import { ProductType } from '../../ts-types/types';



type CartItemProps = {
  product: ProductType;
  onRemove: () => void;
  onAdd: () => void;
}

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
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;