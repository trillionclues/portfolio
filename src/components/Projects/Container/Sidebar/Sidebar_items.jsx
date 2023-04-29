import React from 'react'

const Sidebar_items = ({ project }) => {
  return (
    <>
      {project ? (
        <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
          <input type='checkbox' name='' id='' />
          <img src={project.icon} alt='react icon' />
          <h4 className='pl-2 text-base text-textColor font-normal tracking-wider'>
            {project.tech[0]}
          </h4>
        </li>
      ) : (
        <h2>Oops😬! Refresh page</h2>
      )}
    </>
  )
}

export default Sidebar_items
