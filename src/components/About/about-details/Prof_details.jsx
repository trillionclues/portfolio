import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Prof_details = () => {
  return (
    <section className='md:w-[550px] h-full md:border-r md:border-r-outline text-textColor '>
      <header className='flex flex-row items-center justify-start py-2 border-b border-b-outline px-2'>
        <h4 className='pl-2 pr-8 text-sm text-textColor tracking-wider  cursor-pointer'>
          professional-info
        </h4>
        <FaTimes className='text-sm cursor-pointer ' />
      </header>
      <div
        className='flex md:flex-col mt-6 mx-16'
        // style={{ maxHeight: '480px', overflowY: 'auto' }}
      >
        <div className='text-sm leading-7'>
          <p>
            <span>1</span>
            <span> /**</span>
          </p>
          <p>
            <span>2</span>
            <span> * Over the past 5 years, Lorem ipsum dolor</span>
          </p>
          <p>
            <span>3</span>
            <span> * sit amet consectetur adipisicing elit.</span>
          </p>
          <p>
            <span>4</span>
            <span> * Lorem ipsum dolor sit amet consectetur</span>
          </p>
          <p>
            <span>5</span>
            <span> * adipisicing elit. Lorem ipsum dolor sit</span>
          </p>
          <p>
            <span>6</span>
            <span> * amet consectetur adipisicing elit.</span>
          </p>
          <p>
            <span>7</span>
            <span> * Lorem ipsum dolor sit amet consectetur</span>
          </p>
          <p>
            <span>8</span>
            <span> **/ </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prof_details
