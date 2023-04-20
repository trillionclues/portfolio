import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { developer } from '../../assets/developer'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full bg-nav border-b border-b-outline border-b-2 border-rounded-md'>
      {developer.map((dev, index) => {
        const { logo } = dev
        return (
          <nav key={index} className='flex justify-between items-center'>
            <li className='no-underline text-textColor list-none border-0 sm:border-r sm:border-r-outline sm:py-2.5 py-4 px-5 sm:pr-20 md:pr-32 cursor-pointer hover:text-slate-200'>
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
                className={`sm:flex sm-block relative flex-col sm:flex-row items-center list-none p-0 m-0 text-sm text-textColor ${
                  isOpen ? 'hidden' : ' block'
                }}`}
              >
                <NavLink to='/about-me'>
                  <li
                    className={`no-underline border-r  border-r-outline py-2.5 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
                  >
                    _about-me
                  </li>
                </NavLink>

                <NavLink to='/projects'>
                  <li
                    className={`no-underline border-r border-r-outline py-2.5 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
                  >
                    _projects
                  </li>
                </NavLink>

                <NavLink to='/articles'>
                  <li
                    className={`no-underline border-r border-r-outline py-2.5 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
                  >
                    _articles
                  </li>
                </NavLink>
              </ul>
              <NavLink to='/contact'>
                <li
                  className={`list-none  no-underline border-l border-l-outline py-2.5 px-5 cursor-pointer text-textColor hover:text-slate-200 ${
                    !isOpen ? 'hidden sm:block' : 'block w-full'
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
