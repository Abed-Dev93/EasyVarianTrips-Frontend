import React, { useState, useEffect } from 'react'
import style from './NavbarHome.module.css'
import NavbarContent from '../../components/navbar/NavbarContent'
import flyEmirates from '../../assets/homepage/fly-emirates.png'
import travigo from '../../assets/homepage/trivago.png'
import airbnb from '../../assets/homepage/airbnb.png'
import turkishAirlines from '../../assets/homepage/turkish-airlines.png'
import swiss from '../../assets/homepage/swiss.svg'
import { IoIosAdd } from "react-icons/io"
import Typed from 'typed.js'

const NavbarHome = () => {

  const [isOnDashboard, setIsOnDashboard] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const options = {
      strings: ['Find your dream destinations, travel around the world, search more dynamically'],
      typeSpeed: 80,
      backspeed: 30,
      showCursor: false
    }
    const typed = new Typed('.staticticsDescriptionTyped', options)
  }, [])

  return (
    <header className={style.headerContainer}>
      <div className={style.headerPartOne}>
        <NavbarContent isOnDashboard={isOnDashboard} isLoggedIn={isLoggedIn} />
        <section className={style.headerHeroSection}>
          <h1 className={`${style.headerHeroSectionTitle} staticticsDescriptionTyped`}></h1>
          <article className={style.bookerStatistics}>
            <div className={style.membersAvatar}>
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <img src='https://picsum.photos/seed/picsum/200/300' className={style.memberAvatar} alt='member' />
              <div className={style.memberAvatarAdd}><IoIosAdd /></div>
            </div>
            <p className={style.statisticsDescription}>2,500 people booked Trips with EasyVarianTrips</p>
          </article>
        </section>
      </div>
      <section className={style.topCompanies}>
        <img src={flyEmirates} alt='' className={style.companyIcon} />
        <img src={travigo} alt='' className={style.companyIcon} />
        <img src={airbnb} alt='' className={style.companyIcon} />
        <img src={turkishAirlines} alt='' className={style.companyIcon} />
        <img src={swiss} alt='' className={style.companyIcon} />
      </section>
    </header>
  )
}

export default NavbarHome