import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutAuthUser } from '../../utils/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import {
  LogoContainer, NavigationContainer, NavLinks, NavLink
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" className="nav-link" onClick={signOutAuthUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink className="nav-link" to="/auth">
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
