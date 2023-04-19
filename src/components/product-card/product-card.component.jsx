import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";
import Button from '../button/button.component';

import {
    ProductCardContainer,
    ProductImage,
    ProductName,
    ProductPrice,
    Footer
} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    };

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