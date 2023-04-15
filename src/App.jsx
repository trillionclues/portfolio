import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('././pages/Home/Home'))
const About = lazy(() => import('././pages/About/About'))
const Contact = lazy(() => import('././pages/Contact/Contact'))
const Projects = lazy(() => import('././pages/Projects/Projects'))
const NoMatch = lazy(() => import('./components/NoMatch'))
const Hero = lazy(() => import('././components/Hero/Hero'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Home>
            <Routes>
              <Route exact path='/' element={<Hero />} />
              <Route exact path='/about-me' element={<About />} />
              <Route exact path='/contact-me' element={<Contact />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='*' element={<NoMatch />} />
            </Routes>
          </Home>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
