import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

  return (
    <div className='flex flex-col min-h-screen max-w-[1440px] mx-4 font-sans bg-body-color'>
        <Header/>
        <main className='flex-grow'>
        <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout