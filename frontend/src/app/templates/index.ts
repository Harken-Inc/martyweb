import HightailHome from './HightailHome'
import VertexHome from './VertexHome'
import DefaultHome from './DefaultHome'
import CakewalkHome from './CakewalkHome'
import { ComponentType } from 'react'

export const templates: Record<string, ComponentType> = {
  hightail: HightailHome,
  vertex: VertexHome,
  cakewalk: CakewalkHome,
  default: DefaultHome,
}

export { HightailHome, VertexHome, DefaultHome, CakewalkHome }
