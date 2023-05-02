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
  const [getProjectItem, setGetProjectItem] = useState([])

  useEffect(() => {
    setFilteredProjects(projects)
  }, [projects])

  const handleTechChange = useCallback(
    (e) => {
      const tech = e.target.value
      setSelectedTech(tech)

      setFilteredProjects(
        projects.filter((project) => {
          if (selectedTech === 'all') {
            return project
          } else {
            return project.tech.includes(selectedTech)
          }
        })
      )
    },
    [filteredProjects, projects]
  )

  return (
    <AppContext.Provider
      value={{ handleTechChange, filteredProjects, selectedTech }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
