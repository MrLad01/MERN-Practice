import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from '../hooks/useAuthContext'

const App = () => {

  const { user } = useAuthContext()


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes>
        <Route path='/' element={!user ? <Login />: <p>Hello There!!!</p>} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/register' element={<Register />} />
      </Routes>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
