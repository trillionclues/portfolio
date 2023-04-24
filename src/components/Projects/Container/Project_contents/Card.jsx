import React from 'react'

const Card = ({ title, imageSrc, description, projecturl }) => {
  return (
    <section className='w-full'>
      <h2>
        Project 1 <span>{title}</span>
      </h2>
      <div className='w-[270px] flex flex-col items-start justify-start bg-[#010c15] rounded-lg shadow-md'>
        <img
          src={imageSrc}
          alt={title}
          className='w-full h-40 object-cover mb-4 rounded-t-xl'
          style={{ width: '100%' }}
        />
        <div className='px-4 py-4'>
          <p className='text-sm text-gray-600 mb-4'>{description}</p>
          <button className='bg-outline text-white text-sm py-2 px-6 rounded-lg focus:outline-none '>
            <a
              className='text-white hover:text-gray-100 focus:outline-none'
              href={projecturl}
            >
              view-project
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card
