
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "survey-core/defaultV2.min.css";
import { BrowserRouter } from 'react-router-dom'
import { AuthUserProvider } from './context/AuthUserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
  </React.StrictMode>,
)
