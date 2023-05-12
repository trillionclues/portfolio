import React from 'react'
import Pers_details from '../about-details/Pers_details'
import { Info_personal } from '../about-items/Info-personal'
import { Bio } from '../about-details/PersSubMenu/Bio'
import { Interests } from '../about-details/PersSubMenu/Interests'
import { Education } from '../about-details/PersSubMenu/Education'

const PersMobile = ({
  mobilePers,
  setMobilePers,
  setMobileHob,
  setMobilePro,
  toggleBio,
  setToggleBio,
  toggleInt,
  setToggleInt,
  toggleEdu,
  setToggleEdu,
}) => {
  return (
    <>
      <div className='flex md:hidden flex-col '>
        <Info_personal
          mobilePers={mobilePers}
          setMobilePers={setMobilePers}
          setMobileHob={setMobileHob}
          setMobilePro={setMobilePro}
          toggleBio={toggleBio}
          setToggleBio={setToggleBio}
          toggleInt={toggleInt}
          setToggleInt={setToggleInt}
          toggleEdu={toggleEdu}
          setToggleEdu={setToggleEdu}
        />

        {/* mobile toggle */}
        {toggleBio && <Bio toggleExp={toggleBio} />}
        {toggleInt && <Interests hardSkills={toggleInt} />}
        {toggleEdu && <Education softSkills={toggleEdu} />}
      </div>
    </>
  )
}

export default PersMobile
