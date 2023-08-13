import React, { useContext } from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/CartContext';
import { ProductType } from '../../../ts-types/types';
 
/** 
 * Represents the product item component.
*/
function ProductItem(props: ProductType): JSX.Element {

  const cartContext = useContext(CartContext);

  const handleAddToCart = (quantity: number) => {

    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity
    });
  };

  return (
    <li className={classes.item} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}/lb</div>
      </div>
      <div>
        <ProductItemForm id={props.id} onAddToCart={handleAddToCart} />
      </div>
      <hr />
    </li>
  );
} 

export default ProductItem;