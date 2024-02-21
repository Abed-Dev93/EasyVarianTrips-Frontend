import React from 'react'
import style from './Footer.module.css'
import logoFooter from '../../assets/commons/logo-footer.svg'
import footer from '../../assets/homepage/footer.svg'
import { FaLinkedinIn } from "react-icons/fa6"
import { FaFacebookMessenger, FaTwitter, FaInfinity } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className={style.footerContainer}>
        <section className={style.footerPartOne}>
            <article className={style.footerMain}>
                <img src={logoFooter} className={style.footerLogo} alt='logo' />
                <p className={style.footerMainDescription}>Travel helps clients finding their dream destinations easily</p>
                <article className={style.footerSocialMedia}>
                    <FaLinkedinIn className={style.footerSocialMediaIcon} />
                    <FaFacebookMessenger className={style.footerSocialMediaIcon} />
                    <FaTwitter className={style.footerSocialMediaIcon} />
                    <FaInfinity className={style.footerSocialMediaIcon} />
                </article>
            </article>
            <article className={style.footerPlatform}>
                <h2 className={style.footerTitle}>platform</h2>
                <ul className={style.footerLinksList}>
                    <li className={style.footerLinksListItem}>about us</li>
                    <li className={style.footerLinksListItem}>contact us</li>
                    <li className={style.footerLinksListItem}>FAQs</li>
                    <li className={style.footerLinksListItem}>pricing</li>
                </ul>
            </article>
            <article className={style.footerDestinations}>
            <h2 className={style.footerTitle}>destinations</h2>
                <ul className={style.footerLinksList}>
                    <li className={style.footerLinksListItem}>maldives</li>
                    <li className={style.footerLinksListItem}>los angelos</li>
                    <li className={style.footerLinksListItem}>las vegas</li>
                    <li className={style.footerLinksListItem}>more..</li>
                </ul>
            </article>
            <img src={footer} className={style.footerPicture} alt='mountain' />
        </section>
        <p className={style.footerCopyright}>Copyright &copy; Xpro 2024. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer