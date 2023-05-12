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
          <div className='flex md:flex-col mt-6 mx-16'>
            <div className='text-sm leading-7'>
              <p>
                <span className='pr-2 font-bold'>1</span>
                <span> /**</span>
              </p>
              <p>
                <span className='pr-2 font-bold'>2</span>
                <span className='font-bold text-base'> * Technical Skills</span>
              </p>

              <p>
                <span className='pr-2 font-bold'>3</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I am proficient in
                  building user-centric appliactions using React.js with
                  TypeScript and Next.js, which are popular frameworks for
                  building dynamic and responsive web applications.
                </span>
              </p>
              <p>
                <span className='pr-2 font-bold'>4</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I also have experience
                  working with SQl and NoSQL databases like MongoDB, Postgresql
                  for enterprise level applications.
                </span>
              </p>

              <p>
                <span className='pr-2 font-bold'>5</span>
                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I am always eager to
                  learn new technologies and stay up-to-date with the latest
                  industry trends and best practices. Let's discuss how my
                  skills can help bring your software development projects to
                  life!
                </span>
              </p>
              <p>
                <span className='pr-2 font-bold'>6</span>
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
              <span className='text-textColor'>/ technical-skills</span>
            </h4>
            <div className='text-sm leading-7'>
              <p>
                I am proficient in building user-centric appliactions using
                React.js with TypeScript and Next.js, which are popular
                frameworks for building dynamic and responsive web applications.
                I also have experience working with SQl and NoSQL databases like
                MongoDB, Postgresql for enterprise level applications. I am
                always eager to learn new technologies and stay up-to-date with
                the latest industry trends and best practices.
                <span className='block py-2'>
                  Let's discuss how my skills can help bring your software
                  development projects to life!
                </span>
              </p>
            </div>
          </div>
          <Gist />
        </section>
      )}
    </>
  )
}
