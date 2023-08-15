import React from "react";
import classes from "./AvailableProducts.module.css";
import Card from "../ui-elements/Card";
import ProductItem from "./product-item/ProductItem";
import { ProductType } from "../../ts-types/types";

const products: ProductType[] = [
  {
    id: 1,
    name: "Apples",
    description: "The best apples in town",
    price: 3.5,
    quantity: 0,
  },
  {
    id: 2,
    name: "Oranges",
    description: "The best oranges in town",
    price: 2.0,
    quantity: 0,
  },
  {
    id: 3,
    name: "Grapes",
    description: "The best grapes in town",
    price: 5.75,
    quantity: 0,
  },
  {
    id: 4,
    name: "Kiwis",
    description: "The best kiwis in town",
    price: 4.5,
    quantity: 0,
  },
  {
    id: 5,
    name: "Pears",
    description: "The best pears in town",
    price: 2.25,
    quantity: 0,
  },
  {
    id: 6,
    name: "Bananas",
    description: "The best bananas in town",
    price: 3.0,
    quantity: 0,
  },
];

/**
 * Represents the products available for purchase component.
 */
function AvailableProducts(): JSX.Element {
  const renderedProducts: JSX.Element[] = products.map((product) => (
    <>
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
      />
    </>
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{renderedProducts}</ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;
