import { LocationMarkerIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { Location } from '../../types/resume/Location'

const Location: FC<{ location: Location }> = ({ location }) => {
  return (
    <span className="flex font-bold text-gray-500">
      <LocationMarkerIcon className="w-4 h-4" />
      <span className="">{`${location.city}, (${location.countryCode})`}</span>
    </span>
  )
}

export default Location
