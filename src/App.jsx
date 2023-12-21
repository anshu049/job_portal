import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Jobs from './pages/Jobs'
import Notifications from './pages/Notifications'
import Listings from './pages/Listings'
import JobDesc from './components/JobDesc'
import { example_job } from './components/JobDesc'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='jobs' element={<Jobs />}/>
    <Route path='notifications' element={<Notifications/>}/>
    <Route path='listings' element={<Listings/>}/>
    {/* <Route path='/test' element={<JobDesc job={example_job}/>}/> */}
  </Route>
))

function App() {

  return <RouterProvider router={router}/>
}

export default App
