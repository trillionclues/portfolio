import React from 'react'

const Sidebar_items = ({ project, idx }) => {
  return (
    <>
      <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
        <input type='checkbox' name='react' id='' />
        <img src={project.first.icon} alt='react icon' />
        <h4 className='pl-2 text-base text-textColor font-normal tracking-wider'>
          {project.first.tech[0]}
        </h4>
      </li>
      <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
        <input type='checkbox' name='react' id='' />
        <img src={project.second.icon} alt='react icon' />
        <h4 className='pl-2 text-base text-textColor font-normal tracking-wider'>
          {project.second.tech[0]}
        </h4>
      </li>
      <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
        <input type='checkbox' name='react' id='' />
        <img src={project.third.icon} alt='react icon' />
        <h4 className='pl-2 text-base text-textColor font-normal tracking-wider'>
          {project.third.tech[0]}
        </h4>
      </li>
    </>
  )
}

export default Sidebar_items
