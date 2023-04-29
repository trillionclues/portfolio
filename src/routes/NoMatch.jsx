import React from 'react'

const NoMatch = () => {
  return (
    <div className='h-screen w-full error-container'>
      <div class='error'>404</div>
      <br />
      <br />
      <div className='info'>
        <p>Looks like you got lost here...</p>
        <button
          className='bg-textColor hover:bg-blue-700 text-white font-bold text-xl px-8 py-0 rounded
          transition duration-200 ease-in-out'
        >
          <a href='/'>Go home</a>
        </button>
      </div>
    </div>
  )
}

export default NoMatch
