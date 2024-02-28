import React, { useState } from 'react'
import style from './CheckPackages.module.css'
import { useNavigate } from 'react-router-dom'
import NavbarPackages from '../../layouts/navbarPackages/NavbarPackages'
import { MdOutlineFileDownload, MdOutlineFileUpload, MdOutlineDateRange } from "react-icons/md"
import { PiAirplaneLanding } from "react-icons/pi"
// import { CiLocationOn } from "react-icons/ci"
import { BsPeopleFill } from "react-icons/bs"
import checkpackages2 from '../../assets/rests/checkPackages-2.svg'
import checkPackages3 from '../../assets/rests/checkPackages-3.svg'
import SinglePackage from '../../components/singlePackage/SinglePackage'


const CheckPackages = () => {

  const array = [
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    },
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    },
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    },
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    },
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    },
    {
      avatar: 'https://picsum.photos/seed/picsum/200/300',
      date: '12, september 2022',
      people: 120,
      city: 'berlin',
      description: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: 1100
    }
  ]

  const [isCardNotClicked, setIsCardNotClicked] = useState(true)
  const navigate = useNavigate()

  const handleCardClick = () => {
    setIsCardNotClicked(false)
  }

  return (
    <>
      <NavbarPackages />
      <main className={style.packages}>
        { isCardNotClicked ?<> <section className={style.packagePlanning}>
          <article className={style.packageFiltration}>
            <p className={style.filtrationItem}><MdOutlineFileUpload /> price low to high</p>
            <p className={style.filtrationItem}><MdOutlineFileDownload /> price high to low</p>
            <p className={style.filtrationItem}><PiAirplaneLanding /> non-stop</p>
          </article>
          <article className={style.packagesChecking}>
            <div className={style.packagesCheckingPartOne}>
              {
                array.map((item, i) => (
                  <div className={style.cardTripContainer} key={i} onClick={handleCardClick}>
                    <div className={style.cardFirstPart}>
                      <img src={item.avatar} className={style.cardAvatar} alt='trip' />
                      <div className={style.cardBriefInfo}>
                        <p className={style.cardBriefInfoText}><MdOutlineDateRange /> {item.date}</p>
                        <p className={style.cardBriefInfoText}><BsPeopleFill /> {item.people}</p>
                      </div>
                    </div>
                    <div className={style.cardSecondPart}>
                      <h3 className={style.tripCity}>{item.city}</h3>
                      <p className={style.tripDescription}>{item.description}</p>
                      <p className={style.tripPrice}>{item.price} $</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={style.packagesCheckingPartTwo}>
              <form className={style.packagesCheckingForm}>
                <h2 className={style.packagesCheckingFormTitle}>plan your trip</h2>
                <p className={style.packagesCheckingFormDescription}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                <div className={style.inputGroup}>
                  <input type='text' name='from' id='from' placeholder='From City' className={style.packagesCheckingFormInput} />
                  <input type='text' name='to' id='to' placeholder='To City' className={style.packagesCheckingFormInput} />
                  <input type='date' name='date' id='date' placeholder='Date' className={style.packagesCheckingFormInput} />
                  <h3 className={style.packagesCheckingFormFiltration}>maximum price</h3>
                  <input type='number' name='max' id='max' placeholder='maximum' className={style.packagesCheckingFormInput} />
                </div>
                <button type='submit' className={style.packagesCheckingFormButton}>Check</button>
              </form>
              <img src={checkpackages2} className={style.partTwoImage} alt='trip' />
            </div>
          </article>
        </section>
        <img src={checkPackages3} className={ isCardNotClicked === true ? style.externalImage : style.externalImageHidden } alt='external' /> </> :
        <SinglePackage setIsCardNotClicked={setIsCardNotClicked} />
        }
      </main>
    </>
  )
}

export default CheckPackages