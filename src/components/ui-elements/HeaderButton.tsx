import React, {useContext, useState, useEffect} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./HeaderButton.module.css";
import CartContext from '../../store/CartContext';

interface HeaderButtonProps {
  onClick: () => void;
}

/** 
 * Represents the header button ui component.
*/
function HeaderButton(props: HeaderButtonProps): JSX.Element {

  const cartContext = useContext(CartContext);

  const {items} = cartContext;

  const numberOfItems: number = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const [isBtnReaction, setIsBtnReaction] = useState(false);

  // add reaction to button classes depending on the conditions
  const btnClasses = isBtnReaction ? `${classes.btn} ${classes.reaction}` : classes.btn;

  // add reaction to button if items in the cart change
  useEffect(() => {

    // if the cart is empty, no reaction
    if (items.length === 0) {
      return;
    }
    setIsBtnReaction(true);

  // remove reaction class from the button with the time interval
    const timer = setTimeout(() => {
      setIsBtnReaction(false);
    }, 300);

    // clean up the timer
    return () => {
      clearTimeout(timer);
    };

  }, [items]); // add items to the dependency array

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}> 
        <AiOutlineShoppingCart />
        <span className={classes.text}>Cart</span>
        <span className={classes.quantity}>{numberOfItems}</span>
      </button>
    </>
  );
}

export default HeaderButton;