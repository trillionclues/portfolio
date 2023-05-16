import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../../pages/Timeline/Timeline';
import SnakeQuest from '../SnakeQuest/SnakeQuest';

// import SnakeGame from '../SnakeGame/SnakeGame'

const Hero = () => {
  return (
    <div className='relative overflow-y-hidden'>
      {/* <div className='css-blurry-gradient-blue'></div>
      <div className='css-blurry-gradient-green'></div> */}
      <div className='flex flex-col flex-start md:flex-row hero-content w-full md:pt-[100px]'>
        <section className='flex hero-item flex-col md:mr-12 mr-0 h-full'>
          <div className='justify-center items-center mb-11 md:mb-0 pt-14 md:pt-0'>
            <p className='text-paraColor text-[20px] md:text-xl'>Hi, I'm</p>

            <h1 className='leading-[70px] text-[55px] font-medium md:font-normal md:text-6xl text-paraColor'>
              Excel
            </h1>
            <h1 className='leading-8 md:leading-none text-[55px] font-medium md:font-normal md:text-6xl text-paraColor inline-block md:hidden'>
              Nwachukwu
            </h1>
            <p className='leading-[60px] md:leading-none text-[22px] md:text-3xl md:mb-5 text-span1 md:text-devColor'>
              {' '}
              &gt; Frontend Developer
            </p>
          </div>
          <div>
            <p className='text-comment text-sm md:block hidden'>
              // complete the game to continue
            </p>
            <p className='text-comment text-sm md:block hidden'>
              // you can also see it on my github page
            </p>

            <p>
              <span className='text-span1 text-sm pr-2'>const</span>
              <span className='text-span2 text-sm pr-2'>githublink</span>
              <span className='text-span4 text-sm pr-2'>=</span>
              <span className='text-span3 text-sm pr-2 '>
                <a
                  className='
                text-span3 hidden md:block no-underline md:underline-offset-4
                hover:text-span2
                transition duration-500 ease-in-out'
                  href='https://github.com/trillionclues/'
                  target='_blank'
                >
                  "https://github.com/trillionclues/"
                </a>
                <p>
                  <a
                    className='
                text-span3   block md:hidden
                hover:text-span2
                transition duration-500 ease-in-out'
                    href='https://github.com/trillionclues/'
                    target='_blank'
                  >
                    "https://github.com/trillionclues/"
                  </a>
                </p>
              </span>
              <button
                className='
               block
              hover:bg-transparent
              transition duration-500 ease-in-out py-4 px-[50px] md:w-auto md:py-2 md:px-12 border-devColor border-2  text-white font-bold absolute
              z-[999] rounded-md
              '
              >
                <Link className='text-lg' to='/contact-me'>
                  Contact me!
                </Link>
              </button>
            </p>
          </div>
        </section>
        {/* <SnakeGame /> */}
        <div className='hidden md:block h-screen mt-10'>
          <SnakeQuest />
        </div>
      </div>
    </div>
  );
};

export default Hero;
