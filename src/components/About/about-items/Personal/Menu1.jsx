import React from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder1 from '/icons/folder1.svg'

const Menu1 = ({ toggleBio, index, item }) => {
  return (
    <div className='text-base'>
      {toggleBio ? (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowDown />
          <img className='pr-2 pl-2' src={folder1} alt='' />
          <li className='text-sm pl-2 text-textColor' key={index}>
            {item.bio.title}
          </li>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowRight />
          <img className='pr-2 pl-2' src={folder1} alt='' />
          <li className='text-sm pl-2' key={index}>
            {item.bio.title}
          </li>
        </div>
      )}
    </div>
  )
}

export default Menu1
