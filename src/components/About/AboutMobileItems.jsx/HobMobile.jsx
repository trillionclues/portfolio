import React from 'react'
import Hob_details from '../about-details/Hob_details'
import { Info_hobbies } from '../about-items/Info-hobbies'

const HobMobile = ({
  mobileHob,
  setMobileHob,
  setMobilePro,
  setMobilePers,
}) => {
  return (
    <>
      <div className='flex md:hidden flex-col '>
        <Info_hobbies
          mobileHob={mobileHob}
          setMobileHob={setMobileHob}
          setMobilePro={setMobilePro}
          setMobilePers={setMobilePers}
        />
        <Hob_details mobileHob={mobileHob} />
      </div>
    </>
  )
}

export default HobMobile
