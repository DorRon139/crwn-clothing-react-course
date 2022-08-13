import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Description</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          const { id, name, imageUrl, price, quantity } = item;
          return (
            <tr key={id}>
              <td>
                <img src={imageUrl} alt={name} />
              </td>
              <td>{name}</td>
              <td>
                <span>decrement</span>
                {quantity}
                <span onClick={() => addItemToCart(item)}>increment</span>
              </td>
              <td>{price * quantity}</td>
              <td>X</td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>TOTAL: ${}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Checkout;
