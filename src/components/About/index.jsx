import React, { useState } from 'react'
import { sections } from '../../../utils/sections'
import { TabItems } from '../../../utils/sections'
import Hob_details from './about-details/Hob_details'
import Pers_details from './about-details/Pers_details'
import Prof_details from './about-details/Prof_details'
import { Info_hobbies } from './about-items/Info-hobbies'
import { Info_personal } from './about-items/Info-personal'
import { Info_professional } from './about-items/Info-professional'
import Gist from './Gist'

const Index = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id)

  // mobile toggle states
  const [mobilePro, setMobilePro] = useState(false)
  const [mobilePers, setMobilePers] = useState(false)
  const [mobileHob, setMobileHob] = useState(false)

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
        <TabItems activeTab={activeTab} />
      </div>

      <div className='flex md:flex-row flex-col '>
        <Info_professional mobilePro={mobilePro} setMobilePro={setMobilePro} />
        <Prof_details mobilePro={mobilePro} />
      </div>
      <div className='flex md:flex-row flex-col '>
        <Info_personal mobilePers={mobilePers} setMobilePers={setMobilePers} />
        <Pers_details mobilePers={mobilePers} />
      </div>
      <div className='flex md:flex-row flex-col '>
        <Info_hobbies mobileHob={mobileHob} setMobileHob={setMobileHob} />
        <Hob_details mobileHob={mobileHob} />
      </div>
    </>
  )
}

export default Index
