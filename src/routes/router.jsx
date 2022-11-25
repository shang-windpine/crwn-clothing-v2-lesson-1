import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom';
import Navigation from '../components/navigation/navigation.component';
import Home from './home/home.component';
import Shop from './shop/shop.component';
import Authentication from './authentication/authentication.component';
import CheckOut from './check-out/check-out.component';
import CategoriesPreview from './categories-preview/categories-preview.component';
import Category from './category/category.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />}>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Route>
      <Route path="auth" element={<Authentication />} />
      <Route path="check-out" element={<CheckOut />} />
    </Route>
  )
);

export default router;
