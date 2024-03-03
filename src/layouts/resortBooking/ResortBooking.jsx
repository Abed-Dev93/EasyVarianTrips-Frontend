import React from 'react'
import style from './ResortBooking.module.css'
import destination from '../../assets/homepage/destination.svg'
import comfortableSearch from '../../assets/homepage/comfortable-search.svg'
import letsGo from '../../assets/homepage/lets-go.svg'
import plane from '../../assets/homepage/plane.png'
import hawai from '../../assets/homepage/hawai.png'
import { FcStatistics } from "react-icons/fc"

const ResortBooking = () => {
  return (
    <section className={style.resortBookingContainer}>
      <div className={style.ResortBookingPartOne}>
        <p className={style.resortBookingSlogan}>dynamic & easy</p>
        <h2 className={style.resortBookingTitle}>get your favorite resort bookings</h2>
        <article className={style.resortBookingArticleContainer}>
          <div className={style.resortBookingArticle}>
            <img src={destination} className={style.resortBookingArticleIcon} alt='' />
            <div className={style.resortBookingArticleContent}>
              <h3 className={style.resortBookingArticleContentTitle}>choose destination</h3>
              <p className={style.resortBookingArticleContentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
          <div className={style.resortBookingArticle}>
            <img src={comfortableSearch} className={style.resortBookingArticleIcon} alt='' />
            <div className={style.resortBookingArticleContent}>
              <h3 className={style.resortBookingArticleContentTitle}>comfortable search</h3>
              <p className={style.resortBookingArticleContentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
          <div className={style.resortBookingArticle}>
            <img src={letsGo} className={style.resortBookingArticleIcon} alt='' />
            <div className={style.resortBookingArticleContent}>
              <h3 className={style.resortBookingArticleContentTitle}>let's go</h3>
              <p className={style.resortBookingArticleContentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
        </article>
      </div>
      <div className={style.ResortBookingPartTwo}>
        <img src={plane} className={style.partTwoIcon} alt='plane' />
        <div className={style.resortBookingCard}>
          <img src={hawai} className={style.cardIcon} alt='hawai' />
          <div className={style.cardPartTwo}>
            <h3 className={style.cardPartTwoTitle}>Trip to Hawaii</h3>
            <p className={style.cardPartTwoParagraph}>14-29 june| by jr martinax</p>
            <p className={style.cardPartTwoParagraph}><FcStatistics /> 60 people are interested</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResortBooking