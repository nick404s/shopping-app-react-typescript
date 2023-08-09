import React from 'react';

import classes from './Info.module.css';

function Info() {
  return (
    <section className={classes.info}>
      <h2>We have the best quality products for you!</h2>
      <p>
        Only fresh products from our farm.   
      </p>
      <p>
        No artificials or artificially created products. 
      </p>
    </section>
  );
}

export default Info;