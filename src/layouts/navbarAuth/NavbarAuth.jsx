import React, { useState, useEffect } from 'react'
import style from './NavbarAuth.module.css'
import NavbarContent from '../../components/navbar/NavbarContent'
import Typed from 'typed.js'

const NavbarAuth = ({ isOnLoginForm }) => {

  const [isOnLoginPage, setIsOnLoginPage] = useState(true)

  useEffect(() => {
    const options = {
      strings: [' ', ' ', isOnLoginForm === true ? 'log in and enjoy searching!!' : 'register and start your journeys!!'],
      typeSpeed: 80,
      backspeed: 30,
      showCursor: false
    }
    const typed = new Typed('.heroSectionTitleTyped', options)
  }, [isOnLoginForm])

  return (
    <div className={style.headerContainer}>
        <NavbarContent isOnLoginPage={isOnLoginPage} />
        <section className={style.headerHeroSection}>
          <i><h1 className={`${style.headerHeroSectionTitle} heroSectionTitleTyped`}></h1></i>
        </section>
    </div>
  )
}

export default NavbarAuth