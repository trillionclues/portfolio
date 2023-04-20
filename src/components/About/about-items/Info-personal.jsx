import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder1 from '/icons/folder1.svg'
import folder2 from '/icons/folder2.svg'
import folder3 from '/icons/folder3.svg'
import Contact from './Contact'

export const Info_personal = () => {
  const [toggleBio, setToggleBio] = useState(true)
  const [interest, setInterest] = useState(true)
  const [education, setEducation] = useState(true)

  return (
    <section className='md:w-[228px] md:border-r md:border-r-outline'>
      {developer.map((dev, index) => {
        const { about } = dev

        return (
          <nav key={index}>
            <div className='flex justify-start items-center py-2 border-b border-b-outline cursor-pointer px-3'>
              <img src={about[0]['personal-info'].icon} />
              <h3 className='pl-2 text-base text-white tracking-wider'>
                {about[0]['personal-info'].title}
              </h3>
            </div>
            <ul className='pl-3 pb-2'>
              {about[0]['personal-info'].info.map((item, index) => {
                // console.log(item)
                return (
                  <div>
                    <div
                      className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                      onClick={() => setToggleBio(!toggleBio)}
                    >
                      <div className='text-base'>
                        {toggleBio ? (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowRight />
                            <img className='pr-2 pl-2' src={folder1} alt='' />
                            <li
                              className='text-sm pl-2 text-textColor'
                              key={index}
                            >
                              {item.bio.title}
                            </li>
                          </div>
                        ) : (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowDown />
                            <img className='pr-2 pl-2' src={folder1} alt='' />
                            <li className='text-sm pl-2' key={index}>
                              {item.bio.title}
                            </li>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setInterest(!interest)}
                      >
                        {interest ? (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowRight />
                            <img className='pr-2 pl-2' src={folder2} alt='' />
                            <li
                              className='text-sm pl-2 text-textColor'
                              key={index}
                            >
                              {item.interests.title}
                            </li>
                          </div>
                        ) : (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowDown />
                            <img className='pr-2 pl-2' src={folder2} alt='' />
                            <li className='text-sm pl-2' key={index}>
                              {item.interests.title}
                            </li>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setEducation(!education)}
                      >
                        {education ? (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowRight />
                            <img className='pr-2 pl-2' src={folder3} alt='' />
                            <li
                              className='text-sm pl-2 text-textColor'
                              key={index}
                            >
                              {item.education.title}
                            </li>
                          </div>
                        ) : (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowDown />
                            <img className='pr-2 pl-2' src={folder3} alt='' />
                            <li className='text-sm pl-2' key={index}>
                              {item.education.title}
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
    </section>
  )
}
