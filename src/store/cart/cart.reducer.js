import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        deleteItemFromCart(state, action) {
            state.cartItems = deleteCartItem(state.cartItems, action.payload);
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        }
    }
})

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItems.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
}

export const { setIsCartOpen, addItemToCart, removeItemFromCart, deleteItemFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = INITIAL_STATE, action = {}) => {
//     const {type, payload} = action;

//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS : {
//             return {
//                 ...state,
//                 cartItems: payload,
//             }
//         }

//         case CART_ACTION_TYPES.SET_IS_CART_OPEN : {
//             return {
//                 ...state,
//                 isCartOpen: payload,
//             }
//         }

//         default:
//             return state;
//     }
// }