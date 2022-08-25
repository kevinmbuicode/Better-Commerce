import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductInfo from './components/ProductInfo';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products/:id' element={<ProductInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
