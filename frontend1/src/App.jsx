import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes, Navigate, useParams } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from '../context/AuthContextProvider'
import Home from './pages/Home'
import { AuthContextProvider } from '../context/AuthContextProvider'




const App = () => {
  
  const { user } = useAuthContext()
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <AuthContextProvider>
        <Routes>
          <Route path='/:last_name' element={user ? <HomeComponent />: <Navigate to="/login"/>} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthContextProvider>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

const HomeComponent = () => {
  const { last_name } = useParams(); // Accessing the last_name parameter from the URL
  const { user } = useAuthContext();

  return user ? <Home last_name={last_name} /> : <Navigate to="/login" />;
};

export default App
