import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import UseProvider from './providers/UserProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseProvider>
    <RouterProvider router={router}/>
    </UseProvider>
  </React.StrictMode>,
)