import React, { useState } from 'react'

const Sidebar_items = ({ projects }) => {
  const [selectedTech, setSelectedTech] = useState('all')

  // handle card tech render
  const handleTechChange = (e) => {
    setSelectedTech(e.target.value)
  }

  // filter selected tech
  const filterProjects =
    selectedTech === 'all'
      ? projects
      : projects.filter((project) => project.tech[0] === selectedTech)

  // const filterProjects =
  //   selectedTech === 'all'
  //     ? projects
  //     : projects.filter((project) => project.tech.includes(selectedTech))

  console.log(filterProjects)

  return (
    <>
      {filterProjects ? (
        <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
          <input
            type='checkbox'
            onChange={handleTechChange}
            value={selectedTech}
            id=''
            // checked={selectedTech === filterProjects.tech[0]}
          />
          <img src={filterProjects.icon} alt='react icon' />
          <h2 className='pl-2 text-base text-textColor font-normal tracking-wider'>
            {filterProjects.tech[0]}
          </h2>
        </li>
      ) : (
        <h2>Oops😬! Refresh page</h2>
      )}
      {/* {project ? (
        <li className='flex justify-start gap-3 items-center py-2.5 px-3'>
          <input
            type='checkbox'
            onChange={handleTechChange}
            value={selectedTech}
            id=''
          />
          <img src={project.icon} alt='react icon' />
          <option className='pl-2 text-base text-textColor font-normal tracking-wider'>
            {project.tech[0]}
          </option>
        </li>
      ) : (
        <h2>Oops😬! Refresh page</h2>
      )} */}
    </>
  )
}

export default Sidebar_items
