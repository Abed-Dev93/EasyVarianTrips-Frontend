import React from 'react'
import style from './Services.module.css'
import tourGuide from '../../assets/homepage/tour-guide.svg'
import flightOptions from '../../assets/homepage/flight-options.svg'
import discount from '../../assets/homepage/discount.svg'
import medicalInsurance from '../../assets/homepage/medical-insurance.svg'

const Services = () => {
  return (
    <section className={style.servicesContainer}>
        <h2 className={style.servicesTitle}>we provide best services</h2>
        <div className={style.ServicesPartTwo}>
            <article className={style.serviceContainer}>
                <img src={tourGuide} alt='dynamic' className={style.serviceIcon} />
                <h3 className={style.serviceType}>dynamic trips filtering</h3>
                <p className={style.serviceDescription}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </article>
            <article className={style.serviceContainer}>
                <img src={flightOptions} alt='dynamic' className={style.serviceIcon} />
                <h3 className={style.serviceType}>best flight options</h3>
                <p className={style.serviceDescription}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </article>
            <article className={style.serviceContainer}>
                <img src={discount} alt='dynamic' className={style.serviceIcon} />
                <h3 className={style.serviceType}>discount evently</h3>
                <p className={style.serviceDescription}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </article>
            <article className={style.serviceContainer}>
                <img src={medicalInsurance} alt='dynamic' className={style.serviceIcon} />
                <h3 className={style.serviceType}>medical insurance</h3>
                <p className={style.serviceDescription}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </article>
        </div>
    </section>
  )
}

export default Services