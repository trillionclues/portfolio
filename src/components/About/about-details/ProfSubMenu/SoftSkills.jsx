import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Gist from '../../Gist'

export const SoftSkills = ({ softSkills }) => {
  return (
    <>
      {/* desktop render */}
      {softSkills && (
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
                <span className='pr-2 font-bold'>1</span>
                <span> /**</span>
              </p>
              <p>
                <span className='pr-2 font-bold'>2</span>
                <span className='font-bold text-base'> * Workplace Skills</span>
              </p>

              <p>
                <span className='pr-2 font-bold'>3</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> In addition to my
                  technical expertise, I have excellent problem-solving skills,
                  which allow me to identify and address complex technical
                  issues efficiently and effectively.
                </span>
              </p>
              <p>
                <span className='pr-2 font-bold'>4</span>

                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I am a strong
                  communicator, able to explain technical concepts in a clear
                  and concise manner. I am self-motivated and dedicated, always
                  eager to learn and improve my skills to stay ahead of industry
                  trends and best practices.
                </span>
              </p>

              <p>
                <span className='pr-2 font-bold'>5</span>
                <span>
                  {' '}
                  <span className='pr-2'>&#x2022;</span> I am committed to
                  delivering high-quality work and ensuring that projects are
                  completed on time and to the satisfaction of all stakeholders.
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
      {softSkills && (
        <section className='md:w-[520px] h-full md:border-r md:border-r-outline text-textColor inline-block md:hidden '>
          <div className='flex mt-5 flex-col justify-center items-start px-5'>
            <h4 className='mb-3 text-white text-sm'>
              // professional-info{' '}
              <span className='text-textColor'>/ workplace-skills</span>
            </h4>
            <div className='text-sm leading-7'>
              <p>
                In addition to my technical expertise, I have excellent
                problem-solving skills, which allow me to identify and address
                complex technical issues efficiently and effectively. I am a
                strong communicator, able to explain technical concepts in a
                clear and concise manner. I am self-motivated and dedicated,
                always eager to learn and improve my skills to stay ahead of
                industry trends and best practices. I am committed to delivering
                high-quality work and ensuring that projects are completed on
                time and to the satisfaction of all stakeholders.
              </p>
            </div>
          </div>
          <Gist />
        </section>
      )}
    </>
  )
}
