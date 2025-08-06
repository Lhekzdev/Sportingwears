import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { Shopcontext } from './contexts/Cart.context';
import { DropProv } from './contexts/Drop.down.context';

// import { CategoriesProvider } from './contexts/user.context';
// import { CartProvider } from './contexts/cart.context';

import './index.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <Shopcontext>
          <DropProv>
            <App />
          </DropProv>
        </Shopcontext>
        
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
