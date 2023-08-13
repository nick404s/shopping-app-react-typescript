import React from 'react';

import classes from './Info.module.css';


/** 
 * Represents the info component.
*/
function Info() {
  return (
    <section className={classes.info}>
      <h2>We have the best quality products for you!</h2>
      <p>Only Fresh Organically Grown Fruits</p>
    </section>
  );
}

export default Info;