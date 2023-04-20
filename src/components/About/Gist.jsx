import React, { useState, useEffect } from 'react'
import { fetchGists } from '../../../utils/github-api'
const Gist = () => {
  const [gistData, setGistData] = useState(
    JSON.parse(localStorage.getItem('gistData')) || []
  )
  // useEffect(() => {
  //   fetchGists().then((data) => {
  //     setGistData(data)
  //     localStorage.setItem('gistData', JSON.stringify(data))
  //   })
  // }, [])

  console.log(gistData)

  return (
    <h2 className='md:w-full md:max-w-md bg-black pr-12 px-2'>
      {gistData[0].description}
    </h2>
  )
}

export default Gist
