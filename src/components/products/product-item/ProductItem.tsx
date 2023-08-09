import React, { useContext } from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}


function ProductItem(props: Product): JSX.Element {

  const cartContext = useContext(CartContext);

  const addToCartHandler = (quantity: number) => {

    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
} 

export default ProductItem;