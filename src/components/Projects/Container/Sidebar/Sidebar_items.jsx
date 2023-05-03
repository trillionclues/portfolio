import React from 'react'
import { useGlobalContext } from '../../../../../utils/context'

const Sidebar_items = ({ projects, tech }) => {
  const { handleTechChange, selectedTech } = useGlobalContext()

  return (
    <>
      <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
        <input
          type='checkbox'
          name={tech}
          id={tech}
          value={tech}
          checked={selectedTech === tech}
          onChange={() => handleTechChange({ target: { value: tech } })}
        />
        <label className='flex flex-row' htmlFor={tech}>
          <img src={projects.icon} alt='react icon' />
          <h2 className='pl-2 text-base text-textColor font-normal tracking-wider'>
            {tech}
          </h2>
        </label>
      </li>
    </>
  )
}

export default Sidebar_items
