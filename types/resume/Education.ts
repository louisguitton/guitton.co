import { Location } from "./Location";

export type Education = {
  area: string
  courses: string[]
  endDate?: string
  institution: string
  location: Location
  startDate: string
  studyType: string
  url: string
}
