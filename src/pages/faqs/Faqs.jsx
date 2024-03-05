import React, { useEffect, useState } from 'react'
import style from './Faqs.module.css'
import NavbarFaqs from '../../layouts/navbarFaqs/NavbarFaqs'
import { IoIosArrowForward } from "react-icons/io"
import faq1 from '../../assets/rests/faq-1.png'
import faq2 from '../../assets/rests/faq-2.png'
import axios from 'axios'
import { useTripContext } from '../../contexts/TripContext'

const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(-1)
  const [faqs, setFaqs] = useState([])
  const { setPageSize, pageSize, pageNumber, setPageNumber } = useTripContext()

useEffect(() => {
  const fetchFaqs = async () => {
    try {
      setPageSize(6)
      const response = await axios.get(`${process.env.REACT_APP_PATH}/faq/allFaqs`,
      { params: { pageNumber, pageSize } })
      setFaqs(response.data.Faqs)
    }
    catch (error) {
      console.log(error)
    }
  }
  fetchFaqs()
}, [pageNumber, pageSize])

  const handleClickArrowIcon = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  const handlePageChange = (newPage) => {
    setPageNumber(newPage)
}

  return (
    <>
      <NavbarFaqs />
      <main className={style.faqs}>
      <h2 className={style.faqsTitle}>frequently asked questions</h2>
      {
        faqs.map((item, i) => (
          <section className={style.faqsContainer} key={i}>
          <article className={i !== openIndex ? style.faq : style.faqOpen}>
            <h3 className={style.faqTitle}>{item.question}</h3>
            <p className={ i !== openIndex ? style.faqAnswerNone : style.faqAnswer}>{item.answer}</p>
          </article>
          <IoIosArrowForward className={ i === openIndex ? style.arrowIconRotated : style.arrowIcon } onClick={() => handleClickArrowIcon(i)} />
        </section>
        ))
      }
      <div className={style.pagination}>
        <button className={ pageNumber === 1 ? style.packageExploreHidden : style.packageExplore } onClick={() => handlePageChange(pageNumber - 1)}>previous</button>
        <button className={style.packageExplore} onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === 10}>next</button>
      </div>
      <img src={faq1} className={style.faqPicOne} alt='faq1' />
      <img src={faq2} className={style.faqPicTwo} alt='faq2' />
      </main>
    </>
  )
}

export default Faqs