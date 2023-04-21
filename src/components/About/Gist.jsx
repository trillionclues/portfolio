import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../../routes/Loading'
import CommentImg from '/icons/gist/comments.svg'
import starImg from '/icons/gist/star.svg'

const Gist = () => {
  const [gistData, setGistData] = useState([])
  const [Isloading, setIsLoding] = useState(false)

  const fetchGists = async () => {
    const response = await axios(
      'https://api.github.com/users/trillionclues/gists'
    )

    // create an array of Promises
    const promises = response.data.map(async (gist) => {
      const res = await axios(gist.url)
      return res.data
    })

    // wait for promises to resolve
    const data = await Promise.all(promises)
    setGistData(data)
    setIsLoding(true)
  }

  useEffect(() => {
    fetchGists()
  }, [])
  // console.log(gistData)

  return (
    <section className='w-5/12 h-full overflow-clip flex pr-12 px-2 mt-[2rem] border-t-outline'>
      <div className='flex flex-col px-3'>
        <p className='text-textColor text-base'> // Code snippet showcase:</p>
        <div className='flex flex-col py-3'>
          {gistData.map((gist, idx) => {
            console.log(gist)
            return (
              <section key={idx}>
                <div className='flex flex-row justify-between pb-4'>
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
                    <p className='text-textColor text-sm pl-4'>
                      <span className='flex flex-row cursor-pointer'>
                        <img src={starImg} alt='starred' />
                        <span>starred</span>
                      </span>
                    </p>
                  </div>
                </div>

                <section className='flex flex-col'>
                  {!Isloading ? (
                    <Loading />
                  ) : (
                    <div className=' flex flex-row justify-between items-center pb-6 code-block'>
                      {gist.files &&
                        Object.entries(gist.files).map(
                          ([fileName, fileData]) => (
                            <div
                              key={fileName}
                              className='rounded-lg overflow-clip w-300px bg-[#010c15] md:w-[420px] xl:w-[380px] oxl:w-[425px]'
                            >
                              <a href={fileData.raw_url} target='_blank'>
                                <p className='bg-textColor cursor-pointer text-[#010c15] px-4 py-2 text-sm font-bold'>
                                  {fileName}
                                </p>
                              </a>
                              <div className='bg-#010c15 px-4 py-2 text-sm font-bold'>
                                <pre className='text-textColor text-sm font-bold'>
                                  <code className='language-javascript text-textColor text-sm font-bold'>
                                    {fileData.content}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  )}
                </section>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gist
