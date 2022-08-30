import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../component/checkout-item/checkout-item";


import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
 } from './check-out.styles.js'


const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock><span>Product</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock> <span>Description</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock> <span>Quantity</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock> <span>Price</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock> <span>Remove</span></CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) =>  <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )}
    <span className="Total">Total: ${ cartTotal }</span>
    </CheckoutContainer>
  );
};

export default Checkout;
