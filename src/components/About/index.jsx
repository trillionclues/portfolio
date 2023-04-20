import React, { useState } from 'react'
import { Info_professional } from './about-items/Info-professional'
import { Info_personal } from './about-items/Info-personal'
import { Info_hobbies } from './about-items/Info-hobbies'
import icon1 from '/icons/info-professional.svg'
import icon2 from '/icons/info-personal.svg'
import icon3 from '/icons/info-hobbies.svg'
import Prof_details from './about-details/Prof_details'
import Pers_details from './about-details/Pers_details'
import Hob_details from './about-details/Hob_details'
import Gist from './Gist'

const sections = [
  {
    id: 1,
    logo: icon1,
    content: <Info_professional />,
    detail: <Prof_details />,
  },
  { id: 2, logo: icon2, content: <Info_personal />, detail: <Pers_details /> },
  { id: 3, logo: icon3, content: <Info_hobbies />, detail: <Hob_details /> },
]

// check for activeTab
function TabItems({ activeTab }) {
  if (activeTab === 1) {
    return (
      <div className='flex md:flex-row flex-col'>
        <Info_professional />
        <Prof_details />
        <Gist />
      </div>
    )
  }
  if (activeTab === 2) {
    return (
      <div className='flex md:flex-row flex-col '>
        <Info_personal />
        <Pers_details />
        <Gist />
      </div>
    )
  }
  if (activeTab === 3) {
    return (
      <div className='flex md:flex-row flex-col '>
        <Info_hobbies />
        <Hob_details />
        <Gist />
      </div>
    )
  }
}

const Index = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id)

  // handle tab click
  function handleTabClick(tabId) {
    setActiveTab(tabId)
  }

  return (
    <div className='flex h-screen'>
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
