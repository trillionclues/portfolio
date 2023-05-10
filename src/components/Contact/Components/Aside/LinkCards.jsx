import React from 'react'
import { Link } from 'react-router-dom'
import linkImg from '/icons/link.svg'

const LinkCards = ({ title, url, toggleLinks, idx }) => {
  // console.log(title)
  return (
    <>
      <Link
        key={idx}
        to={url}
        className='text-textColor hover:text-white text-sm px-5 py-2.5 flex flex-row hidden md:flex'
        target='_blank'
      >
        <img className='pr-2' src={linkImg} alt='arrow side' />
        {title}
      </Link>
      {toggleLinks && (
        <Link
          key={idx}
          to={url}
          className='text-textColor hover:text-white text-sm px-5 py-2.5 md:hidden flex flex-row'
          target='_blank'
        >
          <img className='pr-2' src={linkImg} alt='arrow side' />
          {title}
        </Link>
      )}
    </>
  )
}

export default LinkCards
