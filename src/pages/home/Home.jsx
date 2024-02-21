import React from 'react'
import style from './Home.module.css'
import Navbar from '../../layouts/navbar/Navbar'
import Services from '../../layouts/services/Services'
import ResortBooking from '../../components/resortBooking/ResortBooking'
import Sightseeing from '../../layouts/sightseeing/Sightseeing'
import Packages from '../../layouts/packages/Packages'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={style.home}>
        <div className={style.homeFirstPart}>
          <Services />
          <ResortBooking />
        </div>
        <section className={style.secondHeroSection}>
          <h2 className={style.secondHeroSectionTitle}>let's make your next holiday amazing</h2>
        </section>
        <div className={style.homeSecondPart}>
          <Sightseeing />
        </div>
        <section className={style.thirdHeroSection}>
          <article className={style.thirdHeroSectionPartOne}>
            <p className={style.thirdHeroSectionSlogan}>promotion</p>
            <h2 className={style.thirdHeroSectionTitle}>explore nature</h2>
            <div className={style.thirdHeroSectionView}>view packages</div>
          </article>
          <article className={style.thirdHeroSectionPartTwo}>
            <p className={style.thirdHeroSectionSlogan}>promotion</p>
            <h2 className={style.thirdHeroSectionTitle}>explore cities</h2>
            <div className={style.thirdHeroSectionView}>view packages</div>
          </article>
        </section>
        <div className={style.homeThirdPart}>
          <Packages />
        </div>
      </main>
    </>
  )
}

export default Home