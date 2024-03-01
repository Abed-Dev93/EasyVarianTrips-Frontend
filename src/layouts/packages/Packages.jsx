import React from 'react'
import style from './Packages.module.css'
import lake from '../../assets/homepage/lake.png'
import amazon from '../../assets/homepage/amazon.png'
import giza from '../../assets/homepage/giza.png'
import switzerland from '../../assets/homepage/switzerland.svg'
import brazil from '../../assets/homepage/brazil.png'
import egypt from '../../assets/homepage/egypt.png'
import { CiCalendar } from "react-icons/ci"
import { IoPersonSharp } from "react-icons/io5"
import { MdLocationOn } from "react-icons/md"

const Packages = () => {
  return (
    <section className={style.packagesContainer}>
        <h1 className={style.packagesTitle}>our trending trip packages</h1>
        <div className={style.packages}>
            <article className={style.packageCard}>
                <img src={lake} className={style.packageCardImage} alt='lake' />
                <div className={style.packageCardPartTwo}>
                    <div className={style.partTwoHeader}>
                        <p className={style.partTwoHeaderOne}>
                            <CiCalendar /> 8 days
                        </p>
                        <p className={style.partTwoHeaderTwo}>
                            <IoPersonSharp /> 25 people going
                        </p>
                    </div>
                    <h3 className={style.packageTitle}>lake</h3>
                    <img src={switzerland} className={style.packageCountry} alt='switzerland' />
                    <p className={style.packageLocation}><MdLocationOn /> switzerland</p>
                    <p className={style.packagePrice}>1,000 $</p>
                    <p className={style.packageDescription}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                    <button className={style.packageExplore}>explore now</button>
                </div>
            </article>
            <article className={style.packageCard}>
                <img src={amazon} className={style.packageCardImage} alt='amazon' />
                <div className={style.packageCardPartTwo}>
                    <div className={style.partTwoHeader}>
                        <p className={style.partTwoHeaderOne}>
                            <CiCalendar /> 8 days
                        </p>
                        <p className={style.partTwoHeaderTwo}>
                            <IoPersonSharp /> 30 people going
                        </p>
                    </div>
                    <h3 className={style.packageTitle}>Amazon</h3>
                    <img src={brazil} className={style.packageCountry} alt='brazil' />
                    <p className={style.packageLocation}><MdLocationOn /> brazil</p>
                    <p className={style.packagePrice}>1,223 $</p>
                    <p className={style.packageDescription}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                    <button className={style.packageExplore}>explore now</button>
                </div>
            </article>
            <article className={style.packageCard}>
                <img src={giza} className={style.packageCardImage} alt='giza' />
                <div className={style.packageCardPartTwo}>
                    <div className={style.partTwoHeader}>
                        <p className={style.partTwoHeaderOne}>
                            <CiCalendar /> 8 days
                        </p>
                        <p className={style.partTwoHeaderTwo}>
                            <IoPersonSharp /> 155 people going
                        </p>
                    </div>
                    <h3 className={style.packageTitle}>giza</h3>
                    <img src={switzerland} className={style.packageCountry} alt='egypt' />
                    <p className={style.packageLocation}><MdLocationOn /> egypt</p>
                    <p className={style.packagePrice}>1,200 $</p>
                    <p className={style.packageDescription}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                    <button className={style.packageExplore}>explore now</button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Packages