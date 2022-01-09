import { Basics } from './Basics'
import { Education } from './Education'
import { Language } from './Language'
import { Project } from './Project'
import { Skill } from './Skill'
import { Work } from './Work'

export type JsonResume = {
  $schema: string
  awards: any[]
  basics: Basics
  education: Education[]
  interests: any[]
  languages: Language[]
  meta: {
    canonical: string
    lastModified: string
    version: string
  }
  projects: Project[]
  publications: any[]
  references: any[]
  skills: Skill[]
  volunteer: any[]
  work: Work[]
}
