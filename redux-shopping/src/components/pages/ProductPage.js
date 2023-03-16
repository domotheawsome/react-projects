import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/ProductsSlice";
import ProductItem from "../ProductItem";



export default function ProductPage() {

    const products = useSelector(selectProducts)
    return(
        <div>
            <h1 className="homepage">Delicious! Buy some candy!</h1>
        <div className="card-container ">
            
        {products.map(product => 
        <ProductItem 
            key={product.id}
            product={product}
        />)}
        </div>
        </div>
    )
}