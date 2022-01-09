import { PrinterIcon } from '@heroicons/react/solid'
import useSWR from 'swr'
import Education from '../components/Resume/Education'
import Language from '../components/Resume/Language'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import fetcher from '../lib/fetcher'

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
const Resume = () => {
  const { data, error } = useSWR<any>('/api/resume', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <PrintButton />
      {/* Basics */}
      {/* Work */}
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Education educations={data.education} />
      <Language languages={data.languages} />
    </div>
  )
}

export default Resume
