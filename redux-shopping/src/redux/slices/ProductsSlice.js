import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

const initialState = {
  products: products.map((product) => ({
    ...product,
    id: Number(product.id),
    amount: 0,
  })),
  cart: [],
  cartTotalPrice: 0,
  cartItems: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find((p) => p.id === id);
      const inCart = state.cart.find((p) => p.id === id);
      if (product.inStock > 0) {
        product.inStock--;
        product.amount++;

        if (inCart) {
          state.cart = state.cart.map((p) => (p.id === id ? product : p));
        } else {
          state.cart.push(product);
        }

        state.cartTotalPrice += product.price;
        state.cartItems++;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find((p) => p.id === id);
      const inCart = state.cart.find((p) => p.id === id);

      if (inCart && product.amount > 0) {
        product.inStock++;
        product.amount--;

        state.cart = state.cart.map((p) => (p.id === id ? product : p));
        state.cartTotalPrice -= product.price;
        state.cartItems--;
      }
    },
    addItemsToCart: (state, action) => {
      const { id, counter } = action.payload;
      const amount = parseInt(counter);
      const product = state.products.find((p) => p.id === id);
      const inCart = state.cart.find((p) => p.id === id);

      if (product.inStock >= amount) {
        product.inStock -= amount;
        product.amount += amount;

        state.cart = inCart
          ? state.cart.map((p) => (p.id === id ? product : p))
          : [...state.cart, product];

        state.cartTotalPrice += product.price * amount;
        state.cartItems += amount;
      }
    },
    deleteItemFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find((p) => p.id === id);
      const productInCart = state.cart.find((p) => p.id === id);

      if (productInCart) {
        product.inStock += productInCart.amount;
        product.amount = 0;
        state.cart = state.cart.filter((p) => p.id !== id);
        state.cartTotalPrice -= product.price * productInCart.amount;
        state.cartItems -= productInCart.amount;
      }
    },
    checkout: (state) => {
      state.cart = [];
      state.cartTotalPrice = 0;
      state.cartItems = 0;
      state.products = state.products.map((p) => ({ ...p, amount: 0 }));
    },
  },
});

export default productsSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  deleteItemFromCart,
  addItemsToCart,
  checkout,
} = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;

export const selectCartCountById = (action) => (state) => {
  const id = parseInt(action);
  const product = state.products.products.find((product) => product.id === id);
  return product?.amount ? product.amount : 0;
};
