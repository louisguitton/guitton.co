import { Location } from './Location'

export type Work = {
  name: string
  location: Location
  description?: string
  position: string
  url: string
  startDate: string
  endDate?: string
  summary: string
  highlights: string[]
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  keywords?: string[]
}
