import React, { useState } from 'react'
import bggraphics from '../../assets/img/bggraphics.png'
import css from './Auth.module.css'
import logo from '../../assets/img/logo-w.png'
import { Link } from 'react-router-dom'
function Auth() {
  const [create, setCreate] = useState(false)
  const [login, setLogin] = useState(true)
  return (
    <div className={css.auth}
    style={{backgroundImage:{bggraphics}, backgroundPosition:'center',}}
    >
      <div className={css.form}>
        <Link to="/">
            <h3 className={css.close}>x</h3>
        </Link>
        { create && 
          <div>
            <p>Name</p>
            <input type="text" />
             <p>Email</p>
            <input type="email" />
            <p>Password</p>
            <input type="password" />
            <button className={css.create}>Create aacount</button>
            <button className={css.login} onClick={()=>{setCreate(false);setLogin(true)}}>Back to Log in page</button>
          </div>
        }
        {
          login && 
          <>
              <p>Email</p>
              <input type="email" />
              <p>Password</p>
              <input type="password" />
             <div className={css.check}>
              <input type="checkbox" name='check' /> 
              <label htmlFor="check">By continueing you agree to terms and condistions!</label>

             </div>
              <button className={css.signin}>Sign in</button>
              <p className={css.or}>Or</p>
              <small>If you don't have an account create one</small>
              <button className={css.login} onClick={()=>{setCreate(true);setLogin(false)}}>Create Account</button>
          </>
        }
      </div>
    </div>
  )
}

export default Auth
