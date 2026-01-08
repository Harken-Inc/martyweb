import HightailHome from './HightailHome'
import VertexHome from './VertexHome'
import DefaultHome from './DefaultHome'
import { ComponentType } from 'react'

export const templates: Record<string, ComponentType> = {
  hightail: HightailHome,
  vertex: VertexHome,
  default: DefaultHome,
}

export { HightailHome, VertexHome, DefaultHome }
