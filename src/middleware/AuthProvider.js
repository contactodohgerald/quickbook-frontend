import React, { createContext } from 'react';

import { useLocalStorage } from '@rehooks/local-storage';

const AuthContext = createContext(null);
  
const AuthProvider = ({ children }) => {

    const [token] = useLocalStorage('token');
    const [loggedInUser] = useLocalStorage('loggedInUser');

    const value = {
        token,
        loggedInUser,
      };

    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


export const useAuth = () => {
    return React.useContext(AuthContext);
};