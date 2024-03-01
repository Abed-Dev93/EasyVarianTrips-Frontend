import React from 'react'
import style from './SightseeingAboutus.module.css'
import sightseeing from '../../assets/aboutus/sightseeing.png'

const SightseeingAboutus = () => {
  return (
    <section className={style.sightseeingContainer}>
        <article className={style.sightseeingPartOne}>
            <p className={style.sightseeingSlogan}>promotion</p>
            <h2 className={style.sightseeingTitle}>we provide you best regional sightseeing trips</h2>
            <p className={style.sightseeingDescription}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
            <button className={style.sightseeingView}>view packages</button>
        </article>
        <img src={sightseeing} className={style.aboutusSightseeingPicture} alt='chilling' />
    </section>
  )
}

export default SightseeingAboutus