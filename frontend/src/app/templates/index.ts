import HightailHome from './HightailHome'
import VertexHome from './VertexHome'
import DefaultHome from './DefaultHome'
import CakewalkHome from './CakewalkHome'
import LearningMakingHome from './LearningMakingHome'
import { ComponentType } from 'react'

export const templates: Record<string, ComponentType> = {
  hightail: HightailHome,
  vertex: VertexHome,
  cakewalk: CakewalkHome,
  learningmaking: LearningMakingHome,
  default: DefaultHome,
}

export { HightailHome, VertexHome, DefaultHome, CakewalkHome, LearningMakingHome }
