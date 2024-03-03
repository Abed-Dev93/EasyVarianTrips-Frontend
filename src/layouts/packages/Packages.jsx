import React, { useEffect } from 'react'
import style from './Packages.module.css'
import { CiCalendar } from "react-icons/ci"
import { IoPersonSharp } from "react-icons/io5"
import { MdLocationOn } from "react-icons/md"
import { useTripContext } from '../../contexts/TripContext'
import { useNavigate } from 'react-router-dom'

const Packages = () => {

    const { trips, pageNumber, setPageNumber, setPageSize } = useTripContext()
    const navigate = useNavigate()

    const handlePageChange = (newPage) => {
        setPageNumber(newPage)
    }

    setPageSize(3)

    const handleShowPackage = (trip, id) => {
        navigate(`/singlePackage/${id}`, { state: { trip } })
    }

  return (
    <section className={style.packagesContainer}>
        <h1 className={style.packagesTitle}>our trending trip packages</h1>
        <div className={style.packages}>
            {
                trips.map((trip) => (
                    <article className={style.packageCard} key={trip._id}>
                        <img src={`${process.env.REACT_APP_PATH}/${trip.images}`} className={style.packageCardImage} alt={trip.country} />
                        <div className={style.packageCardPartTwo}>
                            <div className={style.partTwoHeader}>
                                <p className={style.partTwoHeaderOne}>
                                    <CiCalendar /> {trip.duration} days
                                </p>
                                <p className={style.partTwoHeaderTwo}>
                                    <IoPersonSharp /> {trip.users.length} people going
                                </p>
                            </div>
                            <h3 className={style.packageTitle}>{trip.toLocation[trip.toLocation.length - 1]}</h3>
                            <p className={style.packageLocation}><MdLocationOn /> {trip.country}</p>
                            <p className={style.packagePrice}>{trip.price} $</p>
                            <p className={style.packageDescription}>{trip.shortDescription}</p>
                            {
                                trip.capacity === 0 ? <p className={style.tripReserved}>no places available!</p> : 
                                    <button className={style.packageExplore} onClick={() => handleShowPackage(trip, trip._id)}>explore now</button>
                            }
                        </div>
                    </article>
                ))
            }
            <div className={style.pagination}>
                <button className={ pageNumber === 1 ? style.packageExploreHidden : style.packageExplore } onClick={() => handlePageChange(pageNumber - 1)}>previous</button>
                <button className={style.packageExplore} onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === 10}>next</button>
            </div>
        </div>
    </section>
  )
}

export default Packages