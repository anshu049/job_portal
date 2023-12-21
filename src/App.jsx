import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>

  </Route>
))

function App() {

  return <RouterProvider router={router}/>
}

export default App
