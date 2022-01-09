import { FC } from 'react'
import { Project } from '../../types/resume/Project'
import ItemDetails from './ItemDetails'
import Keywords from './Keywords'
import { Section } from './Section'
import URL from './URL'

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  if (projects) {
    return (
      <Section name="projects">
        <div className="grid grid-cols-1">
          {projects.map((project, i) => {
            return (
              <section key={i} className='min-w-full'>
                <header>
                  <div className="inline text-xs font-semibold">{project.name}</div>
                </header>
                <URL website={project.url} />
                <Keywords keywords={project.keywords} itemIndex={i} />
                <ItemDetails
                  summary={project.summary}
                  highlights={project.highlights}
                  itemIndex={i}
                />
              </section>
            )
          })}
        </div>
      </Section>
    )
  }
  return <></>
}

export default Projects
