import React, { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
// import App from './App'
import { MainApp } from './exercise/09-reactRouter/MainApp'
import { BrowserRouter } from 'react-router-dom'

reactDOM.createRoot(document.getElementById('app')).render(
  // <App />
  <BrowserRouter>
    {/* <React.StrictMode> */}

    <MainApp />

    {/* </React.StrictMode> */}
  </BrowserRouter>
)
