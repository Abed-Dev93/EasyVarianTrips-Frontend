import React from 'react'
import style from './NavbarContent.module.css'
import logoHeader from '../../assets/commons/logo-header.svg'

const NavbarContent = ({ isLoggedIn, isOnDashboard }) => {
  return (
    <>
      { (!isOnDashboard) ? <nav className={style.navbar}>
      <img src={logoHeader} alt='logo' className={style.logo} />
      <ul className={style.navList}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>About</li>
        <li className={style.navItem}>Contact</li>
        <li className={style.navItem}>FAQs</li>
        {
          isLoggedIn ? <li className={style.navItem}>Logout</li>
            : <li className={style.navItem}>Login</li>
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