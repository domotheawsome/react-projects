import React from "react";
import { useDispatch  } from "react-redux";
import {  addItemsToCart } from "../redux/slices/ProductsSlice";

export default function ProductItem({ product}) {
  const dispatch = useDispatch();
  const { id, name, photoUrl, price, inStock } = product;



  const [counter, setCounter] = React.useState(0);
  
  //console.log('counter:', counter);
  //console.log('inStock:', inStock);


  const handleIncrement = () => {
    if(counter < inStock){
      setCounter(counter+1)
        //dispatch(addToCart({id}));
    } else {
      alert("Reached maximum stock for this product");
    }
  };

  const handleDecrement = () => {
    if(counter > 0){
        setCounter(counter-1)
    } else {
      alert("Product counter already at 0");
    }
  };
// if its 0, use addtocart
// if its >0, use additemsto cart
  const addCart = () => {
    console.log('adding to cart:', counter);
    dispatch(addItemsToCart({ id, counter }));
    setCounter(0)
  };
  
  return(
   
    <div  className="card b text-center">
      <div class="card-body">
      <img src={photoUrl} alt={name} height={250} width={250} />
      <h5 className="card-title">{name}</h5>
      
      <p className="card-subtitle mb-2 text-muted">Units In Stock: {inStock}</p>
      <h4 className="card-text">${price}</h4>
      
      
      <form className="">
        
        
        <button type="button" className="btn btn-primary btn-size" onClick={handleIncrement}>
          +
        </button>
        <label style={{fontWeight: '600',color: '#c92424'}} className="divider">{counter}</label>
        <button type="button" className="btn btn-primary btn-size divider" onClick={handleDecrement}>
          -
        </button>
        
        <button type="button" className="btn btn-primary divider btn-size" onClick={addCart} disabled={inStock===0}>
        {inStock===0 ? "Out of stock" : "Cart"}
        </button>
  
      </form> 
      </div>
      </div>
  )
}