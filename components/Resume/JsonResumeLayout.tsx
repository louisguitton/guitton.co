import { FC } from 'react'
import { JsonResume } from '../../types/resume/JsonResume'
import Basics from './Basics'
import Education from './Education'
import Language from './Language'
import Projects from './Projects'
import Skills from './Skills'
import Work from './Work'

const JsonResumeLayout: FC<{ resume: JsonResume }> = ({ resume }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Basics basics={resume.basics} />
      <Work works={resume.work} />
      <Projects projects={resume.projects} />
      <Education educations={resume.education} />
      <Skills skills={resume.skills} />
      <Language languages={resume.languages} />
    </div>
  )
}

export default JsonResumeLayout
