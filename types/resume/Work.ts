import { Location } from "./Location";

export type Work = {
  description?: string
  highlights: string[]
  keywords?: string[]
  location: Location
  name: string
  position: string
  startDate: string
  endDate?: string
  summary: string
  website: string
}
