import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import { developer } from '../../assets/developer'
import Footer from '../../components/Footer/Footer'

// console.log(developer)

const Home = () => {
  return (
    <div className='body-center max-w-full border-outline bg-primary flex flex-col  h-screen'>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
