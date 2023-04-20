import React, { useState } from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { developer } from '../../../assets/developer'
import folder1 from '/icons/folder1.svg'
import folder2 from '/icons/folder2.svg'
import Contact from './Contact'

export const Info_hobbies = () => {
  const [sports, setSports] = useState(true)
  const [favorite, setFavorite] = useState(true)

  return (
    <section className='md:w-[240px] xl:w-[231px] oxl:w-[257px] md:border-r md:border-r-outline'>
      {developer.map((dev, index) => {
        const { about } = dev
        return (
          <nav key={index}>
            <div className='flex justify-start items-center py-2 border-b border-b-outline cursor-pointer px-3'>
              <img src={about[0]['hobbies-info'].icon} />
              <h3 className='pl-2 text-sm text-white tracking-wider'>
                {about[0]['hobbies-info'].title}
              </h3>
            </div>
            <ul className='pl-3 pb-2'>
              {about[0]['hobbies-info'].info.map((item, index) => {
                // console.log(item)
                return (
                  <div>
                    <div
                      className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                      onClick={() => setSports(!sports)}
                    >
                      <div className='text-base'>
                        {sports ? (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowRight />
                            <img className='pr-2 pl-2' src={folder1} alt='' />
                            <li
                              className='text-sm pl-2 text-textColor'
                              key={index}
                            >
                              {item.sports.title}
                            </li>
                          </div>
                        ) : (
                          <div className='flex flex-row justify-center items-center text-center'>
                            <MdOutlineKeyboardArrowDown />
                            <img className='pr-2 pl-2' src={folder1} alt='' />
                            <li className='text-sm pl-2' key={index}>
                              {item.sports.title}
                            </li>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='favGames'>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setFavorite(!favorite)}
                      >
                        <div className='text-base'>
                          {favorite ? (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowRight />
                              <img className='pr-2 pl-2' src={folder2} alt='' />
                              <li
                                className='text-sm pl-2 text-textColor'
                                key={index}
                              >
                                {item.favGames.title}
                              </li>
                            </div>
                          ) : (
                            <div className='flex flex-row justify-center items-center text-center'>
                              <MdOutlineKeyboardArrowDown />
                              <img className='pr-2 pl-2' src={folder2} alt='' />
                              <li className='text-sm pl-2' key={index}>
                                {item.favGames.title}
                              </li>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ul>
            <div className='div'>
              <Contact />
            </div>
          </nav>
        )
      })}
    </section>
  )
}
