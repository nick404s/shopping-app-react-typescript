import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/ui-elements/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {

  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const handleShowCart = (): void => {
    setIsCartVisible(true);
  };

  const handleHideCart = (): void => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onExit={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
