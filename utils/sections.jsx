import { Info_personal } from '../src/components/About/about-items/Info-personal'
import { Info_professional } from '../src/components/About/about-items/Info-professional'
import { Info_hobbies } from '../src/components/About/about-items/Info-hobbies'
import Pers_details from '../src/components/About/about-details/Pers_details'
import Prof_details from '../src/components/About/about-details/Prof_details'
import Hob_details from '../src/components/About/about-details/Hob_details'

// tab1 submenu
import { Experience } from '../src/components/About/about-details/ProfSubMenu/Experience'
import { HardSkills } from '../src/components/About/about-details/ProfSubMenu/HardSkills'
import { SoftSkills } from '../src/components/About/about-details/ProfSubMenu/SoftSkills'

// tab2 submenu
import { Bio } from '../src/components/About/about-details/PersSubMenu/Bio'
import { Interests } from '../src/components/About/about-details/PersSubMenu/Interests'
import { Education } from '../src/components/About/about-details/PersSubMenu/Education'

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

  // tab1 toggle
  toggleExp,
  setToggleExp,
  hardSkills,
  setHardSkills,
  softSkills,
  setSoftSkills,

  // tab2 toggle
  toggleBio,
  setToggleBio,
  toggleInt,
  setToggleInt,
  toggleEdu,
  setToggleEdu,
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
        <Info_personal
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
