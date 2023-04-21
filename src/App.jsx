import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './routes/Loading'
const Home = lazy(() => import('././pages/Home/Home'))
const About = lazy(() => import('././pages/About/About'))
const Contact = lazy(() => import('././pages/Contact/Contact'))
const Projects = lazy(() => import('././pages/Projects/Projects'))
const Timeline = lazy(() => import('././pages/Timeline/Timeline'))
const NoMatch = lazy(() => import('./routes/NoMatch'))
const Hero = lazy(() => import('././components/Hero/Hero'))

const App = () => {
  return (
    <div className='relative'>
      <Suspense fallback={<Loading />}>
        <Router>
          <Home>
            <Routes>
              <Route exact path='/' element={<Hero />} />
              <Route exact path='/about-me' element={<About />} />
              <Route exact path='/contact-me' element={<Contact />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/timeline' element={<Timeline />} />
              <Route exact path='*' element={<NoMatch />} />
            </Routes>
          </Home>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
