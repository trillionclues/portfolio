import { developer } from '../src/assets/developer'

const Item = developer.map((dev) => {
  const { projects } = dev
  return projects
})

export const projects = Item.flat()
