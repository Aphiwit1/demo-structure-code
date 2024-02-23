import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ModalContextProvider } from '@components/Modal/context/ModalContext.tsx'
import App from './App.tsx'
import Routes from './Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <Routes />
        <ToastContainer position='top-center' />
      </ModalContextProvider>
    </BrowserRouter>

    <App />
  </React.StrictMode>
)
