import { FC } from 'react'
import { Project } from '../../types/resume/Project'
import ItemDetails from './ItemDetails'
import Keywords from './Keywords'
import { Section } from './Section'
import URL from './URL'

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  if (projects.length) {
    return (
      <Section name="projects">
        <div className="grid grid-cols-1">
          {projects.map((project, i) => {
            return (
              <section key={i} className="min-w-full">
                <div className="flex">
                  <div className="inline text-xs font-semibold">
                    {project.name} on <URL website={project.url} />
                  </div>
                  <ItemDetails
                    summary={project.summary}
                    highlights={project.highlights}
                    itemIndex={i}
                  />
                </div>

                <Keywords keywords={project.keywords} itemIndex={i} />
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
