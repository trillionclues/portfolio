import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Education = () => {
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
              <span className='font-bold text-base'> * Education</span>
            </p>
            <p>
              <span className='pr-2 font-bold'>3</span>

              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> I hold a BSc. in Computer
                Science Education, recently completed the intensive ALx Software
                Engineering Bootcamp where I gained practical experience
                building scalable and maintainable applications.
              </span>
            </p>

            <p>
              <span className='pr-2 font-bold'>5</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> With a passion for
                continuous learning, I'm always looking for opportunities to
                expand my skills and knowledge through courses online. focused
                on cloud computing, web development, and software engineering
                best practices
              </span>
            </p>
            <p>
              <span className='pr-2 font-bold'>5</span>
              <span>
                {' '}
                <span className='pr-2'>&#x2022;</span> I'm excited to apply my
                experience to create innovative solutions for businesses and
                individuals.
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
            // personal-info <span className='text-textColor'>/ education</span>
          </h4>
          <div className='text-sm leading-7'>
            <p>
              I hold a BSc. in Computer Science Education, recently completed
              the intensive ALx Software Engineering Bootcamp where I gained
              practical experience building scalable and maintainable
              applications. With a passion for continuous learning, I'm always
              looking for opportunities to expand my skills and knowledge
              through courses online. focused on cloud computing, web
              development, and software engineering best practices.
              <span className='block py-2'>
                I'm excited to apply my experience to create innovative
                solutions for businesses and individuals.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
