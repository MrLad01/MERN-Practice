import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes, Navigate, useParams } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from '../context/AuthContextProvider'
import Home from './pages/Home'
import { AuthContextProvider } from '../context/AuthContextProvider'




const App = () => {
  
  const {last_name} = useParams();

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path='/:last_name' element={<HomeComponent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
    )
  )

  return (
    <AuthContextProvider last_name={last_name}>
     <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

const HomeComponent = () => {
  const { last_name } = useParams(); // Accessing the last_name parameter from the URL
  const { user } = useAuthContext();

  return user ? <Home last_name={last_name} /> : <Navigate to="/login" />;
};

export default App
