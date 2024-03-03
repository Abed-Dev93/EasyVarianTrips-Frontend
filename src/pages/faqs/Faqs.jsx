import React, { useState } from 'react'
import style from './Faqs.module.css'
import NavbarFaqs from '../../layouts/navbarFaqs/NavbarFaqs'
import { IoIosArrowForward } from "react-icons/io"
import faq1 from '../../assets/rests/faq-1.png'
import faq2 from '../../assets/rests/faq-2.png'

const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(-1)

  const array = [
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: 'lorem lorem lorem lorem lorem lorem lorem?',
      answer: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }
  ]

  const handleClickArrowIcon = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <>
      <NavbarFaqs />
      <main className={style.faqs}>
      <h2 className={style.faqsTitle}>frequently asked questions</h2>
      {
        array.map((item, i) => (
          <section className={style.faqsContainer} key={i}>
          <article className={i !== openIndex ? style.faq : style.faqOpen}>
            <h3 className={style.faqTitle}>{item.title}</h3>
            <p className={ i !== openIndex ? style.faqAnswerNone : style.faqAnswer}>{item.answer}</p>
          </article>
          <IoIosArrowForward className={ i === openIndex ? style.arrowIconRotated : style.arrowIcon } onClick={() => handleClickArrowIcon(i)} />
        </section>
        ))
      }
      <img src={faq1} className={style.faqPicOne} alt='faq1' />
      <img src={faq2} className={style.faqPicTwo} alt='faq2' />
      </main>
    </>
  )
}

export default Faqs