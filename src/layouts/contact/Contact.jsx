import React from 'react'
import style from './Contact.module.css'

const Contact = () => {
  return (
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
  )
}

export default Contact