import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cart.context';
import CategoriesProvider from './context/categories.context';
import { UserProvider } from './context/user.context';
import router from './routes/router';

const App = () => {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  );
};

export default App;
