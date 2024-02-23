import React, { useState } from 'react'
import style from './Faqs.module.css'
import NavbarFaqs from '../../layouts/navbarFaqs/NavbarFaqs'
import { IoIosArrowForward } from "react-icons/io"

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
          <article className={style.faq}>
            <h3 className={style.faqTitle}>{item.title}</h3>
            <p className={ i !== openIndex ? style.faqAnswerNone : style.faqAnswer}>{item.answer}</p>
          </article>
          <IoIosArrowForward className={ i === openIndex ? style.arrowIconRotated : style.arrowIcon } onClick={() => handleClickArrowIcon(i)} />
        </section>
        ))
      }
      <form className={style.contactForm}>
      <h2 className={style.contactFormTitle}>get in touch</h2>
      <p className={style.contactFormDescription}>Get in touch with us for all your questions – our admins are here to assist you with inquiry!</p>
      <div className={style.inputGroups}>
        <div className={`${style.formFloating} ${style.firstInput}`}>
          <input type='text' className={style.formInput} name='name' id='name' placeholder='' />
          <label for='name' className={style.formInputLabel}>full name</label>
        </div>
        <div className={style.formFloating}>
          <input type='text' className={style.formInput} name='email' id='email' placeholder='' />
          <label for='email' className={style.formInputLabel}>e-mail address</label>
        </div>
        <div className={style.formFloating}>
          <select className={style.formSelect}>
            <option value='0' selected>something</option>
            <option value='1'>something</option>
            <option value='2'>something</option>
            <option value='3'>something</option>
          </select>
        </div>
        <div className={style.formFloatingTextArea}>
          <textarea className={style.formInputTextArea} name='body' id='body' placeholder=''></textarea>
          <label for='body' className={style.formInputTextAreaLabel}>message</label>
        </div>
        <button type='submit' className={style.formButton}>send message</button>
      </div>
      </form>
      </main>
    </>
  )
}

export default Faqs