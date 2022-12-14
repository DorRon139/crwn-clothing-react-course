import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { 
    CheckoutItemContainer,
    ImageContainer,
    PriceSpan,
    QuantitySpan,
    NameSpan,
    ValueSpan,
    ArrowSpan,
    RemoveButton,
} from './checkout-item.styles.js'

const CheckoutItem = ({ cartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart  } = useContext(CartContext);

    const clearItemHandler = () => {clearItemFromCart(cartItem)}
    const addItemHandler = () => {addItemToCart(cartItem)}
    const removeItemHandler = () => {removeItemFromCart(cartItem)}
    
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
        </ImageContainer>
        <NameSpan> {name} </NameSpan>
        <QuantitySpan>
            <ArrowSpan onClick={removeItemHandler}>&#10094;</ArrowSpan>
            <ValueSpan>{quantity}</ValueSpan>
            <ArrowSpan onClick={addItemHandler}>&#10095;</ArrowSpan>
         </QuantitySpan>
        <PriceSpan> {price} </PriceSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
    )
}

export default CheckoutItem