import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/check-out');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length > 0
            ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
            : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <Button clickHandler={goToCheckoutHandler}>Check Out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
