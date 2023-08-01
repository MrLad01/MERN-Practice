import React, { createContext, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload.user };
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

  return { ...context };
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const { last_name } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Make an API request to fetch user data by ID
        const response = await fetch(`http://localhost:4000/user/${last_name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        console.log('API Response:', userData);
        dispatch({ type: 'LOGIN', payload: { user: userData } });
      } catch (error) {
        // Handle errors...
        console.error(error);
      }
    };

    if (!state.user) {
      fetchUser();
    }
  }, [last_name, state.user]); // Add last_name and state.user as dependencies

  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
