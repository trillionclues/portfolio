import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../../../utils/context'
import { projects } from '../../../../../utils/projects'
import Card from './Card'

const Hero = () => {
  const [visible, setVisible] = useState(3)
  const { filteredProjects } = useGlobalContext()

  console.log(filteredProjects)

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3)
  }

  return (
    <section className='w-[11/12] h-screen flex flex-col justify-start items-center gap-8 px-8  py-1 md:px-16 md:py-16'>
      <div className='card-section pb-5 '>
        {filteredProjects.length === 0 ? (
          <div className='noProject'>
            <p>Oops😬! No project found</p>
          </div>
        ) : (
          filteredProjects.slice(0, visible).map((item, idx) => {
            return <Card key={idx} {...item} loadMore={loadMore} index={idx} />
          })
        )}
        <div>
          <div
            className='absolute
              bottom-auto right-5 md:right-[-100px] w-full flex flex-row justify-center items-center pb-5 md:pb-0'
          >
            {visible < filteredProjects.length && (
              <button
                className='bg-devColor text-white text-base py-2.5 px-6 rounded-lg focus:outline-none hover:bg-comment font-semibold transition duration-300 ease-in-out'
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
