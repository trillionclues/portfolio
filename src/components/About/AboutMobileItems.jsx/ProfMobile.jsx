import React, { useState } from 'react'
import Prof_details from '../about-details/Prof_details'
import { Info_professional } from '../about-items/Info-professional'
import { Experience } from '../about-details/ProfSubMenu/Experience'
import { HardSkills } from '../about-details/ProfSubMenu/HardSkills'
import { SoftSkills } from '../about-details/ProfSubMenu/SoftSkills'

const ProfMobile = ({
  mobilePro,
  setMobilePro,
  setMobileHob,
  setMobilePers,
  toggleExp,
  setToggleExp,
  hardSkills,
  setHardSkills,
  softSkills,
  setSoftSkills,
}) => {
  return (
    <>
      <div className='flex md:hidden flex-col h-full'>
        <Info_professional
          mobilePro={mobilePro}
          setMobilePro={setMobilePro}
          setMobileHob={setMobileHob}
          setMobilePers={setMobilePers}
          toggleExp={toggleExp}
          setToggleExp={setToggleExp}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
        />

        {/* mobile toggle */}
        {toggleExp && <Experience toggleExp={toggleExp} />}
        {hardSkills && <HardSkills hardSkills={hardSkills} />}
        {softSkills && <SoftSkills softSkills={softSkills} />}
      </div>
    </>
  )
}

export default ProfMobile
