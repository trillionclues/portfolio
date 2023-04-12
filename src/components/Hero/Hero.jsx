import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <section className='flex flex-col mr-12'>
        <div className='justify-centeritems-center mb-11'>
          <p className='text-paraColor text-sm'>Hi all. I am</p>
          <h1 className='text-5xl text-paraColor'>Excel Nwachukwu</h1>
          <p className='text-xl text-devColor'> &gt; Frontend Developer</p>
        </div>
        <div>
          <p className='text-comment text-sm '>
            // complete the game to continue
          </p>
          <p className='text-comment text-sm'>
            // you can also see it on my github page
          </p>
          <p>
            <span className='text-span1 text-sm pr-2'>const</span>
            <span className='text-span2 text-sm pr-2'>githublink</span>
            <span className='text-span4 text-sm pr-2'>=</span>
            <span className='text-span3 text-sm pr-2'>
              "https://github.com/trillionclues/"
            </span>
          </p>
        </div>
      </section>
      <div>Game goes here...</div>
    </div>
  )
}

export default Hero
