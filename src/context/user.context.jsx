import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser]);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const func = async () => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });

      return unsubscribe;
    };
    func();
  }, []);
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
