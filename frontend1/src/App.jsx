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
          <Route index element={<HomeComponent />} />
          <Route path='/:last_name' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
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
  const { user } = useAuthContext();

  return user ? <Home /> : <Navigate to="/login" />;
};


const LoginComponent = () => {
  const { user, last_name } = useAuthContext();


  return !user ? <Login /> : <Navigate to={`/${last_name}`} />;
};

export default App
