import React from 'react';

import classes from './Info.module.css';

function Info() {
  return (
    <section className={classes.info}>
      <h2>We have the best quality products for you!</h2>
      <p>
        Only fresh fruits and vegetables   
      </p>
      <p>
        Growing organically since 1986
      </p>
    </section>
  );
}

export default Info;