import { Info_personal } from '../src/components/About/about-items/Info-personal'
import { Info_professional } from '../src/components/About/about-items/Info-professional'
import { Info_hobbies } from '../src/components/About/about-items/Info-hobbies'
import Pers_details from '../src/components/About/about-details/Pers_details'
import Prof_details from '../src/components/About/about-details/Prof_details'
import Hob_details from '../src/components/About/about-details/Hob_details'
import { Experience } from '../src/components/About/about-details/ProfSubMenu/Experience'
import { HardSkills } from '../src/components/About/about-details/ProfSubMenu/HardSkills'
import { SoftSkills } from '../src/components/About/about-details/ProfSubMenu/SoftSkills'
import Gist from '../src/components/About/Gist'

// icons
import icon1 from '/icons/info-professional.svg'
import icon2 from '/icons/info-personal.svg'
import icon3 from '/icons/info-hobbies.svg'

export const sections = [
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
export function TabItems({
  activeTab,
  toggleExp,
  setToggleExp,
  hardSkills,
  setHardSkills,
  softSkills,
  setSoftSkills,
}) {
  if (activeTab === 1) {
    return (
      <div className='flex md:flex-row flex-col'>
        <Info_professional
          toggleExp={toggleExp}
          setToggleExp={setToggleExp}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
        />
        {/* <Prof_details /> */}
        {/* desktop toggle */}
        {toggleExp && <Experience toggleExp={toggleExp} />}
        {hardSkills && <HardSkills hardSkills={hardSkills} />}
        {softSkills && <SoftSkills softSkills={softSkills} />}

        <Gist />
      </div>
    )
  }
  if (activeTab === 2) {
    return (
      <div className='flex md:flex-row flex-col relative'>
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
