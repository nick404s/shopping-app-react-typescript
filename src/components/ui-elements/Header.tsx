import React from 'react';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
import HeaderImage from '../../images/header_fruits.jpg';


interface HeaderProps {
  onShowCart: () => void;
}

/** 
 * Represents the header ui component.
*/
function Header(props: HeaderProps): JSX.Element {


  return (
    <>
      <header className={classes.header}>
        <h1>Fruit Market</h1>
        <HeaderButton 
          onClick={props.onShowCart}
         />
      </header>
      <div className={classes['main-image']}>
        <img 
        src={HeaderImage}
        alt='products'
        />
      </div>
    </>
  );
}

export default Header;