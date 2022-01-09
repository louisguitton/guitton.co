import { FC } from 'react'
import { Section } from './Section'

type Skill = {
  keywords: string[]
  name: string
}

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  if (skills) {
    return (
      <Section name="skills">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3">
          {skills.map((skill, i) => {
            return (
              <div key={i} className="col-span-1 pb-2 pr-2 overflow-hidden">
                <h3 className="font-semibold">{skill.name}</h3>
                <ul className="flex flex-wrap my-2 text-xs bg-transparent">
                  {skill.keywords.map((keyword, j) => (
                    <li
                      key={`${j}-${i}`}
                      className="mb-1 mr-1 block p-0.5 text-xs text-blue-900 bg-gray-100 border border-blue-100 hover:bg-gray-200 flex-nowrap"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Section>
    )
  }
  return <></>
}

export default Skills
