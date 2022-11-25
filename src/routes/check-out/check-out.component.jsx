import { useContext } from 'react';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';

import './check-out.styles.scss';

const CheckOut = () => {
  const {
    cartItems, totalPrice
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        );
      })}
      <span className="total">
        Total Price:
        {totalPrice}
      </span>
    </div>
  );
};

export default CheckOut;
