import React, { useState } from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { developer } from '../../../assets/developer'
import folder1 from '/icons/folder1.svg'
import folder2 from '/icons/folder2.svg'
import folder3 from '/icons/folder3.svg'
import Contact from './Contact'
import Prof_details from '../about-details/Prof_details'

export const Info_professional = () => {
  const [toggleExp, setToggleExp] = useState(true)
  const [hardSkills, setHardSkills] = useState(true)
  const [softSkills, setSoftSkills] = useState(true)

  return (
    <section className='md:w-[240px] xl:w-[231px] oxl:w-[250px] md:border-r md:border-r-outline'>
      <div>
        {developer.map((dev, index) => {
          const { about } = dev
          // console.log(about)
          return (
            <nav key={index}>
              <div className='flex justify-start items-center py-2 border-b border-b-outline cursor-pointer px-2'>
                <img src={about[0]['professional-info'].icon} />
                <h4 className='pl-2 text-sm text-white tracking-wider'>
                  {about[0]['professional-info'].title}
                </h4>
              </div>
              <ul className='pl-3 pb-2'>
                {about[0]['professional-info'].info.map((item, index) => {
                  return (
                    <div>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setToggleExp(!toggleExp)}
                      >
                        <div className='text-base'>
                          {toggleExp ? (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowRight />
                              <img className='pr-2 pl-2' src={folder1} alt='' />
                              <li
                                className='text-sm pl-2 text-textColor'
                                key={index}
                              >
                                {item.experience.title}
                              </li>
                            </div>
                          ) : (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowDown />
                              <img className='pr-2 pl-2' src={folder1} alt='' />
                              <li className='text-sm pl-2' key={index}>
                                {item.experience.title}
                              </li>
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setHardSkills(!hardSkills)}
                      >
                        <div className='text-base'>
                          {hardSkills ? (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowRight />
                              <img className='pr-2 pl-2' src={folder2} alt='' />
                              <li
                                className='text-sm pl-2 text-textColor'
                                key={index}
                              >
                                {item.hardSkills.title}
                              </li>
                            </div>
                          ) : (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowDown />
                              <img className='pr-2 pl-2' src={folder2} alt='' />
                              <li className='text-sm pl-2' key={index}>
                                {item.hardSkills.title}
                              </li>
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setSoftSkills(!softSkills)}
                      >
                        <div className='text-base'>
                          {softSkills ? (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowRight />
                              <img className='pr-2 pl-2' src={folder3} alt='' />
                              <li
                                className='text-sm pl-2 text-textColor'
                                key={index}
                              >
                                {item.softSkills.title}
                              </li>
                            </div>
                          ) : (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowDown />
                              <img className='pr-2 pl-2' src={folder3} alt='' />
                              <li className='text-sm pl-2' key={index}>
                                {item.softSkills.title}
                              </li>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
