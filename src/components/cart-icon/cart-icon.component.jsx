import {useContext} from "react";


import {CartContext} from "../../contexts/cart.context";

import {CartIconContainer, CartShoppingIcon, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <CartShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;