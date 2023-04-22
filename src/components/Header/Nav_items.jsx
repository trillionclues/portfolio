import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav_items = ({ isOpen }) => {
  return (
    <>
      <NavLink to='/about-me'>
        <li
          className={`border-b border-b-outline border-b-1 md:border-b-2 md:border-b-[#fea55f] no-underline border-r border-r-outline py-3 md:py-[5px] px-5 cursor-pointer hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
        >
          _about-me
        </li>
      </NavLink>

      <NavLink to='/projects'>
        <li
          className={`border-b border-b-outline md:border-b-0 border-b-1 no-underline border-r border-r-outline py-3 md:py-[6px] px-5 cursor-pointer hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
        >
          _projects
        </li>
      </NavLink>

      <NavLink to='/timeline'>
        <li
          className={`border-b border-b-outline md:border-b-0 border-b-1 no-underline border-r border-r-outline py-3 md:py-[6px] px-5 cursor-pointer hover:text-slate-200 hover:bg-outline transition-all duration-300 text-lg lg:text-sm
                  ${!isOpen ? 'hidden sm:block' : 'block w-full'}
                  `}
        >
          _timeline
        </li>
      </NavLink>
    </>
  )
}

export default Nav_items
