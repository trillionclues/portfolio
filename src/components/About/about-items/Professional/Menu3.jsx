import React from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import folder3 from '/icons/folder3.svg'

const Menu3 = ({ softSkills, item, index }) => {
  return (
    <div className='text-base'>
      {softSkills ? (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowDown />
          <img className='pr-2 pl-2' src={folder3} alt='' />
          <li className='text-sm pl-2' key={index}>
            {item.softSkills.title}
          </li>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center text-center'>
          <MdOutlineKeyboardArrowRight />
          <img className='pr-2 pl-2' src={folder3} alt='' />
          <li className='text-sm pl-2 text-textColor' key={index}>
            {item.softSkills.title}
          </li>
        </div>
      )}
    </div>
  )
}

export default Menu3
