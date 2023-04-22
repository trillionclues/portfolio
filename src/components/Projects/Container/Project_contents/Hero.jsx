import React from 'react'
import { developer } from '../../../../assets/developer'

const Hero = () => {
  return (
    <div className='w-full'>
      <section className='w-full'>
        {/* <div className='hero-header'>
          <h1 className='hero-header__title--main'>Projects</h1>
        </div> */}

        <div className='hero-content'>
          {developer.map((dev, index) => {
            const { projects } = dev
            return (
              <div className='hero-content__projects' key={index}>
                {projects.map((project, idx) => {
                  return (
                    <div key={index}>
                      <li className='flex justify-start items-center py-2.5 px-3'>
                        <img
                          className='w-[100px] h-[100px] object-contain'
                          src={project.first.img}
                          alt='icon'
                        />
                        <div>
                          <h3>{project.first.title}</h3>
                          <p>{project.first.description}</p>
                        </div>
                      </li>
                      <li className='flex justify-start items-center py-2.5 px-3'>
                        <img
                          className='w-[100px] h-[100px] object-contain'
                          src={project.second.img}
                          alt='icon'
                        />
                        <div>
                          <h3>{project.second.title}</h3>
                          <p>{project.second.description}</p>
                        </div>
                      </li>
                      <li className='flex justify-start items-center py-2.5 px-3'>
                        <img
                          className='w-[100px] h-[100px] object-contain'
                          src={project.third.img}
                          alt='icon'
                        />
                        <div>
                          <h3>{project.third.title}</h3>
                          <p>{project.third.description}</p>
                        </div>
                      </li>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Hero
