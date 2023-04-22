import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import Contact from './Contact'
import Menu1 from './Hobbies/Menu1'
import Menu2 from './Hobbies/Menu2'

export const Info_hobbies = () => {
  const [sports, setSports] = useState(true)
  const [favorite, setFavorite] = useState(true)

  return (
    <section className='md:w-[240px] xl:w-[231px] oxl:w-[250px] md:border-r md:border-r-outline'>
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
                      <Menu1 sports={sports} item={item} index={index} />
                    </div>
                    <div className='favGames'>
                      <div
                        className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'
                        onClick={() => setFavorite(!favorite)}
                      >
                        <Menu2 favorite={favorite} item={item} index={index} />
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
