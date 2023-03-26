import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import { developer } from '../../assets/developer'

// console.log(developer)

const Home = () => {
  return (
    <div className='home body-center'>
      <Header />
      <Hero />
    </div>
  )
}

export default Home
