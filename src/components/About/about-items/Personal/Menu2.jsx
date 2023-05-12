import React from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder2 from '/icons/folder2.svg'

const Menu2 = ({ toggleInt, index, item }) => {
  return (
    <div className='flex cursor-pointer text-center text-sm lowercase items-center py-2 px-2'>
      {toggleInt ? (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowDown />
          <img className='pr-2 pl-2' src={folder2} alt='' />
          <li className='text-sm pl-2 text-textColor' key={index}>
            {item.interests.title}
          </li>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowRight />
          <img className='pr-2 pl-2' src={folder2} alt='' />
          <li className='text-sm pl-2' key={index}>
            {item.interests.title}
          </li>
        </div>
      )}
    </div>
  )
}

export default Menu2
