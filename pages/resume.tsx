import { PrinterIcon } from '@heroicons/react/solid'
import { GetStaticProps, NextPage } from 'next'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import JsonResumeLayout from '../components/Resume/JsonResumeLayout'
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
    <>
      <NextSeo
        title="Resumé"
        description="My CV using https://jsonresume.org/"
        canonical={url}
        openGraph={{
          title: 'guitton.co | Resumé',
          description: 'My CV using https://jsonresume.org/',
          url: url,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'guitton.co',
            item: host,
          },
          {
            position: 2,
            name: 'resume',
            item: url,
          },
        ]}
      />

      <div>
        <PrintButton />
        <JsonResumeLayout resume={resume} />
      </div>
    </>
  )
}

export default Resume
