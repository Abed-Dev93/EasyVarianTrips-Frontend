import React, { useEffect } from 'react'
import style from './PackagesAboutus.module.css'
import { useTripContext } from '../../contexts/TripContext'

const PackagesAboutus = ({ handleClickBackHome }) => {

    const { trips, setPageSize } = useTripContext()

    useEffect(() => {
        setPageSize(12)
    })

  return (
    <section className={style.aboutusPackagesContainer}>
        <h1 className={style.packagesTitle}>our international packages</h1>
        <article className={style.aboutusPackages}>
            {
                trips.map((trip, i) => (
                    <div className={style.packageItem} key={i}>
                        <img src={`${process.env.REACT_APP_PATH}/${trip.images[0]}`} className={style.packagePicture} alt={trip.toLocation[trip.toLocation.length - 1]} />
                        <p className={style.packageLocation}>{trip.toLocation[trip.toLocation.length - 1]}</p>
                        <p className={style.packagePrice}>${trip.price}</p>
                    </div>
                ))
            }
        </article>
        <button className={style.backHomeButton} onClick={handleClickBackHome}>back home</button>
    </section>
  )
}

export default PackagesAboutus