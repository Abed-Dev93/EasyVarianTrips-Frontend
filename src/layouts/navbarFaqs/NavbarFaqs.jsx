import React, { useState, useEffect } from 'react'
import style from './NavbarFaqs.module.css'
import Typed from 'typed.js'
import NavbarContent from '../../components/navbar/NavbarContent'

const NavbarFaqs = () => {

    const [isOnDashboard, setIsOnDashboard] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const options = {
      strings: ['FAQs'],
      typeSpeed: 80,
      backspeed: 30,
      showCursor: true
    }
    const typed = new Typed('.herSectionTitleTyped', options)
  }, [])

  return (
    <header className={style.headerContainer}>
        <NavbarContent isOnDashboard={isOnDashboard} isLoggedIn={isLoggedIn} />
        <section className={style.headerHeroSection}>
          <i><h1 className={`${style.headerHeroSectionTitle} herSectionTitleTyped`}></h1></i>
        </section>
    </header>
  )
}

export default NavbarFaqs