import React from 'react';

import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

interface HeaderProps {
  onShowCart: () => void;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <>
      <header className={classes.header}>
        <h1>Make Order</h1>
        <HeaderButton 
          onClick={props.onShowCart}
         />
      </header>
      <div className={classes['main-image']}>
        <img 
        src='https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
        alt='groceries'
        />
      </div>
    </>
  );
}

export default Header;