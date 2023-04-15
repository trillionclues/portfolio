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
        // console.log(dev)
        const { logo } = dev
        return (
          <nav
            className='flex block sm:grow justify-between items-center p-0'
            key={index}
          >
            <li className='no-underline text-textColor list-none border-r border-r-outline  py-3 px-5 cursor-pointer  hover:text-slate-200'>
              <NavLink to='/'>{logo}</NavLink>
            </li>
            <div className='block sm:hidden' onClick={toggleNavbar}>
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
              className={`sm:flex sm-block flex-col sm:flex-row items-center list-none p-0 m-0 text-sm text-textColor ${
                isOpen ? 'hidden' : 'menu-item'
              }}`}
            >
              <NavLink to='/about-me'>
                <li
                  className={`no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block'}
                  `}
                >
                  _about-me
                </li>
              </NavLink>

              <NavLink to='/projects'>
                <li
                  className={`no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block'}
                  `}
                >
                  _projects
                </li>
              </NavLink>

              <NavLink to='/articles'>
                <li
                  className={`no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200 
                  ${!isOpen ? 'hidden sm:block' : 'block'}
                  `}
                >
                  _articles
                </li>
              </NavLink>
            </ul>
            <NavLink to='/contact'>
              <li
                className={`list-none text-sm no-underline border-l border-l-outline py-3 px-5 cursor-pointer text-textColor hover:text-slate-200 ${
                  !isOpen ? 'hidden sm:block' : 'block'
                }
                }`}
              >
                _contact-me
              </li>
            </NavLink>
          </nav>
        )
      })}
    </div>
  )
}

export default Header
