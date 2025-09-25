import ReactDOM from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
 v 