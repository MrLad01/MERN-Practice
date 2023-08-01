import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes, Navigate, useParams } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from '../context/AuthContextProvider'
import Home from './pages/Home'
import { AuthContextProvider } from '../context/AuthContextProvider'




const App = () => {
  
  // const { last_name = '' } = useParams({ defaultValue: '' });

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route index element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/register' element={<Register />} />
          <Route path='/:last_name' element={<HomeComponent />} />
        </Route>
    )
  )

  return (
    <AuthContextProvider>
     <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

const HomeComponent = () => {
  const { state } = useAuthContext();
  
  return state.user ? <Home /> : <Navigate to="/login" />;
};

const LoginComponent = () => {
  const { state } = useAuthContext();
  console.log(state);

  return !state.user ? <Login /> : <Navigate to={`/signup`} />;
};


export default App
