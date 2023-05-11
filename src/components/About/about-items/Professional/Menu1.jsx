import React from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder1 from '/icons/folder1.svg'

const Menu = ({ toggleExp, item, index }) => {
  return (
    <div className='text-base'>
      {toggleExp ? (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowDown />
          <img className='pr-2 pl-2' src={folder1} alt='' />
          <li className='text-sm pl-2' key={index}>
            {item.experience.title}
          </li>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowRight />
          <img className='pr-2 pl-2' src={folder1} alt='' />
          <li className='text-sm pl-2 text-textColor' key={index}>
            {item.experience.title}
          </li>
        </div>
      )}
    </div>
  )
}

export default Menu
