import { Location } from './Location'

// Any free Fontawesome brand icon
// Ref: https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands&m=free
export enum Network {
  linkedin = 'linkedin',
  twitter = 'twitter',
  github = 'github',
  stackoverflow = 'stack-overflow',
  discord = 'discord',
}

export type Profile = {
  network: Network
  url: string
  username: string
}

export type Basics = {
  name: string
  label: string
  image: string
  email: string
  phone?: string
  url: string
  summary: string
  location: Location
  profiles: Profile[]
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  website?: string
}
