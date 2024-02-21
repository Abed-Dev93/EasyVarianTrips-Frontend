import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Aboutus from '../pages/aboutus/Aboutus'
import Contactus from '../pages/contactus/Contactus'
import Faqs from '../pages/faqs/Faqs'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Layout from './Layout'

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/faqs' element={<Faqs />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Router