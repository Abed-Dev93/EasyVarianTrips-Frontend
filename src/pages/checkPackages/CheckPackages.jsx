import React, { useState, useEffect } from 'react'
import style from './CheckPackages.module.css'
import NavbarPackages from '../../layouts/navbarPackages/NavbarPackages'
import { MdOutlineFileDownload, MdOutlineFileUpload, MdOutlineDateRange } from "react-icons/md"
import { PiAirplaneLanding } from "react-icons/pi"
import { BsPeopleFill } from "react-icons/bs"
import checkpackages2 from '../../assets/rests/checkPackages-2.png'
import checkPackages3 from '../../assets/rests/checkPackages-3.png'
import SinglePackage from '../../components/singlePackage/SinglePackage'
import axios from 'axios'
import { useTripContext } from '../../contexts/TripContext'
import { useNavigate } from 'react-router-dom'


const CheckPackages = () => {

  const { trips, pageNumber, setPageNumber, setPageSize } = useTripContext()
  const navigate = useNavigate()

  const [isCardNotClicked, setIsCardNotClicked] = useState(true)
  const [filterByLow, setFilterByLow] = useState(false)
  const [filterByHigh, setFilterByHigh] = useState(false)
  const [filterByTransit, setFilterByTransit] = useState(false)
  const [tripsFiltered, setTripsFiltered] = useState([])
  const [formData, setFormData] = useState({
    fromLocation: '',
    toLocation: '',
    startDate: '',
    maxPrice: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/`)
    }
    catch(error) {
      console.log(error.message)
    }
  }

  const handleCardClick = (trip, id) => {
    navigate(`/singlePackage/${id}`, { state: { trip } })
  }

  const handleTransitClick = async () => {
    setFilterByTransit(true)
    setFilterByLow(false)
    setFilterByHigh(false)
    const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/transit`)
    setTripsFiltered(response.data.Trips)
  }

  const handleLowClick = async () => {
    setFilterByTransit(false)
    setFilterByLow(true)
    setFilterByHigh(false)
    const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/lowToHigh`)
    setTripsFiltered(response.data.Trips)
  }

  const handleHighClick = async () => {
    setFilterByTransit(false)
    setFilterByLow(false)
    setFilterByHigh(true)
    const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/highToLow`)
    setTripsFiltered(response.data.Trips)
  }

  const handlePageChange = (newPage) => {
    setPageNumber(newPage)
}

  useEffect(() => {
    setPageSize(6)
}, [])

  return (
    <>
      <NavbarPackages />
      <main className={style.packages}>
        {/* { isCardNotClicked ? */}
        <> <section className={style.packagePlanning}>
          <article className={style.packageFiltration}>
            <p className={ filterByLow ? style.filtrationItemClicked : style.filtrationItem} onClick={handleLowClick}><MdOutlineFileUpload /> price low to high</p>
            <p className={ filterByHigh ? style.filtrationItemClicked : style.filtrationItem} onClick={handleHighClick}><MdOutlineFileDownload /> price high to low</p>
            <p className={ filterByTransit ? style.filtrationItemClicked : style.filtrationItem} onClick={handleTransitClick}><PiAirplaneLanding /> non-stop</p>
          </article>
          <article className={style.packagesChecking}>
            <div className={style.packagesCheckingPartOne}>
              {
                filterByLow === true ?
                tripsFiltered.map((item, i) => (
                  <div className={style.cardTripContainer} key={i} onClick={() => handleCardClick(item, item._id)}>
                    <div className={style.cardFirstPart}>
                      <img src={`${process.env.REACT_APP_PATH}/${item.images}`} className={style.cardAvatar} alt='trip' />
                      <div className={style.cardBriefInfo}>
                        <p className={style.cardBriefInfoText}><MdOutlineDateRange /> {item.startDate.slice(0, 10)}</p>
                        <p className={style.cardBriefInfoText}><BsPeopleFill /> {item.users.length}</p>
                      </div>
                    </div>
                    <div className={style.cardSecondPart}>
                      <h3 className={style.tripCity}>{item.toLocation[item.toLocation.length - 1]}</h3>
                      <p className={style.tripDescription}>{item.shortDescription}</p>
                      <p className={style.tripPrice}>{item.price} $</p>
                    </div>
                  </div>
                )) :
                filterByHigh === true ?
                tripsFiltered.map((item, i) => (
                  <div className={style.cardTripContainer} key={i} onClick={() => handleCardClick(item, item._id)}>
                    <div className={style.cardFirstPart}>
                      <img src={`${process.env.REACT_APP_PATH}/${item.images}`} className={style.cardAvatar} alt='trip' />
                      <div className={style.cardBriefInfo}>
                        <p className={style.cardBriefInfoText}><MdOutlineDateRange /> {item.startDate.slice(0, 10)}</p>
                        <p className={style.cardBriefInfoText}><BsPeopleFill /> {item.users.length}</p>
                      </div>
                    </div>
                    <div className={style.cardSecondPart}>
                      <h3 className={style.tripCity}>{item.toLocation[item.toLocation.length - 1]}</h3>
                      <p className={style.tripDescription}>{item.shortDescription}</p>
                      <p className={style.tripPrice}>{item.price} $</p>
                    </div>
                  </div>
                )) :
                filterByTransit === true ? 
                tripsFiltered.map((item, i) => (
                  <div className={style.cardTripContainer} key={i} onClick={() => handleCardClick(item, item._id)}>
                    <div className={style.cardFirstPart}>
                      <img src={`${process.env.REACT_APP_PATH}/${item.images}`} className={style.cardAvatar} alt='trip' />
                      <div className={style.cardBriefInfo}>
                        <p className={style.cardBriefInfoText}><MdOutlineDateRange /> {item.startDate.slice(0, 10)}</p>
                        <p className={style.cardBriefInfoText}><BsPeopleFill /> {item.users.length}</p>
                      </div>
                    </div>
                    <div className={style.cardSecondPart}>
                      <h3 className={style.tripCity}>{item.toLocation[item.toLocation.length - 1]}</h3>
                      <p className={style.tripDescription}>{item.shortDescription}</p>
                      <p className={style.tripPrice}>{item.price} $</p>
                    </div>
                  </div>
                )) :
                trips.map((item, i) => (
                  <div className={style.cardTripContainer} key={i} onClick={() => handleCardClick(item, item._id)}>
                    <div className={style.cardFirstPart}>
                      <img src={`${process.env.REACT_APP_PATH}/${item.images}`} className={style.cardAvatar} alt='trip' />
                      <div className={style.cardBriefInfo}>
                        <p className={style.cardBriefInfoText}><MdOutlineDateRange /> {item.startDate.slice(0, 10)}</p>
                        <p className={style.cardBriefInfoText}><BsPeopleFill /> {item.users.length}</p>
                      </div>
                    </div>
                    <div className={style.cardSecondPart}>
                      <h3 className={style.tripCity}>{item.toLocation[item.toLocation.length - 1]}</h3>
                      <p className={style.tripDescription}>{item.shortDescription}</p>
                      <p className={style.tripPrice}>{item.price} $</p>
                    </div>
                  </div>
                ))
              }
              <div className={style.pagination}>
                <button className={ pageNumber === 1 ? style.packageExploreHidden : style.packageExplore } onClick={() => handlePageChange(pageNumber - 1)}>previous</button>
                <button className={style.packageExplore} onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === 10}>next</button>
            </div>
            </div>
            <div className={style.packagesCheckingPartTwo}>
              <form className={style.packagesCheckingForm} onSubmit={handleSubmit}>
                <h2 className={style.packagesCheckingFormTitle}>plan your trip</h2>
                <p className={style.packagesCheckingFormDescription}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                <div className={style.inputGroup}>
                  <input type='text' name='from' id='from' placeholder='From City' className={style.packagesCheckingFormInput} value={formData.fromLocation} onChange={handleInputChange} />
                  <input type='text' name='to' id='to' placeholder='To City' className={style.packagesCheckingFormInput} value={formData.toLocation} onChange={handleInputChange}  />
                  <input type='date' name='date' id='date' placeholder='Date' className={style.packagesCheckingFormInput} value={formData.startDate} onChange={handleInputChange}  />
                  <h3 className={style.packagesCheckingFormFiltration}>maximum price</h3>
                  <input type='number' name='max' id='max' placeholder='maximum' className={style.packagesCheckingFormInput} value={formData.maxPrice} onChange={handleInputChange}  />
                </div>
                <button type='submit' className={style.packagesCheckingFormButton}>Check</button>
              </form>
              <img src={checkpackages2} className={style.partTwoImage} alt='trip' />
            </div>
          </article>
        </section>
        <img src={checkPackages3} className={ isCardNotClicked === true ? style.externalImage : style.externalImageHidden } alt='external' /> </> 
        {/* <SinglePackage setIsCardNotClicked={setIsCardNotClicked} />
        } */}
      </main>
    </>
  )
}

export default CheckPackages