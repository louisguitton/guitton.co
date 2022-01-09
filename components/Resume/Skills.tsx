import { FC } from 'react'
import { Skill } from '../../types/resume/Skill'
import Keywords from './Keywords'
import { Section } from './Section'

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  if (skills) {
    return (
      <Section name="skills">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 print:grid-cols-3">
          {skills.map((skill, i) => {
            return (
              <div key={i} className="col-span-1 pb-2 pr-2 overflow-hidden">
                <h3 className="font-semibold">{skill.name}</h3>
                <Keywords keywords={skill.keywords} itemIndex={i} />
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
