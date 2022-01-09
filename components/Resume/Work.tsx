import moment from 'moment'
import { FC } from 'react'
import { Work } from '../../types/resume/Work'
import ItemDetails from './ItemDetails'
import Keywords from './Keywords'
import Location from './Location'
import { Section } from './Section'
import TimedHeader from './TimedHeader'
import URL from './URL'

const Work: FC<{ works: Work[] }> = ({ works }) => {
  if (works) {
    return (
      <Section name="work experience">
        <div className="grid grid-cols-1 space-y-2">
          {works.map((work, i) => {
            return (
              <section key={i} className="text-xs">
                <TimedHeader
                  name={work.position}
                  org={work.name}
                  startDate={work.startDate}
                  endDate={work.endDate}
                />

                <div className="flex space-x-2">
                  <Location location={work.location} />
                  <URL website={work.website} />
                </div>
                <Keywords keywords={work.keywords} itemIndex={i} />
                <ItemDetails summary={work.summary} highlights={work.highlights} itemIndex={i} />
              </section>
            )
          })}
        </div>
      </Section>
    )
  }
  return <></>
}

export default Work
