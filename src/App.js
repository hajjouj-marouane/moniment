import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Apropos from './components/Apropos'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
