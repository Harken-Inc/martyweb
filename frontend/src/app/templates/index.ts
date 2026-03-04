import HightailHome from './HightailHome'
import VertexHome from './VertexHome'
import DefaultHome from './DefaultHome'
import CakewalkHome from '@projects/cakewalk/Home'
import LearningMakingHome from '@projects/learningmaking/Home'
import MartinWellsHome from '@projects/martinwells/Home'
import { ComponentType } from 'react'

export const templates: Record<string, ComponentType> = {
  hightail: HightailHome,
  vertex: VertexHome,
  cakewalk: CakewalkHome,
  learningmaking: LearningMakingHome,
  martinwells: MartinWellsHome,
  default: DefaultHome,
}

export { HightailHome, VertexHome, DefaultHome, CakewalkHome, LearningMakingHome, MartinWellsHome }
