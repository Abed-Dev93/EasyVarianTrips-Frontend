import React from 'react'
import style from './SinglePackage.module.css'
import { IoMdInformationCircleOutline } from "react-icons/io"
import checkpackages2 from '../../assets/rests/checkPackages-2.png'
import NavbarPackages from '../../layouts/navbarPackages/NavbarPackages'
import { useLocation } from 'react-router-dom'

const SinglePackage = () => {

  const location = useLocation()
  const trip = location.state.trip

  return (
    <>
    <NavbarPackages />
    <main className={style.package}>
      <section className={style.packageInfo}>
        <article className={style.packageSectionHeader}>
          <h2 className={style.packageInfoTitle}><IoMdInformationCircleOutline /> information</h2>
        </article>
        <div className={style.singlePackageCheckingContainer}>
          <article className={style.singlePackageChecking}>
              <div className={style.singlePackageCheckingPartOne}>
                <div className={style.singlePackageCheckingInfo}>
                  <div className={style.singlePackageCheckingInfoMain}>
                    <h3 className={style.packageTitle}>{trip.toLocation[trip.toLocation.length - 1]}</h3>
                    <p className={style.packagePrice}>{trip.price} $</p>
                    {/* <button className={style.packagesCheckingFormButton} onClick={handleBackClick}>Back To Packages</button> */}
                  </div>
                  <p className={style.packageDescription}>{trip.description}</p>
                  <div className={style.singlePackageCheckingInfoDetailed}>
                    <div className={style.singlePackageCheckingInfoDetailedParts}>
                      <h4 className={style.packageInfoLabel}>departure</h4>
                      <p className={style.packageInfoText}>: {trip.fromLocation}</p>
                    </div>
                    <div className={style.singlePackageCheckingInfoDetailedParts}>
                      <h4 className={style.packageInfoLabel}>destination</h4>
                      <p className={style.packageInfoText}>: {trip.toLocation[trip.toLocation.length - 1]}</p>
                    </div>
                    <div className={style.singlePackageCheckingInfoDetailedParts}>
                      <h4 className={style.packageInfoLabel}>transit</h4>
                      <p className={style.packageInfoText}>: {trip.transit}</p>
                    </div>
                    { trip.transit === 'stop' ? <div className={style.singlePackageCheckingInfoDetailedParts}>
                      <h4 className={style.packageInfoLabel}>break in</h4>
                      <p className={style.packageInfoText}>: { trip.toLocation.map(city => `${city}, `) }</p>
                    </div> : null }
                    <div className={style.singlePackageCheckingInfoDetailedParts}>
                      <h4 className={style.packageInfoLabel}>duration</h4>
                      <p className={style.packageInfoText}>: {trip.duration} days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.singlePackageCheckingPartTwo}>
                <h2 className={style.gallerySectionTitle}>from our gallery</h2>
                <p className={style.gallerySectionDescription}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. </p>
                <div className={style.tripGalleryPictures}>
                  {
                    trip.images.map(image => <img src={`${process.env.REACT_APP_PATH}/${image}`} className={style.galleryPicture} alt='trip' />)
                  }
                  {/* <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' /> */}
                  {/* <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' />
                  <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' />
                  <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' />
                  <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' />
                  <img src='https://picsum.photos/seed/picsum/200/300' className={style.galleryPicture} alt='trip' /> */}
                </div>
              </div>
          </article>
          <article className={style.packagesCheckingFormPart}>
            <form className={style.packagesCheckingForm}>
              <h2 className={style.packagesCheckingFormTitle}>plan your trip</h2>
              <p className={style.packagesCheckingFormDescription}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
              <div className={style.inputGroup}>
                <input type='text' name='name' id='name' placeholder='Full Name' className={style.packagesCheckingFormInput} />
                <input type='text' name='email' id='email' placeholder='E-Mail' className={style.packagesCheckingFormInput} />
                <input type='text' name='phone' id='phone' placeholder='Phone' className={style.packagesCheckingFormInput} />
                <input type='number' name='tickets' id='tickets' placeholder='Number Of Ticket(s)' className={style.packagesCheckingFormInput} />
              </div>
              <button type='submit' className={style.packagesCheckingFormButton}>Book Now</button>
            </form>
            <img src={checkpackages2} className={style.partTwoImage} alt='trip' />
          </article>
        </div>
      </section>
    </main>
    </>
  )
}

export default SinglePackage