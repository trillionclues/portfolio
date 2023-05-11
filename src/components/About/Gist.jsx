import React, { useState, useEffect } from 'react'
import { fetchGists } from '../../../utils/github-api'
import Gist_header from './Gists_content/Gist_header'
import Gist_content from './Gists_content/Gist_content'

const Gist = () => {
  const [gistData, setGistData] = useState([])
  const [isLoading, setIsLoding] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGists()
      setGistData(data)
      setIsLoding(false)
    }
    fetchData()
  }, [])
  // console.log(gistData)

  return (
    <section className='md:w-5/12 overflow-y-scroll h-full overflow-clip flex pr-1 pl-1 md:pl-0 md:pr-12 px-0 md:px-2 mt-[2rem] border-t-outline w-full justify-center'>
      <div className='flex flex-col px-3 w-full md:w-auto'>
        <p className='text-white md:text-textColor text-base pb-5 md:pb-0'>
          {' '}
          // Code snippet showcase:
        </p>
        <div className='flex flex-col py-0 md:py-3 w-full'>
          {gistData.map((gist, idx) => {
            // console.log(gist)
            return (
              <section key={idx}>
                <Gist_header gist={gist} />

                <Gist_content gist={gist} isLoading={isLoading} />
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gist
