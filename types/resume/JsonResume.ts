import { Award } from './Award'
import { Basics } from './Basics'
import { Certificate } from './Certificate'
import { Education } from './Education'
import { Interest } from './Interest'
import { Language } from './Language'
import { Project } from './Project'
import { Publication } from './Publication'
import { Reference } from './Reference'
import { Skill } from './Skill'
import { Volunteer } from './Volunteer'
import { Work } from './Work'

export type JsonResume = {
  $schema: string
  awards: Award[]
  basics: Basics
  education: Education[]
  interests: Interest[]
  languages: Language[]
  meta: {
    canonical: string
    version: string
    lastModified: string
  }
  projects: Project[]
  publications: Publication[]
  references: Reference[]
  skills: Skill[]
  volunteer: Volunteer[]
  work: Work[]
  certificates: Certificate[]
}
