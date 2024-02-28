import React, { useState } from 'react'
import style from './Login.module.css'
import NavbarAuth from '../../layouts/navbarAuth/NavbarAuth'
import loginSecondary from '../../assets/login/login-secondary.svg'
import logo from '../../assets/commons/logo-footer.svg'
import { FcGoogle } from "react-icons/fc"

const Login = () => {

  const [isOnLoginForm, setIsOnLoginForm] = useState(true)

  const handleSwitchFormToRegister = () => {
    setIsOnLoginForm(false)
  }

  const handleSwitchFormToLogin = () => {
    setIsOnLoginForm(true)
  }

  return (
    <main className={style.login}>
      <section className={style.loginFirstPart}>
        <NavbarAuth isOnLoginForm={isOnLoginForm} />
        { isOnLoginForm ? <form className={style.loginForm}>
            <div className={`${style.formFloating} ${style.firstInput}`}>
              <input type='text' className={style.formInput} name='email' id='email' placeholder='' />
              <label for='email' className={style.formInputLabel}>e-mail address</label>
            </div>
            <div className={`${style.formFloating} ${style.firstInput}`}>
              <input type='password' className={style.formInput} name='password' id='password' placeholder='' />
              <label for='password' className={style.formInputLabel}>password</label>
            </div>
            <button type='submit' className={style.formButton}>log in</button>
            <div className={style.separatedDiv}>
              <div className={style.separatedDivItem}></div>
              <p className={style.separatedDivText}>OR</p>
              <div className={style.separatedDivItem}></div>
            </div>
            <button className={style.oauthButton}>sign in with gmail</button>
            <FcGoogle className={style.oauthIcon} />
            <p className={style.formToRegisterTitle}>don't have an account yet? <span className={style.formToRegisterLink} onClick={handleSwitchFormToRegister}><u>create new one</u></span></p>
        </form> : 
          <form className={style.loginForm}>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='text' className={style.formInput} name='email' id='email' placeholder='' />
            <label for='email' className={style.formInputLabel}>e-mail address</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='password' className={style.formInput} name='password' id='password' placeholder='' />
            <label for='password' className={style.formInputLabel}>password</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='password' className={style.formInput} name='password' id='password' placeholder='' />
            <label for='password' className={style.formInputLabel}>password</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='password' className={style.formInput} name='password' id='password' placeholder='' />
            <label for='password' className={style.formInputLabel}>password</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='password' className={style.formInput} name='password' id='password' placeholder='' />
            <label for='password' className={style.formInputLabel}>password</label>
          </div>
          <button type='submit' className={style.formButton}>sign up</button>
          <div className={style.separatedDiv}>
            <div className={style.separatedDivItem}></div>
            <p className={style.separatedDivText}>OR</p>
            <div className={style.separatedDivItem}></div>
          </div>
          <button className={style.oauthButton}>sign up with gmail</button>
          <FcGoogle className={style.oauthIcon} />
          <p className={style.formToRegisterTitle}>are you a member? <span className={style.formToRegisterLink} onClick={handleSwitchFormToLogin}><u>back to login page</u></span></p>
      </form>
        }
      </section>
      <section className={style.loginSecondPart}>
        <img src={logo} className={style.loginLogo} alt='logo' />
        <img src={loginSecondary} className={style.loginSecondaryLogo} alt='secondary logo' />
      </section>
    </main>
  )
}

export default Login