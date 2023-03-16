import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../redux/slices/ProductsSlice'
 
export default function Nav() {
    const cart = useSelector(selectCart)
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <p className="navbar-brand marg">Redux Candy</p>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/products">Products</NavLink>
                    </li>

                </ul>
                <NavLink className="navbar-brand cart marg" to="/cart">({cart.length})<img width={45}src="./shoppingcart.png" alt="shoppingcart"/></NavLink>
                </div>
            </div>
            <Outlet />
        </nav>
    )
}