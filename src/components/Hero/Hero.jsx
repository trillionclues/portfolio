import React, { useState } from 'react'

// import SnakeGame from '../SnakeGame/SnakeGame'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row hero-content h-full'>
      <section className='flex hero-item flex-col mr-12'>
        <div className='justify-center items-center mb-11'>
          <p className='text-paraColor text-sm md:text-xl'>Hi all. I am</p>
          <h1 className='text-5xl md:text-6xl text-paraColor'>
            Excel Nwachukwu
          </h1>
          <p className='text-xl md:text-3xl md:mb-5 text-devColor'>
            {' '}
            &gt; Frontend Developer
          </p>
        </div>
        <div>
          <p className='text-comment text-sm '>
            // complete the game to continue
          </p>
          <p className='text-comment text-sm'>
            // you can also see it on my github page
          </p>
          <p>
            <span className='text-span1 text-sm pr-2'>const</span>
            <span className='text-span2 text-sm pr-2'>githublink</span>
            <span className='text-span4 text-sm pr-2'>=</span>
            <span className='text-span3 text-sm pr-2'>
              <a href='https://github.com/trillionclues/' target='_blank'>
                "https://github.com/trillionclues/"
              </a>
            </span>
          </p>
        </div>
      </section>
      {/* <SnakeGame /> */}
      <div>Game goes here...</div>
    </div>
  )
}

export default Hero
