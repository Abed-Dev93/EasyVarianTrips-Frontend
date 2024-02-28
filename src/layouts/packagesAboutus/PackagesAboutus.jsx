import React from 'react'
import style from './PackagesAboutus.module.css'

const PackagesAboutus = ({ handleClickBackHome }) => {

    const array = [
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        },
        {
            link: 'https://picsum.photos/seed/picsum/200/300',
            title: 'anywhere',
            price: 800
        }
    ]

  return (
    <section className={style.aboutusPackagesContainer}>
        <h1 className={style.packagesTitle}>our international packages</h1>
        <article className={style.aboutusPackages}>
            {
                array.map((item, i) => (
                    <div className={style.packageItem} key={i}>
                        <img src={item.link} className={style.packagePicture} alt='anywhere' />
                        <p className={style.packageLocation}>{item.title}</p>
                        <p className={style.packagePrice}>${item.price}</p>
                    </div>
                ))
            }
        </article>
        <button className={style.backHomeButton} onClick={handleClickBackHome}>back home</button>
    </section>
  )
}

export default PackagesAboutus