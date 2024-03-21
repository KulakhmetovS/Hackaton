import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Header from './components/Header'
import Product from './components/Product';
import Products from './components/Products';
import Basement from './components/Basement';
import ProductCard from './components/ProductCard'

import {Routes, Route} from 'react-router-dom';

function App() {

  /*const form = () => {
    ReactDOM.render(<Form />, document.getElementById('App'));
  }*/

  return (
    <div id="App">
    <Header/>
    <Routes>
      <Route exact path='/Main' element={
                                          <div>
                                            <Products />
                                            <Basement />
                                          </div>
                                        } />
      <Route exact path='/ProductCard' element={
                                                  <div>
                                                    <ProductCard />
                                                    <Basement />
                                                  </div>
                                                } />
      <Route exact path='/form' element={<Form />} />
    </Routes>
    </div>
  );
}

export default App;
