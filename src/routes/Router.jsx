import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Aboutus from '../pages/aboutus/Aboutus'
import Faqs from '../pages/faqs/Faqs'
import Login from '../pages/login/Login'
import CheckPackages from '../pages/checkPackages/CheckPackages'
import SinglePackage from '../components/singlePackage/SinglePackage'
import PackagesController from '../pages/packagesController/PackagesController'
import Layout from './Layout'

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' exact element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/packages' element={<CheckPackages />} />
        <Route path='/singlePackage/:id' element={<SinglePackage />} />
        <Route path='/packagesController' element={<PackagesController />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Router