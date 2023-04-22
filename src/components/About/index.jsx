import React, { useState } from 'react'
import { sections } from '../../../utils/sections'
import { TabItems } from '../../../utils/sections'

const Index = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id)

  // handle tab click
  function handleTabClick(tabId) {
    setActiveTab(tabId)
  }

  return (
    <div className='flex w-full'>
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
      <TabItems activeTab={activeTab} />
    </div>
  )
}

export default Index
