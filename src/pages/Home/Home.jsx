import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


const Home = ({ children }) => {
  return (
    <div className='body-center sm:max-w-full border-outline bg-primary flex flex-col'>
      <Header />
      {children}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
