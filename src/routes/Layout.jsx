import React from 'react'
import Footer from '../layouts/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout