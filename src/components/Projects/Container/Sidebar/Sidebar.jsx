import React, { useState } from 'react'
import { projects } from '../../../../../utils/projects'
import Sidebar_items from './Sidebar_items'
import arrowDown from '/icons/arrow-down.svg'
import arrowSide from '/icons/arrow.svg'

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div className='w-full h-full md:border-r md:border-r-outline'>
      <div>
        <aside>
          <h1 className='w-full py-2.5 px-3 block md:hidden text-base'>
            _projects
          </h1>
          <div className='aside-item bg-outline md:bg-primary '>
            <div className='border-0 md:border-b border-b-outline aside-item-input flex flex-row justify-start items-center md:py-2.5 py-2.5 px-3 pb-0'>
              <img
                src={arrowDown}
                className='hidden md:inline-block'
                alt='arrow'
              />

              <button
                className='md:hidden inline-block flex flex-row justify-start items-center pb-3'
                onClick={() => setToggleSidebar(!toggleSidebar)}
                aria-label='toggle-sidebar'
              >
                {toggleSidebar ? (
                  <img src={arrowDown} className='inline-block' alt='arrow' />
                ) : (
                  <img src={arrowSide} className='inline-block' alt='arrow' />
                )}
                <h4 className='pl-2 text-sm font-normal text-white tracking-wider'>
                  projects
                </h4>
              </button>
              <h4 className='hidden md:inline-block pl-2 text-base md:text-sm font-normal text-white tracking-wider'>
                projects
              </h4>
            </div>

            <div className='aside-item-content bg-primary'>
              <ul className='pl-3 pt-3'>
                {projects.map((project, idx) => {
                  // console.log(project)
                  return (
                    <>
                      <div className='flex flex-col hidden md:block'>
                        <Sidebar_items
                          projects={project}
                          tech={project.tech[0]}
                          key={idx}
                        />
                      </div>
                      {toggleSidebar && (
                        <div className='flex flex-col inline-block md:hidden'>
                          <Sidebar_items
                            projects={project}
                            tech={project.tech[0]}
                            key={idx}
                          />
                        </div>
                      )}
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Sidebar
