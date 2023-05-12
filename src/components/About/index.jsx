import React, { useState } from 'react'
import { sections } from '../../../utils/sections'
import { TabItems } from '../../../utils/sections'
import MobileIndex from './MobileIndex'

const Index = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id)

  // toggle Tab1 sub menu
  const [toggleExp, setToggleExp] = useState(true)
  const [hardSkills, setHardSkills] = useState(false)
  const [softSkills, setSoftSkills] = useState(false)

  // toggle Tab2 sub menu
  const [toggleBio, setToggleBio] = useState(true)
  const [toggleInt, setToggleInt] = useState(false)
  const [toggleEdu, setToggleEdu] = useState(false)

  // handle tab click
  function handleTabClick(tabId) {
    setActiveTab(tabId)
  }

  return (
    <>
      <div className='hidden md:flex w-full'>
        <div className='border-r border-r-outline cursor-pointer hidden md:py-3 md:block md:px-3'>
          {sections.map((tab) => (
            <div
              key={tab.id}
              className={`w-[3rem] ${tab.id === activeTab ? 'active' : ''}`}
              style={{
                filter: `${
                  tab.id === activeTab ? 'invert(1) grayscale(100%)' : ''
                }`,
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className='p-2 py-3'>
                <img
                  src={tab.logo}
                  alt='tab icon'
                  className='hover:scale-110 transition-all duration-300 filter invert brightness-200'
                  style={{
                    filter:
                      'sepia(1) hue-rotate(1600deg) brightness(0.5) saturate(4)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = 'grayscale(100%)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                      'sepia(1) hue-rotate(1600deg) brightness(0.5) saturate(4)')
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <TabItems
          activeTab={activeTab}
          // professional about states
          toggleExp={toggleExp}
          setToggleExp={setToggleExp}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
          // personal about states
          toggleBio={toggleBio}
          setToggleBio={setToggleBio}
          toggleInt={toggleInt}
          setToggleInt={setToggleInt}
          toggleEdu={toggleEdu}
          setToggleEdu={setToggleEdu}
        />
      </div>

      {/* mobile */}
      <div className='h-full'>
        <MobileIndex
          toggleExp={toggleExp}
          setToggleExp={setToggleExp}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
          // personal about states
          toggleBio={toggleBio}
          setToggleBio={setToggleBio}
          toggleInt={toggleInt}
          setToggleInt={setToggleInt}
          toggleEdu={toggleEdu}
          setToggleEdu={setToggleEdu}
        />
      </div>
    </>
  )
}

export default Index
