import { createSlice } from "@reduxjs/toolkit";
import products from '../../data/products.json';
const initialState = {
    products: [],
    cart: [],
    cartTotalPrice: 0,
    cartItems: 0,
};

const mappedProducts = products.map((product) => {
    return {
      ...product,
      id: Number(product.id),
      amount: 0,
    };
  });

 const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: { 
        loadProducts: (state) => {
            state.products = mappedProducts
        }, 
        addToCart: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((product) => product.id === id);
            const inCart = state.cart.find((product) => product.id === id);
            if (inCart) {
              product.inStock--;
              product.amount = product.amount >= 1 ? product.amount + 1 : 1;
              state.cart = state.cart.map((product) => {
                if (product.id === id) {
                  return {
                    ...product,
                    inStock: product.inStock - 1,
                    amount: product.amount + 1,
                  };
                }
                return product;
              });
              state.cartTotalPrice += product.price;
              state.cartItems++;
            } else {
              if (product.inStock > 0) {
                product.inStock--;
                product.amount = product.amount >= 1 ? product.amount + 1 : 1;
                state.cart.push(product);
                state.cartTotalPrice += product.price;
                state.cartItems++;
              }
            }
          },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((product) => product.id === id);
            if (state.cart.find((product) => product.id === id)) {
              product.inStock++;
              product.amount = product.amount >= 1 ? product.amount - 1 : 0;
              state.cart = state.cart.map((product) => {
                if (product.id === id) {
                  return {
                    ...product,
                    inStock: product.inStock + 1,
                    amount: product.amount - 1,
                  };
                }
                return product;
              });
              state.cartTotalPrice -= product.price;
              state.cartItems--;
            }
          },
          addItemsToCart: (state, action) => {
            const { id, counter } = action.payload;
            const amount = parseInt(counter);
            const product = state.products.find((product) => product.id === id);
            const inCart = state.cart.find((product) => product.id === id);
            if (inCart) {
              product.inStock -= amount;
              product.amount = product.amount >= 1 ? product.amount + amount : amount;
              state.cart = state.cart.map((product) => {
                if (product.id === id) {
                  return {
                    ...product,
                    inStock: product.inStock - amount,
                    amount: product.amount + amount,
                  };
                }
                return product;
              });
              state.cartTotalPrice += product.price * amount;
              state.cartItems += amount;
            } else {
              if (product.inStock > 0) {
                product.inStock -= amount;
                product.amount =
                  product.amount >= 1 ? product.amount + amount : amount;
                state.cart.push(product);
                state.cartTotalPrice += product.price * amount;
                state.cartItems += amount;
              }
            }
          },
          deleteItemFromCart: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((product) => product.id === id);
            const productInCart = state.cart.find((product) => product.id === id);
            product.inStock += productInCart.amount;
            product.amount = 0;
            state.cart = state.cart.filter((product) => product.id !== id);
            state.cartTotalPrice -= product.price * productInCart.amount;
            state.cartItems -= productInCart.amount;
          },
          checkout: (state, action) => {
            state.cart = [];
            state.cartTotalPrice = 0;
            state.cartItems = 0;
            state.products = state.products.map((product) => {
              return {
                ...product,
                amount: 0,
              };
            });
          },
     }
    
  })

export default productsSlice.reducer

export const {
    loadProducts,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
    addItemsToCart,
    checkout,
  } = productsSlice.actions;

  export const selectProducts = (state) => state.products.products;
  export const selectCart = (state) => state.products.cart;

  export const selectCartItems = (state) => {
    let cartMap = {};
    state.products.cart.forEach((product) => {
      if (cartMap[product.name]) {
        cartMap[product.name] += product.amount;
      } else {
        cartMap[product.name] = product.amount;
      }
    });
    return cartMap;
  };

  export const selectCartCountById = (action) => (state) => {
    const id = parseInt(action);
    const product = state.products.products.find((product) => product.id === id);
    return product?.amount ? product.amount : 0;
  };
  