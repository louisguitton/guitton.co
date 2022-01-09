import { PrinterIcon } from '@heroicons/react/solid'
import { GetStaticProps, NextPage } from 'next'
import Education from '../components/Resume/Education'
import Language from '../components/Resume/Language'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import Work from '../components/Resume/Work'
import { resume } from '../lib/resume'
import { JsonResume } from '../types/resume/JsonResume'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    resume: resume,
    // For SEO
    host: process.env.BASE_URL!,
    url: new URL('/resume', process.env.BASE_URL).href,
  },
})

const PrintButton = () => {
  return (
    <div className="text-right">
      <button
        type="button"
        className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 print:hidden"
        onClick={() => window.print()}
      >
        <PrinterIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
        Print
      </button>
    </div>
  )
}

const Resume: NextPage<{ resume: JsonResume; host: string; url: string }> = ({
  resume,
  host,
  url,
}) => {
  return (
    // TODO: add SEO stuff
    <div>
      <PrintButton />
      {/* Basics */}
      <Work works={resume.work} />
      <Projects projects={resume.projects} />
      <Skills skills={resume.skills} />
      <Education educations={resume.education} />
      <Language languages={resume.languages} />
    </div>
  )
}

export default Resume
