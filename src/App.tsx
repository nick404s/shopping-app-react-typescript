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

  const handleOrder = (): void => {
    setIsCartVisible(false);
    
    console.log('Ordering...');
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onExit={hideCartHandler} onOrder={handleOrder} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
