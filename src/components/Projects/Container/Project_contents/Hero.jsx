import React from 'react'
import { developer } from '../../../../assets/developer'
import Card from './Card'

const Hero = () => {
  return (
    <section className='w-11/12 flex items-start justify-center mb-10'>
      {developer.map((dev, index) => {
        const { projects } = dev
        return (
          <div key={index} className=''>
            {projects.map((project, idx) => {
              return (
                <div
                  key={idx}
                  className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                >
                  <Card
                    title={project.first.title}
                    imageSrc={project.first.img}
                    description={project.first.description}
                    projecturl={project.first.url}
                  />
                  <Card
                    title={project.second.title}
                    imageSrc={project.second.img}
                    description={project.second.description}
                    projecturl={project.second.url}
                  />
                  <Card
                    title={project.third.title}
                    imageSrc={project.third.img}
                    description={project.third.description}
                    projecturl={project.third.url}
                  />
                  <Card
                    title={project.third.title}
                    imageSrc={project.third.img}
                    description={project.third.description}
                    projecturl={project.third.url}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}

export default Hero
