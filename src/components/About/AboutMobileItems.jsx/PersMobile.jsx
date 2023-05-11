import React from 'react'
import Pers_details from '../about-details/Pers_details'
import { Info_personal } from '../about-items/Info-personal'

const PersMobile = ({
  mobilePers,
  setMobilePers,
  setMobileHob,
  setMobilePro,
}) => {
  return (
    <>
      <div className='flex md:hidden flex-col '>
        <Info_personal
          mobilePers={mobilePers}
          setMobilePers={setMobilePers}
          setMobileHob={setMobileHob}
          setMobilePro={setMobilePro}
        />
        <Pers_details mobilePers={mobilePers} />
      </div>
    </>
  )
}

export default PersMobile
