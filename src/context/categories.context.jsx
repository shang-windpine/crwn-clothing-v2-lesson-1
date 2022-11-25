import { useEffect, createContext, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},

});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
