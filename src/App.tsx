import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/ui-elements/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = (): void => {
    setIsCartVisible(true);
  };

  const hideCartHandler = (): void => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onExit={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
