import React, { useState } from 'react'
import ProfMobile from './AboutMobileItems.jsx/ProfMobile'
import PersMobile from './AboutMobileItems.jsx/PersMobile'
import HobMobile from './AboutMobileItems.jsx/HobMobile'

const MobileIndex = ({
  toggleExp,
  setToggleExp,
  hardSkills,
  setHardSkills,
  softSkills,
  setSoftSkills,

  // tab2 mobile
  toggleBio,
  setToggleBio,
  toggleInt,
  setToggleInt,
  toggleEdu,
  setToggleEdu,
}) => {
  // mobile toggle states
  const [mobilePro, setMobilePro] = useState(true)
  const [mobilePers, setMobilePers] = useState(false)
  const [mobileHob, setMobileHob] = useState(false)
  return (
    <>
      <h1 className='md:hidden block py-5 px-5 text-base'>_about-me</h1>
      <ProfMobile
        mobilePro={mobilePro}
        setMobilePro={setMobilePro}
        setMobilePers={setMobilePers}
        setMobileHob={setMobileHob}
        toggleExp={toggleExp}
        setToggleExp={setToggleExp}
        hardSkills={hardSkills}
        setHardSkills={setHardSkills}
        softSkills={softSkills}
        setSoftSkills={setSoftSkills}
      />
      <PersMobile
        mobilePers={mobilePers}
        setMobilePers={setMobilePers}
        setMobilePro={setMobilePro}
        setMobileHob={setMobileHob}
        toggleBio={toggleBio}
        setToggleBio={setToggleBio}
        toggleInt={toggleInt}
        setToggleInt={setToggleInt}
        toggleEdu={toggleEdu}
        setToggleEdu={setToggleEdu}
      />
      <HobMobile
        mobileHob={mobileHob}
        setMobileHob={setMobileHob}
        setMobilePers={setMobilePers}
        setMobilePro={setMobilePro}
      />
    </>
  )
}

export default MobileIndex
