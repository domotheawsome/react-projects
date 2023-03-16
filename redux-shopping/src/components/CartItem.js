import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCountById, deleteItemFromCart, removeFromCart, addToCart } from "../redux/slices/ProductsSlice";

export default function CartItem({product}) {
    const dispatch = useDispatch();
    const { id, name, photoUrl, price, inStock, amount } = product;
    const currentAmount = useSelector(selectCartCountById(id));

    if (currentAmount <= 0) {
        dispatch(deleteItemFromCart({ id }));
        return null;
      }

    if (inStock === 0) {
        dispatch(deleteItemFromCart({id}))
    }

    function handleDecrement() {
        dispatch(removeFromCart({id}))
    }

    function handleIncrement() {
        dispatch(addToCart({id}))
    }
    return(
        <div  className="card b text-center">
        <div class="card-body">
        <img src={photoUrl} alt={name} height={250} width={250} />
        <h5 className="card-title">{name}</h5>
        <p  className="card-subtitle mb-2 text-muted">In Cart: {amount}</p>
        <h4 className="card-text">{(price * amount).toFixed(2)}$</h4>
        <button type="button" className="btn btn-primary divider btn-size" onClick={handleIncrement}>+</button>
        <button type="button" className="btn btn-primary divider btn-size" onClick={handleDecrement}>-</button>
        </div>
    
      </div>
    )
}