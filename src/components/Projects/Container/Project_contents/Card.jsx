import React, { useState } from 'react'

const Card = ({ title, img, description, url, filledIcon, index }) => {
  const [numberSpan, setNumberSpan] = useState(1)

  return (
    <section className='w-full flex flex-row justify-center'>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='text-base font-semibold text-span3 mb-3'>
            Project {numberSpan + index}
            <span className='text-textColor font-light pl-3'>//{title}</span>
          </h2>
          <div
            className='w-[320px] md:w-full flex flex-col justify-center border
          border-outline rounded-xl'
          >
            <div className='relative'>
              <img
                src={img}
                alt={title}
                className='w-full h-40 object-cover rounded-t-xl'
                style={{ width: '100%' }}
              />
              <img
                src={filledIcon}
                alt=''
                className='absolute
              top-10 right-4 w-5 h-5 object-cover rounded-full ml-4 -mt-8
              '
              />
            </div>
            <div className='px-4 py-4 bg-[#010c15] rounded-b-xl'>
              <p className='text-sm text-gray-600 mb-4'>{description}</p>
              <button
                className='bg-outline text-white text-sm py-2 px-6 rounded-lg focus:outline-none 
              hover:bg-comment hover:text-gray-900transition duration-300 ease-in-out
              transform hover:-translate-y-1 hover:scale-140'
              >
                <a
                  className='text-white hover:text-gray-100 focus:outline-none'
                  href={url}
                >
                  view-project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
