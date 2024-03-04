import React, { useEffect, useState } from 'react'
import style from './NavbarContent.module.css'
import logoHeader from '../../assets/commons/logo-header.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

const NavbarContent = ({ isOnDashboard, isOnLoginPage }) => {

  const { user, isUserChecked, logout } = useUserContext()
  const location = useLocation()

  return (
    <>
      { (!isOnDashboard) ? <nav className={style.navbar}>
      <img src={logoHeader} alt='logo' className={ isOnLoginPage? style.logoHidden : style.logo } />
      <ul className={style.navList}>
        <li><NavLink to='/' exact className={ location.pathname === '/' ? style.navItemActive : style.navItem }>Home</NavLink></li>
        <li><NavLink to='/aboutus' className={ location.pathname === '/aboutus' ? style.navItemActive : style.navItem }>About us</NavLink></li>
        { user && user.role === 'agency' ? <li><NavLink to='/packagesController' className={ location.pathname === '/packagesController' ? style.navItemActive : style.navItem }>Packages</NavLink></li> :
          <li><NavLink to='/packages' className={ location.pathname === '/packages' ? style.navItemActive : style.navItem }>Packages</NavLink></li>   
        }
        <li><NavLink to='/faqs' className={ location.pathname === '/faqs' ? style.navItemActive : style.navItem }>FAQs</NavLink></li>
        {
          isUserChecked === true ? <div className={style.loggedUserInfo}> 
                            <li className={style.finalListItem}> <img src={`${process.env.REACT_APP_PATH}/${user.image}`} className={style.userAvatar} alt={user.name} /> <span className={style.navItemLogged}>{user.name}</span> </li>
                            <li><NavLink to='/login' className={style.navItemLogout} onClick={logout}>Logout</NavLink></li> </div>
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