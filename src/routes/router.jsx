import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom';
import Navigation from '../components/navigation/navigation.component';
import Home from './home/home.component';
import Shop from './shop/shop.component';
import SignIn from './sign-in/sign-in.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  )
);

export default router;
