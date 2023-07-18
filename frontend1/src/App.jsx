import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
