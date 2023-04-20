import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Pers_details = () => {
  return (
    <section className='md:w-[550px] md:border-r md:border-r-outline text-textColor '>
      <header className='flex flex-row items-center justify-start py-2 border-b border-b-outline px-2'>
        <h4 className='pl-2 pr-8 text-sm text-textColor tracking-wider  cursor-pointer'>
          personal-info
        </h4>
        <FaTimes className='text-sm cursor-pointer ' />
      </header>
      <div className='flex md:flex-col mt-6 mx-16 '>
        <div className='text-sm leading-7'>
          <p>
            <span>1</span>
            <span> /**</span>
          </p>
          <p>
            <span>2</span>
            <span> * About me</span>
          </p>
          <p>
            <span>3</span>
            <span> * I have 5 years of еxperience in web </span>
          </p>
          <p>
            <span>4</span>
            <span> * development lorem ipsum dolor sit amet,</span>
          </p>
          <p>
            <span>5</span>
            <span>
              * tempor incididunt ut labore et dolore * magna aliqua. Ut enim ad
              minim veniam,
            </span>
          </p>
          <p>
            <span>6</span>
            <span> * voluptate velit esse cillum dolore eu fugiat</span>
          </p>
          <p>
            <span>7</span>
            <span> * officia deserunt mollit anim id est laborum.</span>
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

export default Pers_details
