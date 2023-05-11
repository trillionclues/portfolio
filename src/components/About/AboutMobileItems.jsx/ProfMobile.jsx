import React, { useState } from 'react'
import Prof_details from '../about-details/Prof_details'
import { Info_professional } from '../about-items/Info-professional'

const ProfMobile = ({
  mobilePro,
  setMobilePro,
  setMobileHob,
  setMobilePers,
}) => {
  // toggle sub menu
  const [toggleExp, setToggleExp] = useState(false)
  const [hardSkills, setHardSkills] = useState(false)
  const [softSkills, setSoftSkills] = useState(false)

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
        <Prof_details toggleExp={toggleExp} />
      </div>
    </>
  )
}

export default ProfMobile
