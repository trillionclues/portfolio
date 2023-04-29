import React, { useState } from 'react'
import { developer } from '../../../../assets/developer'
import Card from './Card'

const Hero = () => {
  const [visible, setVisible] = useState(3)

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3)
  }

  return (
    <section className='w-[11/12] h-screen flex flex-col justify-start items-center gap-8 px-8  py-8 md:px-16 md:py-16'>
      {developer.map((dev, index) => {
        const { projects } = dev

        return (
          <div
            key={index}
            className='card-section pb-5 '
            // container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 overflow-y-scroll px-[50px] py-[40px]
          >
            {projects.length === 0 ? (
              <div className='noProject'>
                <p>Oops😬! No project found</p>
              </div>
            ) : (
              projects.slice(0, visible).map((item, idx) => {
                return (
                  <Card key={idx} {...item} loadMore={loadMore} index={idx} />
                )
              })
            )}
            <div>
              <div
                className='absolute
              bottom-auto right-5 md:right-[-100px] w-full flex flex-row justify-center items-center pb-5 md:pb-0
              '
              >
                {visible < projects.length && (
                  <button
                    className='bg-devColor text-white text-base py-2.5 px-6 rounded-lg focus:outline-none
                  hover:bg-comment hover:text-gray-900transition duration-300 ease-in-out
                    '
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Hero
