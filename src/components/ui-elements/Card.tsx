import React from 'react';

import classes from './Card.module.css';


/** 
 * Represents the card ui component.
*/
function Card(props: any): JSX.Element {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
}

export default Card;