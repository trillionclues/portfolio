import React from 'react'
import Hero from './Container/Project_contents/Hero'
import Sidebar from './Container/Sidebar/Sidebar'

const Index = () => {
  return (
    <div className='w-screen relative flex flex-col md:flex-row'>
      <div className='sidebar' style={{ flex: '0 0 20.62%' }}>
        <Sidebar />
      </div>
      <div className='sidebar' style={{ flex: '0 0 79.38%' }}>
        <Hero />
      </div>
    </div>
  )
}

export default Index
