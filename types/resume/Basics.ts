import { Location } from "./Location"

export type Profile = {
  network: string
  url: string
  username: string
}

export type Basics = {
  email: string
  image: string
  label: string
  location: Location
  name: string
  phone: string
  profiles: Profile[]
  summary: string
  url: string
  website: string
}
