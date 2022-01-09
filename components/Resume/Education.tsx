import { LocationMarkerIcon } from '@heroicons/react/solid'
import moment from 'moment'
import { FC } from 'react'
import { Section } from './Section'

type Education = {
  area: string
  courses: string[]
  endDate?: string
  institution: string
  location: {
    city: string
    countryCode: string
  }
  startDate: string
  studyType: string
  url: string
}

const Education: FC<{ educations: Education[] }> = ({ educations }) => {
  if (educations) {
    return (
      <Section name="education">
        {educations.map((education, i) => {
          return (
            <section key={i} className="text-xs">
              {/* header */}
              <header className="grid grid-cols-10">
                <div className="float-left col-span-7 break-normal">
                  <div className="inline font-semibold">{education.studyType}</div>
                  <div className="inline font-semibold">{education.area}</div>
                  <div className="inline pl-1 font-normal text-gray-600">
                    at {education.institution}
                  </div>
                </div>
                <div className="col-end-[-1] font-bold text-gray-800">
                  {moment(education.startDate).format('YYYY')} -{' '}
                  {education.endDate ? moment(education.endDate).format('YYYY') : 'Current'}
                </div>
              </header>

              {/* location */}
              <span className="flex font-bold text-gray-500">
                <LocationMarkerIcon className="w-4 h-4" />
                <span className="">{`${education.location.city}, (${education.location.countryCode})`}</span>
              </span>

              {/* courses */}
              {education.courses ? (
                <ul className="flex flex-wrap my-2 bg-transparent">
                  {education.courses.map((course, j) => (
                    <li
                      key={`${i}-${j}`}
                      className="mb-1 mr-1 block p-0.5 text-xs text-blue-900 bg-gray-100 border border-blue-100 hover:bg-gray-200 flex-nowrap"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </section>
          )
        })}
      </Section>
    )
  }
  return <></>
}

export default Education
