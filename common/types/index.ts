import { CareerProps } from './careers'
import { ILearn } from './learn'
import { IProjectItem } from './projects'
import { IRoadmap } from './roadmap'
import { IServices } from './services'

export type IBadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

export interface ICodeBayuData {
  careers: CareerProps[]
  projects: IProjectItem[]
  learns: ILearn[]
  roadmaps: IRoadmap
  services: IServices[]
}
