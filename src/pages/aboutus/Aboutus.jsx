import React from 'react'
import style from './Aboutus.module.css'
import NavbarAboutus from '../../layouts/navbarAboutus/NavbarAboutus'
import SightseeingAboutus from '../../layouts/sightseeingAboutus/SightseeingAboutus'
import TripCategories from '../../layouts/tripCategories/TripCategories'
import Contact from '../../layouts/contact/Contact'

const Aboutus = () => {
  return (
    <>
      <NavbarAboutus />
      <main className={style.aboutus}>
        <div className={style.aboutusFirstPart}>
          <SightseeingAboutus />
        </div>
        <section className={style.secondHeroSection}>
          <i><h2 className={style.secondHeroSectionTitle}>wanderlust</h2></i>
        </section>
        <div className={style.aboutusSecondPart}>
          <TripCategories />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default Aboutus