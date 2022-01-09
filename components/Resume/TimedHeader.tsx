import moment from 'moment'
import { FC } from 'react'

const TimedHeader: FC<{ name: string; org: string; startDate: string; endDate?: string }> = ({
  name,
  org,
  startDate,
  endDate,
}) => {
  return (
    <header className="grid grid-cols-10">
      <div className="float-left col-span-7 break-normal">
        <div className="inline font-semibold">{name}</div>
        <div className="inline pl-1 font-normal text-gray-600">at {org}</div>
      </div>
      <div className="col-end-[-1] font-bold text-gray-800">
        {moment(startDate).format('YYYY')} - {endDate ? moment(endDate).format('YYYY') : 'Now'}
      </div>
    </header>
  )
}

export default TimedHeader
