import React, { useState } from 'react'
import Input from './Hero/Input'
import DisplayText from './Hero/DisplayText'
import { FaTimes } from 'react-icons/fa'

const Hero = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='h-full'>
      <div className='border-0 md:border-b border-b-outline pl-5 py-3 hidden md:flex flex-row items-center text-textColor text-sm'>
        <h1 className='tracking-wider pr-5'>contact</h1>
        <FaTimes className='text-base cursor-pointer' />
      </div>

      <div className='h-[92%] grid md:grid-cols-2 grid-cols-1'>
        <div className='col-span-1 border-0 md:border-r border-r-outline pt-5'>
          <Input
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleMessageChange={handleMessageChange}
            setNname={setName}
            setEmail={setEmail}
            setMessage={setMessage}
          />
        </div>
        <div className='col-span-1 bg-grey-400 pt-10 md:block hidden'>
          <DisplayText name={name} email={email} message={message} />
        </div>
      </div>
    </div>
  )
}

export default Hero
