import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import Contact from './Contact'
import Menu1 from './Professional/Menu1'
import Menu2 from './Professional/Menu2'
import Menu3 from './Professional/Menu3'

// mobile toggle images
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'

export const Info_professional = ({
  mobilePro,
  setMobilePro,
  setMobileHob,
  setMobilePers,
  toggleExp,
  setToggleExp,
  hardSkills,
  setHardSkills,
  softSkills,
  setSoftSkills,
}) => {
  return (
    <section className='md:w-[240px] xl:w-[231px] oxl:w-[250px] md:border-r md:border-r-outline'>
      <div>
        {developer.map((dev, index) => {
          const { about } = dev
          // console.log(about)
          return (
            <nav key={index}>
              <div
                className='border-0 flex justify-start items-center py-2.5 md:py-2 md:border-b border-b-outline px-5 md:px-2 bg-outline md:bg-primary'
                onClick={() => {
                  setMobilePro(!mobilePro)
                  setMobileHob(false)
                  setMobilePers(false)
                }}
              >
                <img
                  src={about[0]['professional-info'].icon}
                  className='hidden md:inline-block'
                />

                <h4 className='pl-2 text-sm text-white tracking-wider hidden md:inline-block'>
                  {about[0]['professional-info'].title}
                </h4>

                {/* mobile render */}
                <button className='md:hidden inline-block flex flex-row justify-center items-center cursor-pointer'>
                  {mobilePro ? (
                    <img src={arrowDown} />
                  ) : (
                    <img src={arrowSide} />
                  )}
                  <h4 className='pl-2 text-[14px] text-white tracking-wider inline-block md:hidden'>
                    {about[0]['professional-info'].title}
                  </h4>
                </button>
              </div>
              <ul className='pl-3 pb-2'>
                {about[0]['professional-info'].info.map((item, index) => {
                  // console.log(item)
                  return (
                    <>
                      <div className='hidden md:inline-block'>
                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setToggleExp(!toggleExp)}
                        >
                          <Menu1
                            toggleExp={toggleExp}
                            item={item}
                            index={index}
                          />
                        </div>

                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setHardSkills(!hardSkills)}
                        >
                          <Menu2
                            hardSkills={hardSkills}
                            item={item}
                            index={index}
                          />
                        </div>
                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setSoftSkills(!softSkills)}
                        >
                          <Menu3
                            softSkills={softSkills}
                            item={item}
                            index={index}
                          />
                        </div>
                      </div>

                      {/* conditional display on mobile */}
                      {mobilePro && (
                        <div key={index} className='inline-block md:hidden'>
                          <div
                            className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                            onClick={() => setToggleExp(!toggleExp)}
                          >
                            <Menu1
                              toggleExp={toggleExp}
                              item={item}
                              index={index}
                            />
                          </div>

                          <div
                            className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                            onClick={() => setHardSkills(!hardSkills)}
                          >
                            <Menu2
                              hardSkills={hardSkills}
                              item={item}
                              index={index}
                            />
                          </div>
                          <div
                            className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                            onClick={() => setSoftSkills(!softSkills)}
                          >
                            <Menu3
                              softSkills={softSkills}
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
      </div>
    </section>
  )
}
