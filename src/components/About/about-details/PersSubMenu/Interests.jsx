import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Interests = () => {
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
              <span className='font-bold text-base'> * Interests</span>
            </p>
            <p>
              <span className='pr-2 font-bold'>3</span>

              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> From web application
                design to SPAs, I have experience in various areas of software
                development.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>4</span>

              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> Some of my particular
                interests include creating intuitive user interfaces, optimizing
                performance and scalability, and leveraging cloud technologies.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>5</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> I'm also passionate about
                open-source software and contributing to the developer
                community.
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>7</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> Browse my portfolio and
                see how my skills can help bring your ideas to life!
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>6</span>
              <span> **/ </span>
            </p>
          </div>
        </div>
      </section>

      {/* mobile submenu render */}

      <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor inline-block md:hidden '>
        <div className='flex mt-5 flex-col justify-center items-start px-5'>
          <h4 className='mb-3 text-white text-sm'>
            // personal-info <span className='text-textColor'>/ interests</span>
          </h4>
          <div className='text-sm leading-7'>
            <p>
              My portfolio showcases a range of exciting projects that reflect
              my diverse interests and expertise. From web application design to
              SPAs, I have experience in various areas of software development.
              Some of my particular interests include creating intuitive user
              interfaces, optimizing performance and scalability, and leveraging
              cloud technologies. I'm also passionate about open-source software
              and contributing to the developer community.
              <span className='block py-2'>
                Browse my portfolio and see how my skills can help bring your
                ideas to life!
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
