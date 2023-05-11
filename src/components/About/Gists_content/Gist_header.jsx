import React from 'react'
import CommentImg from '/icons/gist/comments.svg'
import starImg from '/icons/gist/star.svg'

const Gist_header = ({ gist }) => {
  return (
    <div className='flex flex-row justify-between pb-4'>
      <div className='flex flex-row'>
        <img
          src={gist.owner.avatar_url}
          alt='avatar'
          className='w-8 h-8 rounded-full'
        />
        <div className='flex flex-col pl-2'>
          <p className='md:text-textColor text-span3 text-sm'>
            <a href={gist.url}>@{gist.owner.login}</a>
          </p>
          <p className='text-textColor text-sm'>Created at</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <p className='text-textColor text-sm'>
          <span className='flex flex-row cursor-pointer'>
            <img className='pr-2' src={CommentImg} alt='comments' />
            <span>details</span>
          </span>
        </p>
        <p className='text-textColor text-sm pl-3 md:inline-block hidden'>
          <span className='flex flex-row cursor-pointer'>
            <img src={starImg} alt='starred' />
            <span>starred</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Gist_header
