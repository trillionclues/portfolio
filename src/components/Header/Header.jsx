import React from 'react'
import { NavLink } from 'react-router-dom'
import { developer } from '../../assets/developer'

const Header = () => {
  return (
    <div className='w-full bg-nav border-b border-b-outline border-b-2 border-rounded-md'>
      {developer.map((dev, index) => {
        // console.log(dev)
        const { logo } = dev
        return (
          <nav
            className='flex grow justify-between items-center p-0'
            key={index}
          >
            <ul className='flex items-center list-none p-0 m-0 text-sm text-textColor'>
              <li className='no-underline border-r border-r-outline  py-3 px-5 cursor-pointer pr-14 hover:text-slate-200'>
                <NavLink to='/'>{logo}</NavLink>
              </li>
              <li className='no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200'>
                <NavLink to='/about-me'>_about-me</NavLink>
              </li>
              <li className='no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200'>
                <NavLink to='/projects'>_projects</NavLink>
              </li>
              <li className='no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200'>
                <NavLink to='/articles'>_article</NavLink>
              </li>
            </ul>

            <div className=' text-sm no-underline border-l border-l-outline py-3 px-5 cursor-pointer text-textColor hover:text-slate-200'>
              <NavLink to='/contact'>_contact-me</NavLink>
            </div>
          </nav>
        )
      })}
    </div>
  )
}

export default Header
