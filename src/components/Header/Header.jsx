import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { developer } from '../../assets/developer'

const Header = () => {
  return (
    <div className='header'>
      {developer.map((dev, index) => {
        console.log(dev)
        const { logo } = dev
        return (
          <nav className='header__item' key={index}>
            <ul className='header__left'>
              <li className='header__left-item'>
                <NavLink to='/'>{logo}</NavLink>
              </li>
              <li className='header__left-item'>
                <NavLink to='/about-me'>_about-me</NavLink>
              </li>
              <li className='header__left-item'>
                <NavLink to='/projects'>_projects</NavLink>
              </li>
              <li className='header__left-item'>
                <NavLink to='/articles'>_article</NavLink>
              </li>
            </ul>

            <div className='header__right-item'>
              <NavLink to='/contact'>_contact</NavLink>
            </div>
          </nav>
        )
      })}
    </div>
  )
}

export default Header
