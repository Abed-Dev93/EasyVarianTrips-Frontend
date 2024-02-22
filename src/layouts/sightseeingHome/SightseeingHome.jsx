import React from 'react'
import style from './SightseeingHome.module.css'
import sightseeing1 from '../../assets/homepage/sightseeing-1.svg'
import sightseeing2 from '../../assets/homepage/sightseeing-2.svg'
import sightseeing3 from '../../assets/homepage/sightseeing-3.svg'
import sightseeing4 from '../../assets/homepage/sightseeing-4.svg'

const SightseeingHome = () => {
  return (
    <section className={style.sightseeingContainer}>
        <article className={style.sightseeingPartOne}>
            <p className={style.sightseeingSlogan}>promotion</p>
            <h2 className={style.sightseeingTitle}>we provide you best international sightseeing trips</h2>
            <p className={style.sightseeingDescription}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        </article>
        <button className={style.sightseeingView}>view packages</button>
        <article className={style.sightseeingCardContainer}>
            <div className={style.sightseeingCard}>
                <img src={sightseeing1} className={style.sightseeingCardPhoto} alt='sightseeing' />
                <div className={style.sightseeingCardPrice}>$700</div>
            </div>
            <div className={style.sightseeingCard}>
            <img src={sightseeing2} className={style.sightseeingCardPhoto} alt='sightseeing' />
                <div className={style.sightseeingCardPrice}>$800</div>
            </div>
            <div className={style.sightseeingCard}>
            <img src={sightseeing3} className={style.sightseeingCardPhoto} alt='sightseeing' />
                <div className={style.sightseeingCardPrice}>$500</div>
            </div>
            <div className={style.sightseeingCard}>
            <img src={sightseeing4} className={style.sightseeingCardPhoto} alt='sightseeing' />
                <div className={style.sightseeingCardPrice}>$400</div>
            </div>
        </article>
    </section>
  )
}

export default SightseeingHome