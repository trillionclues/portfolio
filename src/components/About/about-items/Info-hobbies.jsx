import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import Contact from './Contact'
import Menu1 from './Hobbies/Menu1'
import Menu2 from './Hobbies/Menu2'

// mobile toggle images
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'

export const Info_hobbies = ({
  setMobileHob,
  setMobilePro,
  setMobilePers,
  mobileHob,
}) => {
  const [sports, setSports] = useState(true)
  const [favorite, setFavorite] = useState(true)

  return (
    <section className='md:w-[240px] xl:w-[231px] oxl:w-[250px] md:border-r md:border-r-outline'>
      {developer.map((dev, index) => {
        const { about } = dev
        return (
          <nav key={index}>
            <div
              className='border-0 flex justify-start items-center py-2.5 md:py-2 md:border-b border-b-outline cursor-pointer px-5 md:px-2 bg-outline md:bg-primary'
              onClick={() => {
                setMobileHob(!mobileHob)
                setMobilePers(false)
                setMobilePro(false)
              }}
            >
              <img
                src={about[0]['hobbies-info'].icon}
                className='hidden md:inline-block'
              />
              <h3 className='pl-2 text-sm text-white tracking-wider hidden md:inline-block'>
                {about[0]['hobbies-info'].title}
              </h3>

              {/* mobile render */}
              <button className='md:hidden inline-block flex flex-row justify-center items-center cursor-pointer'>
                {mobileHob ? <img src={arrowDown} /> : <img src={arrowSide} />}
                <h3 className='pl-2 text-sm text-white tracking-wider inline-block md:hidden'>
                  {about[0]['hobbies-info'].title}
                </h3>
              </button>
            </div>
            <ul className='pl-3 pb-2'>
              {about[0]['hobbies-info'].info.map((item, index) => {
                // console.log(item)
                return (
                  <>
                    <div className='hidden md:inline-block'>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setSports(!sports)}
                      >
                        <Menu1 sports={sports} item={item} index={index} />
                      </div>
                      <div className='favGames'>
                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setFavorite(!favorite)}
                        >
                          <Menu2
                            favorite={favorite}
                            item={item}
                            index={index}
                          />
                        </div>
                      </div>
                    </div>

                    {/* mobile render */}
                    {mobileHob && (
                      <div className='md:hidden inline-block'>
                        <div
                          className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                          onClick={() => setSports(!sports)}
                        >
                          <Menu1 sports={sports} item={item} index={index} />
                        </div>
                        <div className='favGames'>
                          <div
                            className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                            onClick={() => setFavorite(!favorite)}
                          >
                            <Menu2
                              favorite={favorite}
                              item={item}
                              index={index}
                            />
                          </div>
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
