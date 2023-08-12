import React from 'react';

import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

// import FruitsImage from '../public/fruits_pic.jpg';

// how to find a path to the image in my project?


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
        <h1>Make Order</h1>
        <HeaderButton 
          onClick={props.onShowCart}
         />
      </header>
      <div className={classes['main-image']}>
        <img 
        src='https://cdn.pixabay.com/photo/2018/09/10/18/12/colorful-3667662_1280.jpg' 
        alt='products'
        />
      </div>
    </>
  );
}

export default Header;