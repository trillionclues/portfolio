import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav_items = ({ isOpen, isActive, toggleNavbar, setIsOpen }) => {
  return (
    <>
      <NavLink
        to='/about-me'
        onClick={() => {
          toggleNavbar()
          setIsOpen(false)
        }}
      >
        <li
          className={`border-b border-b-outline border-b-0 md:border-b-1 md:border-b-[#fea55f] no-underline border-r border-r-outline py-3 md:py-[5px] px-5 cursor-pointer  hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  
                  ${
                    isActive('/about-me') ? 'border-b-2 border-b-[#fea55f]' : ''
                  }
                  `}
        >
          _about-me
        </li>
      </NavLink>

      <NavLink
        to='/projects'
        onClick={() => {
          toggleNavbar()
          setIsOpen(false)
        }}
      >
        <li
          className={`border-b border-b-outline border-b-0 md:border-b-1 md:border-b-[#fea55f] no-underline border-r border-r-outline py-3 md:py-[5px] px-5 cursor-pointer  hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm 
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  
                  ${
                    isActive('/projects') ? 'border-b-2 border-b-[#fea55f]' : ''
                  }
                  `}
        >
          _projects
        </li>
      </NavLink>

      <NavLink
        to='/timeline'
        onClick={() => {
          toggleNavbar()
          setIsOpen(false)
        }}
      >
        <li
          className={`border-b border-b-outline border-b-0 md:border-b-1 md:border-b-[#fea55f] no-underline border-r border-r-outline py-3 md:py-[5px] px-5 cursor-pointer  hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  ${
                    isActive('/timeline') ? 'border-b-2 border-b-[#fea55f]' : ''
                  }
                  `}
        >
          _timeline
        </li>
      </NavLink>
    </>
  )
}

export default Nav_items
