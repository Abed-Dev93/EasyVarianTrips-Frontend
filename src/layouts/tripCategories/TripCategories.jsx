import React from 'react'
import style from './TripCategories.module.css'
import paris from '../../assets/aboutus/paris.png'

const TripCategories = () => {
  return (
    <section className={style.tripCategories}>
        <img src={paris} className={style.tripCategoriesAds} alt='paris' />
        <article className={style.tripPartTwo}>
            <p className={style.tripSlogan}>trend</p>
            <h2 className={style.tripTitle}>our popular trip plans</h2>
            <p className={style.tripDescription}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
            <div></div>
        </article>
    </section>
  )
}

export default TripCategories