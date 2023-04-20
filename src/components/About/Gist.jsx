import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CommentImg from '/icons/gist/comments.svg'
import starImg from '/icons/gist/star.svg'

const Gist = () => {
  const [gistData, setGistData] = useState([])

  const fetchGists = async () => {
    const response = await axios(
      'https://api.github.com/users/trillionclues/gists'
    )
    setGistData(response.data)
  }

  useEffect(() => {
    fetchGists()
  }, [])
  console.log(gistData)

  return (
    <section className='w-5/12 flex pr-12 px-2 border-t mt-[2.2rem] border-t-outline'>
      <div className='flex flex-col pt-8 px-3'>
        <p className='text-textColor text-base'> // Code snippet showcase:</p>
        <div className='flex flex-col py-3'>
          {gistData.map((gist) => {
            return (
              <div className='flex flex-row justify-between pb-6'>
                <div className='flex flex-row'>
                  <img
                    src={gist.owner.avatar_url}
                    alt='avatar'
                    className='w-8 h-8 rounded-full'
                  />
                  <div className='flex flex-col pl-2'>
                    <p className='text-textColor text-sm'>
                      <a href={gist.url}>@{gist.owner.login}</a>
                    </p>
                    <p className='text-textColor text-sm'>Created at</p>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <p className='text-textColor text-sm pl-12'>
                    <span className='flex flex-row cursor-pointer'>
                      <img className='pr-2' src={CommentImg} alt='comments' />
                      <span>details</span>
                    </span>
                  </p>
                </div>
                <p className='text-textColor text-sm pl-12'>
                  <span className='flex flex-row cursor-pointer'>
                    <img src={starImg} alt='starred' />
                    <span>stars</span>
                  </span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gist
