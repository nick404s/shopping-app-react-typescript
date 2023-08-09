import React from 'react';
import classes from './AvailableProducts.module.css';
import Card from '../ui-elements/Card';
import ProductItem from './product-item/ProductItem';
import { ProductType } from '../../ts-types/types';


const products: ProductType[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    quantity: 0
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
    quantity: 0
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 300,
    quantity: 0
  }
];


function AvailableProducts(): JSX.Element {

  const renderedProducts: JSX.Element[] = products.map(product => (
    <>
      <ProductItem
        key={product.id} 
        id={product.id} 
        name={product.name} 
        description={product.description} 
        price={product.price}
        quantity={product.quantity} 
      />
      <hr />
     </>
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>
          {renderedProducts}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;