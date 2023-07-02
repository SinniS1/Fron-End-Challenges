import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Success from './Success.tsx'
import { EmailProvider } from './EmailContextProvider.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <EmailProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </EmailProvider>
    </Router>
  </React.StrictMode>
)
