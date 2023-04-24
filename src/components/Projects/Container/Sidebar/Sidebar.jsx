import React from 'react'
import { developer } from '../../../../assets/developer'
import Sidebar_items from './Sidebar_items'
import arrowDown from '/icons/arrow-down.svg'

const Sidebar = () => {
  return (
    <div className='w-full h-full md:border-r md:border-r-outline'>
      <div>
        {developer.map((dev, idx) => {
          const { projects } = dev
          // console.log(projects)
          return (
            <aside key={idx}>
              <div className='aside-item'>
                <div className=' border-b border-b-outline aside-item-input flex flex-row justify-start items-center py-2.5 px-3'>
                  <img src={arrowDown} alt='arrow' />
                  <h4 className='pl-2 text-sm font-normal text-white tracking-wider'>
                    projects
                  </h4>
                </div>

                <div className='aside-item-content'>
                  <ul className='pl-3 pt-3'>
                    {projects.map((project, idx) => {
                      console.log(project)
                      return (
                        <div key={idx} className='flex flex-col'>
                          <Sidebar_items project={project} idx={idx} />
                        </div>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
