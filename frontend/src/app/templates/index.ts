import HightailHome from './HightailHome'
import InnovatorHome from './InnovatorHome'
import DefaultHome from './DefaultHome'
import CakewalkHome from '@projects/cakewalk/Home'
import LearningMakingHome from '@projects/learningmaking/Home'
import MartinWellsHome from '@projects/martinwells/Home'
import HarkenHome from '@projects/harken/Home'
import MartinJamesWorldHome from '@projects/martinjamesworld/Home'
import { ComponentType } from 'react'

export const templates: Record<string, ComponentType> = {
  hightail: HightailHome,
  innovator: InnovatorHome,
  cakewalk: CakewalkHome,
  learningmaking: LearningMakingHome,
  martinwells: MartinWellsHome,
  martinjamesworld: MartinJamesWorldHome,
  harken: HarkenHome,
  default: DefaultHome,
}

export { HightailHome, InnovatorHome, DefaultHome, CakewalkHome, LearningMakingHome, MartinWellsHome, HarkenHome, MartinJamesWorldHome }
