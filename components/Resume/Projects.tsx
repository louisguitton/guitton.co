import { FC } from 'react'
import { Section } from './Section'

type Project = {
  name: string
  summary: string
  entity?: string
  highlights?: string[]
  keywords?: string[]
  url?: string
}

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  if (projects) {
    return (
      <Section name="projects">
        <div className="grid grid-cols-1">
          {projects.map((project, i) => {
            return (
              <section key={i}>
                <header>
                  <div className="inline text-xs font-semibold">{project.name}</div>
                </header>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 underline hover:text-blue-800 visited:text-purple-600"
                  >
                    {project.url}
                  </a>
                ) : (
                  <></>
                )}
                {project.keywords ? (
                  <ul className="flex flex-wrap my-2 text-xs bg-transparent">
                    {project.keywords.map((keyword, j) => (
                      <li
                        key={`${j}-${i}`}
                        className="mb-1 mr-1 block p-0.5 text-xs text-blue-900 bg-gray-100 border border-blue-100 hover:bg-gray-200 flex-nowrap"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}

                <div className="text-xs prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: project.summary }} />
                  {project.highlights ? (
                    <ul>
                      {project.highlights.map((highlight, j) => (
                        <li key={`${j}-${i}`} dangerouslySetInnerHTML={{ __html: highlight }} />
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
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
