import React, { useState } from 'react'
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'

const Contacts = ({ title, toggleContact, setToggleContact }) => {
  // console.log(title)
  return (
    <>
      <h1 className='w-full py-3 pt-5 px-3 md:hidden text-base'>_contacts</h1>
      <div className='py-3 border-0 md:border-b border-b-outline px-5 text-sm flex flex-row items-center bg-outline md:bg-primary'>
        <img
          className='pr-2 md:inline-block hidden'
          src={arrowDown}
          alt='arrow down'
        />

        <button
          className='md:hidden inline-block flex flex-row justify-center items-center'
          onClick={() => setToggleContact(!toggleContact)}
        >
          {toggleContact ? (
            <img src={arrowDown} className='inline-block pr-2' alt='arrow' />
          ) : (
            <img src={arrowSide} className='inline-block pr-2' alt='arrow' />
          )}
          <h1 className='inline-block'>{title}</h1>
        </button>

        <h1 className='hidden md:inline-block'>{title}</h1>
      </div>
    </>
  )
}

export default Contacts
