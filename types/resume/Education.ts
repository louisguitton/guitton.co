import { Location } from './Location'

export type Education = {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate?: string
  score?: string
  courses: string[]
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  location?: Location
}
