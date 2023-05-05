import React from 'react'

const Contacts = ({ title, icon, icon2, toggleSidebar, setToggleSidebar }) => {
  console.log(title)
  return (
    <>
      <h1 className='w-full py-2.5 px-3 block md:hidden text-base'>
        _contacts
      </h1>
      <div className='py-3 border-b border-b-outline px-5 text-sm flex flex-row items-center cursor-pointer'>
        <img
          className='pr-2 hidden md:inline-block'
          src={icon}
          alt='arrow down'
        />

        {/* <button
          className='md:hidden inline-block flex flex-row justify-center items-center'
          onClick={() => setToggleSidebar(!toggleSidebar)}
          aria-label='toggle-sidebar'
        >
          {toggleSidebar ? (
            <img className='pr-2 inline-block' src={icon2} alt='arrow down' />
          ) : (
            <img className='pr-2 inline-block' src={icon} alt='arrow side' />
          )}
          <h1 className='inline-block md:hidden'>{title}</h1>
        </button> */}

        <h1 className='hidden md:inline-block'>{title}</h1>
      </div>
    </>
  )
}

export default Contacts
