import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../redux/slices/ProductsSlice";
import { selectCart } from "../../redux/slices/ProductsSlice";
import CartItem from "../CartItem";
export default function CartPage() {
    const cart = useSelector(selectCart)
    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
    const dispatch = useDispatch();
    function handleCheckout() {
        dispatch(checkout())
    }
    return(
        <div>
            <h1 className="homepage">Here's your cart!</h1>
        <div className="card-container ">
            
        {cart.map(product => 
        <CartItem 
            key={product.id}
            product={product}
        />)}
        
        
        </div>
        <div className="checkout-container">
        <p className="checkout ">${totalPrice.toFixed(2)}</p>
        <button type="button" className="btn btn-danger divider btn-size" onClick={handleCheckout}>Checkout</button>
        </div>
        </div>
    )
}