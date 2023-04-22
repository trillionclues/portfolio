import React from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder2 from '/icons/folder2.svg'

const Menu2 = ({ favorite, item, index }) => {
  return (
    <div className='text-base'>
      {favorite ? (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowRight />
          <img className='pr-2 pl-2' src={folder2} alt='' />
          <li className='text-sm pl-2 text-textColor' key={index}>
            {item.favGames.title}
          </li>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowDown />
          <img className='pr-2 pl-2' src={folder2} alt='' />
          <li className='text-sm pl-2' key={index}>
            {item.favGames.title}
          </li>
        </div>
      )}
    </div>
  )
}

export default Menu2
