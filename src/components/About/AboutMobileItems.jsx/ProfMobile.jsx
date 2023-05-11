import React from 'react'
import Prof_details from '../about-details/Prof_details'
import { Info_professional } from '../about-items/Info-professional'

const ProfMobile = ({
  mobilePro,
  setMobilePro,
  setMobileHob,
  setMobilePers,
}) => {
  return (
    <>
      <div className='flex md:hidden flex-col h-full'>
        <Info_professional
          mobilePro={mobilePro}
          setMobilePro={setMobilePro}
          setMobileHob={setMobileHob}
          setMobilePers={setMobilePers}
        />
        <Prof_details mobilePro={mobilePro} />
      </div>
    </>
  )
}

export default ProfMobile
