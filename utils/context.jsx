import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { projects } from './projects'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedTech, setSelectedTech] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])

  // load projects into state
  useEffect(() => {
    setAllProjects(projects)
    setFilteredProjects(projects)
  }, [projects])

  // update filtered project when selectedTech changes
  useEffect(() => {
    if (selectedTech === 'all') {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(
        allProjects.filter((project) => {
          return project.tech.includes(selectedTech)
        })
      )
    }
  }, [selectedTech, allProjects])

  // update selectedTech state if match
  const handleTechChange = useCallback((e) => {
    const tech = e.target.value
    setSelectedTech((prevSelectedTech) =>
      prevSelectedTech === tech ? 'all' : tech
    )
  }, [])

  // handle checbox project filter
  // const handleTechChange = useCallback(
  //   (e) => {
  //     const tech = e.target.value
  //     setSelectedTech((prevSelectedTech) =>
  //       prevSelectedTech === tech ? 'all' : tech
  //     )

  //     if (tech === 'all') {
  //       setFilteredProjects(allProjects)
  //     } else {
  //       setFilteredProjects(
  //         allProjects.filter((project) => {
  //           return project.tech.includes(tech)
  //         })
  //       )
  //     }
  //   },
  //   [projects, allProjects]
  // )

  return (
    <AppContext.Provider
      value={{ handleTechChange, filteredProjects, selectedTech }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
