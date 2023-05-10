import React from 'react'
import { developer } from '../../../assets/developer'
import phoneImg from '/icons/phone.svg'
import emailImg from '/icons/email.svg'

const Contact = () => {
  return (
    <div className='border-t border-t-outline hidden md:block'>
      {developer.map((item, index) => {
        const { contact } = item
        // console.log(contact[0].contacts)
        return (
          <div key={index}>
            <div className='flex flex-row items-center justify-start px-2 border-b border-b-outline py-1.5'>
              <img src={contact[0].contacts.icon} />
              <h3
                className='
                  pl-2 text-base lowercase text-white tracking-wider'
              >
                {contact[0].contacts.title}
              </h3>
            </div>
            <div className='contact-direct-sources text-sm'>
              <div className='flex flex-row justify-start items-center md:px-3 md:py-1.5'>
                <img className='md:pr-3' src={emailImg} alt='email' />
                <p className='text-textColor'>
                  {contact[0].contacts.sources.email}
                </p>
              </div>
              <div className='flex flex-row justify-start items-center md:px-3 md:py-1.5 '>
                <img className='md:pr-3' src={phoneImg} alt='phone' />
                <p className='text-textColor'>
                  {contact[0].contacts.sources.phone}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Contact
