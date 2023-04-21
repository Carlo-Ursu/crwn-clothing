import {createContext, useReducer} from "react";

import {createAction} from '../utils/reducer/reducer.utils';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    deleteItemFromCart: () => {
    },
    cartCount: 0,
    cartTotal: 0,
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS : {
            return {
                ...state,
                ...payload,
            }
        }

        case CART_ACTION_TYPES.SET_IS_CART_OPEN : {
            return {
                ...state,
                isCartOpen: payload,
            }
        }

        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItems.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
}

export const CartProvider = ({children}) => {

    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] =
        useReducer(cartReducer, INITIAL_STATE);


    const updateCartItemsReducer = (newCartItems) => {
        // generate newCartCount

        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);

        // generate newCartTotal

        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        // dispatch new action with payload = {
        //     newCartItems,
        //     newCartTotal,
        //     newCartCount
        // }
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount,
            }));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const deleteItemFromCart = (cartItemToDelete) => {
        const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    };


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        deleteItemFromCart,
        cartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}