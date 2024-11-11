import React from 'react';
import './App.css';
import './global.css'
import CartPgae from './Page/CartPage/CardPage';
import HomePage from './Page/HomePage/HomePage';
import LoyutHome from './Loyut/HomePageLoyut';
import ProductPage from './Page/ProductCatalogPage/ProductPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProductsProvider } from './Context/Products';
import { CartProvider } from './Context/Cart';

function App() {

  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route index element={<LoyutHome />} />
              <Route path='product/pizza' element={<ProductPage category="pizza" />} />
              <Route path='product/rolls' element={<ProductPage category="rolls" />} />
              <Route path='/cartPage' element={<CartPgae />} />
              {/* <Route /> */}
            </Route>
          </Routes>
        </CartProvider>
      </ProductsProvider>


    </div>
  );
}

export default App;
