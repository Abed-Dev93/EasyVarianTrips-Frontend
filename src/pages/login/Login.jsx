import React, { useState } from 'react'
import style from './Login.module.css'
import NavbarAuth from '../../layouts/navbarAuth/NavbarAuth'
import loginSecondary from '../../assets/login/login-secondary.png'
import logo from '../../assets/commons/logo-footer.svg'
import { FcGoogle } from "react-icons/fc"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

const Login = () => {

  const [isOnLoginForm, setIsOnLoginForm] = useState(true)
  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: ''
  })
  const [formDataRegister, setFormDataRegister] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    image: '',
    role: ''
  })
  const navigate = useNavigate()
  const { setIsUserChecked, setUser } = useUserContext()

  const handleSwitchFormToRegister = () => {
    setIsOnLoginForm(false)
  }

  const handleSwitchFormToLogin = () => {
    setIsOnLoginForm(true)
  }

  const handleInputChangeRegister = (e) => {
    const { name, value } = e.target
    setFormDataRegister({
      ...formDataRegister,
      [name] : value
    })
  }

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target
    setFormDataLogin({
      ...formDataLogin,
      [name] : value
    })
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${process.env.REACT_APP_PATH}/user/register`, formDataRegister)
    setIsUserChecked(true)
    setUser(response.data.data)
    navigate('/')
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${process.env.REACT_APP_PATH}/login`, formDataLogin)
    setIsUserChecked(true)
    setUser(response.data.data)
    navigate('/')
  }

  return (
    <main className={style.login}>
      <section className={style.loginFirstPart}>
        <NavbarAuth isOnLoginForm={isOnLoginForm} />
        { isOnLoginForm ? <form className={style.loginForm} onSubmit={handleSubmitLogin}>
            <div className={`${style.formFloating} ${style.firstInput}`}>
              <input type='text' className={style.formInput} name='email' id='email' placeholder='' value={formDataLogin.email} onChange={handleInputChangeLogin} />
              <label for='email' className={style.formInputLabel}>e-mail address</label>
            </div>
            <div className={`${style.formFloating} ${style.firstInput}`}>
              <input type='password' className={style.formInput} name='password' id='password' placeholder='' value={formDataLogin.password} onChange={handleInputChangeLogin} />
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
          <form className={style.loginForm} onSubmit={handleSubmitRegister}>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='text' className={style.formInput} name='name' id='name' placeholder='' value={formDataRegister.name} onChange={handleInputChangeRegister} />
            <label for='name' className={style.formInputLabel}>name</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='text' className={style.formInput} name='email' id='email' placeholder='' value={formDataRegister.email} onChange={handleInputChangeRegister} />
            <label for='email' className={style.formInputLabel}>email</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='password' className={style.formInput} name='password' id='password' placeholder='' value={formDataRegister.password} onChange={handleInputChangeRegister} />
            <label for='password' className={style.formInputLabel}>password</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='text' className={style.formInput} name='location' id='location' placeholder='' value={formDataRegister.location} onChange={handleInputChangeRegister} />
            <label for='location' className={style.formInputLabel}>location</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <input type='file' className={style.formInput} name='image' id='image' value={formDataRegister.image} onChange={handleInputChangeRegister} />
            <label for='image' className={style.formInputLabel}>avatar</label>
          </div>
          <div className={`${style.formFloating} ${style.firstInput}`}>
            <select className={style.formInput} name='role' id='role' value={formDataRegister.role} onChange={handleInputChangeRegister}>
              <option value='user'>User</option>
              <option value='agency'>Agency</option>
            </select>
            <label for='role' className={style.formInputLabel}>role</label>
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