import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import Contact from './Contact'
import Menu1 from './Personal/Menu1'
import Menu2 from './Personal/Menu2'
import Menu3 from './Personal/Menu3'

// mobile toggle images
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'

export const Info_personal = ({ setMobilePers, mobilePers }) => {
  const [toggleBio, setToggleBio] = useState(true)
  const [interest, setInterest] = useState(true)
  const [education, setEducation] = useState(true)

  return (
    <section className='md:w-[240px]  xl:w-[231px] oxl:w-[250px] md:border-r md:border-r-outline'>
      {developer.map((dev, index) => {
        const { about } = dev

        return (
          <nav key={index}>
            <div className='flex justify-start items-center py-2 border-b border-b-outline cursor-pointer px-3'>
              <img
                src={about[0]['personal-info'].icon}
                className='hidden md:inline-block'
              />
              <h3 className='pl-2 text-sm text-white tracking-wider hidden md:inline-block'>
                {about[0]['personal-info'].title}
              </h3>

              {/* mobile render */}
              <button
                className='md:hidden inline-block flex flex-row justify-center items-center cursor-pointer'
                onClick={() => setMobilePers(!mobilePers)}
              >
                {mobilePers ? <img src={arrowDown} /> : <img src={arrowSide} />}
                <h3 className='pl-2 text-sm text-white tracking-wider inline-block md:hidden'>
                  {about[0]['personal-info'].title}
                </h3>
              </button>
            </div>
            <ul className='pl-3 pb-2'>
              {about[0]['personal-info'].info.map((item, index) => {
                // console.log(item)
                return (
                  <>
                    <div key={index} className='md:inline-block hidden'>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setToggleBio(!toggleBio)}
                      >
                        <Menu1
                          toggleBio={toggleBio}
                          index={index}
                          item={item}
                        />
                      </div>
                      <div>
                        <Menu2 interest={interest} index={index} item={item} />
                      </div>
                      <div>
                        <Menu3
                          education={education}
                          item={item}
                          index={index}
                        />
                      </div>
                    </div>

                    {/* mobile render */}
                    {mobilePers && (
                      <div key={index} className='inline-block md:hidden'>
                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setToggleBio(!toggleBio)}
                        >
                          <Menu1
                            toggleBio={toggleBio}
                            index={index}
                            item={item}
                          />
                        </div>
                        <div>
                          <Menu2
                            interest={interest}
                            index={index}
                            item={item}
                          />
                        </div>
                        <div>
                          <Menu3
                            education={education}
                            item={item}
                            index={index}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
            </ul>
            <div>
              <Contact />
            </div>
          </nav>
        )
      })}
    </section>
  )
}
