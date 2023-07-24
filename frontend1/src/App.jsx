import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from '../hooks/useAuthContext'
import Home from './pages/Home'
import { AuthContextProvider } from '../context/AuthContext'




const App = () => {
  
  const { user } = useAuthContext()
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <AuthContextProvider>
        <Routes>
          <Route path='/:last_name' element={user ? <Home last_name={last_name} />: <Navigate to="/login"/>} />

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

export default App
