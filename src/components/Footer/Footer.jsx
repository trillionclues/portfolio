import React from 'react'
import { developer } from '../../assets/developer'

const Footer = () => {
  return (
    <div className='w-full sticky top-[100vh] h-12 bg-nav border-t border-t-outline border-t-2 border-rounded-md'>
      {developer.map((items) => {
        return items.contact.map((item) => {
          return item.social.map((link, index) => {
            const { github, twitter, linkedin } = link
            return (
              <nav className='flex justify-center items-center p-0' key={index}>
                <ul className='flex items-center list-none p-0 m-0 text-md text-textColor  items-center'>
                  <h4>find me in:</h4>
                  <li className='no-underline border-r border-r-outline  py-3 px-5 cursor-pointer  hover:text-slate-200'>
                    <a href={github.url} target='_blank'>
                      {github.icon}
                    </a>
                  </li>
                  <li className='no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200'>
                    <a href={twitter.url} target='_blank'>
                      {twitter.icon}
                    </a>
                  </li>
                  <li className='no-underline border-r border-r-outline py-3 px-5 cursor-pointer hover:text-slate-200'>
                    <a href={linkedin.url} target='_blank'>
                      {linkedin.icon}
                    </a>
                  </li>
                </ul>
              </nav>
            )
          })
        })
      })}
    </div>
  )
}

export default Footer
