import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ContextProvider } from './components/Context.jsx'
import {InitialState, Reducer} from '../utils/reducer.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter  basename="/amazon-clone">
    <ContextProvider inialState={InitialState} reducer={Reducer}>
         <App />
    </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
