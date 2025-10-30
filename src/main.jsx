import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import PreLoader from './components/PreLoader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <PreLoader />
      <Navbar />
      <App />
      <Footer />
      <ScrollToTop />
    </DarkModeProvider>
  </StrictMode>,
)
