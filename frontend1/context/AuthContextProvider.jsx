
import { useContext } from "react";
import React, { useState } from 'react';
import { createContext, useReducer, useEffect} from 'react'


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {user: action.payload}
        case 'LOGOUT':
            return { user: null}
        default:
            return state
    }
}

export const useAuthContext = () => {
    const context = React.useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext cannot be used inside an AuthContextProvider')
    }

    return context
}



export const AuthContextProvider = ({ children, last_name }) => {
    const [state, dispatch] = useReducer(authReducer, {
      user: null
    });
  

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
          dispatch({ type: 'LOGIN', payload: userData });
        } catch (error) {
          // Handle errors...
          console.error(error);
        }
      };
  
      if (!state.user) {
        fetchUser();
      }
    }, [last_name]);
  
    console.log('AuthContext state: ', state);
  
    return (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };


