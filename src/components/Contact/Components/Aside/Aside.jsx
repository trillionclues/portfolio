import React, { useState } from 'react'
import { developer } from '../../../../assets/developer'
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'
import phoneImg from '/icons/phone.svg'
import emailImg from '/icons/email.svg'
import LinkCards from './LinkCards'
import Contacts from './Sidebar1/Contacts'

const Aside = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [toggleLinks, setToggleLinks] = useState(false)

  return (
    <div className='h-full'>
      <aside>
        {developer.map((item, index) => {
          const { contact } = item
          return (
            <div key={index}>
              {contact.map((items, idx) => {
                const { contacts } = items
                return (
                  <>
                    <Contacts
                      key={idx}
                      {...contacts}
                      toggleSidebar={toggleSidebar}
                      setToggleSidebar={setToggleSidebar}
                    />

                    <div className='contact-info px-5 py-3 flex flex-col gap-3'>
                      <div className='flex flex-row'>
                        <img className='pr-2' src={emailImg} alt='arrow side' />
                        <p className='text-textColor text-sm'>
                          {contacts.sources.email}
                        </p>
                      </div>
                      <div className='flex flex-row'>
                        <img className='pr-2' src={phoneImg} alt='arrow side' />
                        <p className='text-textColor text-sm'>
                          {contacts.sources.phone}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })}

              <div className='find-me-in'>
                {contact.map((find, idx) => {
                  const { findMeIn } = find
                  return (
                    <div key={idx} className='pt-5'>
                      <div className='px-5 py-2.5 flex flex-row border-y border-t-outline'>
                        <img
                          className='pr-2 md:inline-block hidden'
                          src={arrowDown}
                          alt='arrow down'
                        />

                        {/* <button className='md:hidden inline-block flex flex-row justify-center items-center bg-black'>
                          {toggleLinks ? (
                            <img
                              className='pr-2 inline-block'
                              src={arrowSide}
                              alt='arrow down'
                            />
                          ) : (
                            <img
                              className='pr-2 inline-block'
                              src={arrowDown}
                              alt='arrow side'
                            />
                          )}
                          <h1 className='lowercase text-sm'>
                            {findMeIn[0].title}
                          </h1>
                        </button> */}

                        <h1 className='lowercase text-sm hidden md:inline-block'>
                          {findMeIn[0].title}
                        </h1>
                      </div>
                      <div className='link-socials pt-3'>
                        {findMeIn.map((links, index) => {
                          const { sources } = links
                          return (
                            <div key={index}>
                              {sources.map((link, idx) => {
                                return <LinkCards key={idx} {...link} />
                              })}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </aside>
    </div>
  )
}

export default Aside
