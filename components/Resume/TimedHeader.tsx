import moment from 'moment'
import { FC } from 'react'

const TimedHeader: FC<{
  name: string
  org: string
  startDate: string
  endDate?: string
  includeMonth?: boolean
}> = ({ name, org, startDate, endDate, includeMonth }) => {
  const timeFormat = includeMonth == true ? 'MMM YYYY' : 'YYYY'
  return (
    <header className="grid grid-cols-1 sm:grid-cols-5 print:grid-cols-5">
      <div className="float-left break-normal sm:col-span-4 print:col-span-4">
        <div className="inline font-semibold">{name}</div>
        <div className="inline pl-1 font-normal text-gray-600">at {org}</div>
      </div>
      <div className="sm:col-end-[-1] print:col-end-[-1] font-bold text-gray-800 text-right">
        {moment(startDate).format(timeFormat)} -{' '}
        {endDate ? moment(endDate).format(timeFormat) : 'Now'}
      </div>
    </header>
  )
}

export default TimedHeader
