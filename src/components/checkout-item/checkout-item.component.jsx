import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import {
    CheckoutItemContainer, ImageContainer, CheckoutItemImage, CheckoutItemRemoveButton,
    CheckoutItemArrow, CheckoutItemName, CheckoutItemPrice, CheckoutItemQuantity, CheckoutItemValue
} from "./checkout-item.styles";


const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const {deleteItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const deleteItemHandler = () => {
        deleteItemFromCart(cartItem);
    };

    const addItemHandler = () => {
        addItemToCart(cartItem);
    };

    const removeItemHandler = () => {
        removeItemFromCart(cartItem);
    };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutItemImage src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <CheckoutItemName>{name}</CheckoutItemName>
            <CheckoutItemQuantity>
                <CheckoutItemArrow onClick={removeItemHandler}>&#10094;</CheckoutItemArrow>
                <CheckoutItemValue>{quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={addItemHandler}>&#10095;</CheckoutItemArrow>
            </CheckoutItemQuantity>
            <CheckoutItemPrice>{price}</CheckoutItemPrice>
            <CheckoutItemRemoveButton onClick={deleteItemHandler}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    )
}


export default CheckoutItem;