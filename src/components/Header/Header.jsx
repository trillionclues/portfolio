import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { developer } from '../../assets/developer'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaTimes } from 'react-icons/fa'
import Nav_items from './Nav_items'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full bg-nav border-b border-b-outline border-b-1 md:border-b-2 border-rounded-sm md:border-rounded-md'>
      {developer.map((dev, index) => {
        const { logo } = dev
        return (
          <nav key={index} className='flex justify-between items-center'>
            <li className='no-underline text-textColor list-none border-b-0 md:border-r md:border-r-outline py-4 md:py-[10px] md:py-3 px-5 pr-20 md:pr-10 oxl:pr-[9.1rem] xl:pr-[6.6rem] cursor-pointer lg:text-sm text-xl hover:text-slate-200 transition-all duration-300 hover:bg-outline'>
              <NavLink to='/'>{logo}</NavLink>
            </li>
            <div className='flex block sm:grow justify-between items-center '>
              <div className='block sm:hidden px-5' onClick={toggleNavbar}>
                {isOpen ? (
                  <FaTimes
                    className='text-textColor text-2xl cursor-pointer'
                    onClick={toggleNavbar}
                  />
                ) : (
                  <RxHamburgerMenu
                    className='text-textColor text-2xl cursor-pointer'
                    onClick={toggleNavbar}
                  />
                )}
              </div>
              <ul
                className={`menu-toggle sm:flex sm-block relative flex-col sm:flex-row items-center list-none p-0 m-0 text-sm text-textColor
                ${isOpen ? 'bg-primary hidden' : 'block'}}
                `}
              >
                <Nav_items isOpen={isOpen} />
              </ul>
              <NavLink to='/contact-me'>
                <li
                  className={`border-b border-b-outline md:border-b-0 border-b-1 contact-toggle list-none no-underline border-0 md:border-l md:border-l-outline py-3 md:py-[6px] pr-5 pl-5 cursor-pointer text-textColor hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm ${
                    !isOpen ? 'bg-primary hidden sm:block' : 'block w-full'
                  }
                }`}
                >
                  _contact-me
                </li>
              </NavLink>
            </div>
          </nav>
        )
      })}
    </div>
  )
}

export default Header
