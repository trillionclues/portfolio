import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Gist from '../../Gist'

export const Bio = ({ toggleBio }) => {
  return (
    <>
      {/* desktop render */}

      <section className='md:w-[540px] h-full md:border-r md:border-r-outline text-textColor hidden md:inline-block'>
        <header className='flex flex-row items-center justify-start py-2 border-b border-b-outline px-2'>
          <h4 className='pl-2 pr-8 text-sm text-textColor tracking-wider  cursor-pointer'>
            personal-info
          </h4>
          <FaTimes className='text-sm cursor-pointer ' />
        </header>
        <div className='flex md:flex-col mt-6 mx-16 '>
          <div className='text-sm leading-7'>
            <p>
              <span className='pr-2 font-bold'>1</span>
              <span> /**</span>
            </p>
            <p>
              <span className='pr-2 font-bold'>2</span>
              <span className='font-bold text-base'> * About me</span>
            </p>
            <p>
              <span className='pr-2 font-bold'>3</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> I am a versatile software
                developer{' '}
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>4</span>

              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> with a passion for
                creating innovative solutions that meet the needs of businesses
                and individuals.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>5</span>

              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> I have expertise in
                various programming languages and am always eager to learn new
                technologies.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>6</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> With a keen eye for
                detail and a focus on quality, I strive to deliver robust and
                scalable software products that exceed expectations and drive
                success.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>7</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> Let's build something
                amazing together!
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>10</span>
              <span> **/ </span>
            </p>
          </div>
        </div>
      </section>

      {/* mobile submenu render */}

      <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor inline-block md:hidden '>
        <div className='flex mt-5 flex-col justify-center items-start px-5'>
          <h4 className='mb-3 text-white text-sm'>
            // personal-info <span className='text-textColor'>/ bio</span>
          </h4>
          <div className='text-sm leading-7'>
            <p>
              I am a versatile software developer with a passion for creating
              innovative solutions that meet the needs of businesses and
              individuals. I have expertise in various programming languages and
              am always eager to learn new technologies. With a keen eye for
              detail and a focus on quality, I strive to deliver robust and
              scalable software products that exceed expectations and drive
              success.
              <span className='block py-2'>
                Let's build something amazing together!
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
