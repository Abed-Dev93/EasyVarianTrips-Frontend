import React, { useEffect, useState } from 'react'
import style from './PackagesController.module.css'
import NavbarPackages from '../../layouts/navbarPackages/NavbarPackages'
import { useTripContext } from '../../contexts/TripContext'
import { useUserContext } from '../../contexts/UserContext'
import axios from 'axios'

const PackagesController = () => {

  const { setPageSize } = useTripContext()
  const   { user, isUserChecked } = useUserContext()
  const [ tripsByUser, setTripsByUser ] = useState([])

  useEffect(() => {
    const fetchTripsByUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/byUser/${user._id}`)
        console.log('TRIPSSSS::::::::', response.data.Trips)
        setTripsByUser(response.data.Trips)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchTripsByUser()
    setPageSize(12)
  }, [user])

  return ( 
    <>
      <NavbarPackages />
      <main className={style.aboutusPackagesContainer}>
          <h1 className={style.packagesTitle}>{`Check ${user.name} Trips`}</h1>
          <article className={style.aboutusPackages}>
              {
                  tripsByUser.map((trip, i) => (
                      <div className={style.packageItem} key={i}>
                          <img src={`${process.env.REACT_APP_PATH}/${trip.images[0]}`} className={style.packagePicture} alt={trip.toLocation[trip.toLocation.length - 1]} />
                          <p className={style.packageLocation}>{trip.toLocation[trip.toLocation.length - 1]}</p>
                          <p className={style.packagePrice}>${trip.price}</p>
                      </div>
                  ))
              }
          </article>
      </main>
    </>
  )
}

export default PackagesController