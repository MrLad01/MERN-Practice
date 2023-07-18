import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login />} />
      </Route>
    )
  )

  return (
    <RouterProvider route={route} />
  )
}

export default App
