import {addItemToCart} from "../../store/cart/cart.reducer";
import {useDispatch} from "react-redux";

import Button from '../button/button.component';

import {
    ProductCardContainer,
    ProductImage,
    ProductName,
    ProductPrice,
    Footer
} from "./product-card.styles";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;


    const addProductToCart = () => dispatch(addItemToCart(product));

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