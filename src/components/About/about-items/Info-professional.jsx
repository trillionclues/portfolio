import React, { useState } from 'react'
import { developer } from '../../../assets/developer'
import Contact from './Contact'
import Menu1 from './Professional/Menu1'
import Menu2 from './Professional/Menu2'
import Menu3 from './Professional/Menu3'

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
                    <div key={index}>
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
