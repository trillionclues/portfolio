import React, { createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedTech, setSelectedTech] = useState('all')

  const handleTechChange = (e) => {
    setSelectedTech(e.target.value)
  }

  // filter selected tech
  const filterProjects =
    selectedTech === 'all'
      ? projects
      : projects.filter((project) => project.tech[0] === selectedTech)

  return (
    <AppContext.Provider value={{ handleTechChange, filterProjects }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
