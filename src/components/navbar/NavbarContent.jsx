import React, { useEffect, useState } from 'react'
import style from './NavbarContent.module.css'
import logoHeader from '../../assets/commons/logo-header.svg'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../../contexts/UserContext'

const NavbarContent = ({ isOnDashboard, isOnLoginPage }) => {

  const { isUserChecked, logout } = useUserContext()
  const location = useLocation()

  return (
    <>
      { (!isOnDashboard) ? <nav className={style.navbar}>
      <img src={logoHeader} alt='logo' className={ isOnLoginPage? style.logoHidden : style.logo } />
      <ul className={style.navList}>
        <li><NavLink to='/' exact className={ location.pathname === '/' ? style.navItemActive : style.navItem }>Home</NavLink></li>
        <li><NavLink to='/aboutus' className={ location.pathname === '/aboutus' ? style.navItemActive : style.navItem }>About us</NavLink></li>
        <li><NavLink to='/packages' className={ location.pathname === '/packages' ? style.navItemActive : style.navItem }>Packages</NavLink></li>
        <li><NavLink to='/faqs' className={ location.pathname === '/faqs' ? style.navItemActive : style.navItem }>FAQs</NavLink></li>
        {
          !isUserChecked === true ? <li><NavLink to='/login' className={style.navItemLogout} onClick={logout}>Logout</NavLink></li>
            : <li><NavLink to='/login' className={ location.pathname === '/login' ? style.navItemActive : style.navItem }>Login</NavLink></li>
       }
      </ul> </nav> :
      <nav>
      <img src={logoHeader} alt='logo' className={style.logo} />
      <ul>
        <li></li>
      </ul>
     </nav> }
     </>
  )
}

export default NavbarContent