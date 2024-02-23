import React from 'react'
import style from './NavbarContent.module.css'
import logoHeader from '../../assets/commons/logo-header.svg'
import { NavLink } from 'react-router-dom'

const NavbarContent = ({ isLoggedIn, isOnDashboard }) => {
  return (
    <>
      { (!isOnDashboard) ? <nav className={style.navbar}>
      <img src={logoHeader} alt='logo' className={style.logo} />
      <ul className={style.navList}>
        <li><NavLink to='/' exact activeclassname={style.active} className={style.navItem}>Home</NavLink></li>
        <li><NavLink to='/aboutus' activeclassname={style.active} className={style.navItem}>About us</NavLink></li>
        <li><NavLink to='/faqs' activeclassname={style.active} className={style.navItem}>FAQs</NavLink></li>
        {
          isLoggedIn ? <li><NavLink to='/login' activeclassname={style.active} className={style.navItem}>Logout</NavLink></li>
            : <li><NavLink to='/login' activeclassname={style.active} className={style.navItem}>Login</NavLink></li>
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