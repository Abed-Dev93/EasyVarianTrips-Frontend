import React, { useEffect, useState } from 'react'
import style from './NavbarContent.module.css'
import logoHeader from '../../assets/commons/logo-header.svg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../../contexts/UserContext'

const NavbarContent = ({ isOnDashboard, isOnLoginPage }) => {

  const { isUserChecked, logout } = useUserContext()

  return (
    <>
      { (!isOnDashboard) ? <nav className={style.navbar}>
      <img src={logoHeader} alt='logo' className={ isOnLoginPage? style.logoHidden : style.logo } />
      <ul className={style.navList}>
        <li><NavLink to='/' exact className={style.navItem}>Home</NavLink></li>
        <li><NavLink to='/aboutus' className={style.navItem}>About us</NavLink></li>
        <li><NavLink to='/packages' className={style.navItem}>Packages</NavLink></li>
        <li><NavLink to='/faqs' className={style.navItem}>FAQs</NavLink></li>
        {
          !isUserChecked === true ? <li><NavLink to='/login' className={style.navItemLogout} onClick={logout}>Logout</NavLink></li>
            : <li><NavLink to='/login' className={style.navItem}>Login</NavLink></li>
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