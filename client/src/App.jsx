import React, {useEffect,useContext} from 'react'
import './App.css'
import Router from './pages/Router'
import { auth } from '../utils/firebase'
import { Type } from '../utils/action.type';
import { Context } from './components/Context'


function App() {
const[{user},dispach] = useContext(Context)

  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispach({
        type: Type.SET_USER,
        user: authUser,
      });
    } else {
      dispach({
        type: Type.SET_USER,
        user: null,
      });
    }
  });
}, []);



  return (
    <>
      <Router />
    </>
  )
}

export default App
