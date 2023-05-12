import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Gist from '../../Gist'

export const Experience = ({ toggleExp }) => {
  return (
    <>
      {/* desktop render */}

      {toggleExp && (
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
                <span className='font-bold text-base'> * Experience</span>
              </p>

              <p>
                <span className='pr-2 font-bold'>3</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I have a year
                  experience building software and currently, I work as a
                  frontend developer together with a lead frontend engineer to
                  build out Tiquette, a leading ticketing platform.
                </span>
              </p>
              <p>
                <span className='pr-2 font-bold'>4</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I have also played an
                  integral role in developing and maintaining the codebase,
                  implementing new features and improving existing ones.
                </span>
              </p>

              <p>
                <span className='pr-2 font-bold'>5</span>
                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I am excited to
                  continue building my career in the tech industry and applying
                  my skills to solve complex problems and drive business
                  success.
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
      {toggleExp && (
        <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor inline-block md:hidden '>
          <div className='flex mt-5 flex-col justify-center items-start px-5'>
            <h4 className='mb-3 text-white text-sm'>
              // professional-info{' '}
              <span className='text-textColor'>/ experience</span>
            </h4>
            <div className='text-sm leading-7'>
              <p>
                I have a year experience building software and currently, I work
                as a frontend developer together with a lead frontend engineer
                to build out Tiquette, a leading ticketing platform. I have also
                played an integral role in developing and maintaining the
                codebase, implementing new features and improving existing ones.
                I am excited to continue building my career in the tech industry
                and applying my skills to solve complex problems and drive
                business success.
              </p>
            </div>
          </div>
          <Gist />
        </section>
      )}
    </>
  )
}
