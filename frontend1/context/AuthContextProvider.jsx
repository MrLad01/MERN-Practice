import React, { createContext, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext cannot be used inside an AuthContextProvider');
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
