import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cart.context';
import ProductsProvider from './context/products.context';
import { UserProvider } from './context/user.context';
import router from './routes/router';

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
