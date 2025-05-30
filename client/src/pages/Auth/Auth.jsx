import React, { useState, useContext } from 'react';
import logo from '../../assets/img/logo-b.png';
import css from './Auth.module.css';
import { Link } from 'react-router-dom'
import {auth} from '../../../utils/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {Context} from '../../components/Context'
import { Type } from '../../../utils/action.type';
import {ClipLoader} from 'react-spinners'
import { useLocation, useNavigate } from 'react-router-dom';
function Auth() {
  const [{user},dispatch] = useContext(Context)
   const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const from = state?.from?.pathname || '/'
    const ease = location?.state?.info || null
  const [isCreating, setIsCreating] = useState(false);
  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [error ,setError] = useState()
  const [loading , setLoading] = useState({
    signin:false,
    signup:false
  })
  function authHandler(e){
    e.preventDefault()
    setError('')

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (isCreating && name.trim() === '') {
        return setError('Name is required.');
      }
      if (!emailRegex.test(email)) {
        return setError('Invalid email address.');
      }
      if (password.length < 6) {
        return setError('Password must be at least 6 characters.');
      }
      if (e.target.name === 'signin') {
      setLoading(prev => ({ ...prev, signin: true }));
      signInWithEmailAndPassword(auth, email, password)
      .then(userInfo => {
          setError('')
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading(prev => ({ ...prev, signin: false }));
          navigate(from, { replace: true }); 
        })
        .catch(err => {
          setError(err.message);
          setLoading(prev => ({ ...prev, signin: false }));
          console.error(err);
        });
      } else {
        setLoading(prev => ({ ...prev, signup: true }));
      createUserWithEmailAndPassword(auth, email, password)
      .then(userInfo => {
        return updateProfile(userInfo.user, { displayName: name }).then(() => {
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user
            });
            setLoading(prev => ({ ...prev, signup: false }));
            setName('');
            setEmail('');
            setPassword('');
            setError('');
            navigate(from, { replace: true })
          });
        })
        .catch(err => {
          setLoading(prev => ({ ...prev, signup: false }));
          setError(err.message);
          console.error(err);
        });
    }

  }
  // console.log(`Email ${email}, Password ${password}`)

  return (
    <div className={css.auth}>
        <Link to="/">
            <img className={css.logo} src={logo} alt="Amazon logo" />
        </Link>
      <div className={css.form}>
        <h1 className={css.title}>{isCreating ? 'Create account' : 'Sign in'}</h1>
        {
          ease &&  <p className={css.error}>{ease}</p>
          
        }

        {isCreating && (
          <div className={css.input_container}>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={(e)=>setName(e.target.value)} type="text" name="name" required />
          </div>
        )}

        <div className={css.input_container}>
          <label htmlFor="email">Email</label>
          <input id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" name="email" />
        </div>

        <div className={css.input_container}>
          <label htmlFor="password">Password</label>
          <input id="password" onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" />
        </div>
         {error && <p className={css.error}>{error}</p>}
        {isCreating && <button type='submit' name='signup' onClick={authHandler}>{loading.signup ? <ClipLoader size={20} color='#000' />:'Create account'}</button>}
        {!isCreating &&  <button type='submit' name='signin' onClick={authHandler}>{loading.signin ? <ClipLoader size={20} color='#000' />:'Sign in'}</button>}

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
