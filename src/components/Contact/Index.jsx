import React from 'react'
import Aside from './Components/Aside/Aside'
import Main from './Components/Main'

const Index = () => {
  return (
    <div className='h-full grid md:grid-cols-5 grid-cols-1'>
      <div className='col-span-1 border-r border-r-outline'>
        <Aside />
      </div>
      <div className='col-span-4'>
        <Main />
      </div>
    </div>
  )
}

export default Index
