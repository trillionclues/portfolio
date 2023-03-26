import React from 'react'
import Home from '././pages/Home/Home'
import About from '././pages/About/About'
import Contact from '././pages/Contact/Contact'
import Projects from '././pages/Projects/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/contact-me' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
