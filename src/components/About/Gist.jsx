import React, { useState, useEffect } from 'react'
import { fetchGists } from '../../../utils/github-api'
import Gist_header from './Gists_content/Gist_header'
import Gist_content from './Gists_content/Gist_content'

const Gist = () => {
  const [gistData, setGistData] = useState([])
  const [isLoading, setIsLoding] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGists()
      setGistData(data)
      setIsLoding(true)
    }
    fetchData()
  }, [])
  // console.log(gistData)

  return (
    <section className='w-5/12 overflow-y-scroll h-full overflow-clip flex pr-12 px-2 mt-[2rem] border-t-outline'>
      <div className='flex flex-col px-3'>
        <p className='text-textColor text-base'> // Code snippet showcase:</p>
        <div className='flex flex-col py-3'>
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
