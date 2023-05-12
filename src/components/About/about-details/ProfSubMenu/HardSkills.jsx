import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Gist from '../../Gist'

export const HardSkills = ({ hardSkills }) => {
  return (
    <>
      {/* desktop render */}
      {hardSkills && (
        <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor hidden md:inline-block'>
          <header className='flex flex-row items-center justify-start py-2 border-b border-b-outline px-2'>
            <h4 className='pl-2 pr-8 text-sm text-textColor tracking-wider  cursor-pointer'>
              professional-info
            </h4>
            <FaTimes className='text-sm cursor-pointer ' />
          </header>
          <div
            className='flex md:flex-col mt-6 mx-16'
            // style={{ maxHeight: '480px', overflowY: 'auto' }}
          >
            <div className='text-sm leading-7'>
              <p>
                <span>1</span>
                <span> /**</span>
              </p>
              <p>
                <span>2</span>
                <span> * As a front-end developer, Lorem ipsum</span>
              </p>
              <p>
                <span>3</span>
                <span> * dolor sit amet, consectetur adipiscing</span>
              </p>
              <p>
                <span>4</span>
                <span> * elit, sed do eiusmod tempor incididunt</span>
              </p>
              <p>
                <span>5</span>
                <span> * ut labore et dolore magna aliqua. Ut</span>
              </p>
              <p>
                <span>6</span>
                <span> * enim ad minim veniam, quis nostrud</span>
              </p>
              <p>
                <span>7</span>
                <span> * exercitation ullamco laboris nisi ut</span>
              </p>
              <p>
                <span>8</span>
                <span> **/ </span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* conditional mobile render */}
      {hardSkills && (
        <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor inline-block md:hidden '>
          <div className='flex mt-5 flex-col justify-center items-start px-5'>
            <h4 className='mb-3 text-white text-sm'>
              // professional-info{' '}
              <span className='text-textColor'>/ hard-skills</span>
            </h4>
            <div className='text-sm leading-7'>
              <p>
                I have 5 years of experience in web development lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
          <Gist />
        </section>
      )}
    </>
  )
}
