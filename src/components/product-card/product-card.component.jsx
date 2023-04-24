import {addItemToCart} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";

import Button from '../button/button.component';

import {
    ProductCardContainer,
    ProductImage,
    ProductName,
    ProductPrice,
    Footer
} from "./product-card.styles";

const ProductCard = ({product}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;


    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <ProductImage src={imageUrl} alt={`${name}`}/>
            <Footer className="footer">
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;