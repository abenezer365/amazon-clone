import React, { useState } from 'react';
import logo from '../../assets/img/logo-b.png';
import css from './Auth.module.css';
import { Link } from 'react-router-dom'
function Auth() {
  const [isCreating, setIsCreating] = useState(false); // only need this

  return (
    <div className={css.auth}>
        <Link to="/">
            <img className={css.logo} src={logo} alt="Amazon logo" />
        </Link>
      <div className={css.form}>
        <h1 className={css.title}>{isCreating ? 'Create account' : 'Sign in'}</h1>

        {isCreating && (
          <div className={css.input_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
        )}

        <div className={css.input_container}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className={css.input_container}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <button>{isCreating ? 'Create your Amazon account' : 'Sign in'}</button>

        <p className={css.term}>
          By continuing, you agree to Amazon's{' '}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
            Conditions of Use
          </a>{' '}
          and{' '}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
            Privacy Notice
          </a>.
        </p>

        {!isCreating ? (
          <p className={css.dont_have}>
            Don't have an account?{' '}
            <span onClick={() => setIsCreating(true)}>Create one</span>
          </p>
        ) : (
          <p className={css.dont_have}>
            Already have an account?{' '}
            <span onClick={() => setIsCreating(false)}>Sign in</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
