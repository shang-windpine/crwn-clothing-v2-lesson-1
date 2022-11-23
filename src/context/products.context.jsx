import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],

});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
