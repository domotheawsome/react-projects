import React from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import CartPage from './components/pages/CartPage';
import Nav from './components/Nav';
import './App.css';

import ProductPage from './components/pages/ProductPage';
import HomePage from './components/pages/HomePage';

//import recieveProducts from './redux/slices/ProductsSlice.js'

export default function App() {
    const dispatch = useDispatch()
    dispatch({type: "products/loadProducts"})

    return(
        <>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
        </>
        
    );
}