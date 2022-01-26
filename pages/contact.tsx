// Ref: https://tailwindui.com/components/marketing/sections/contact-sections
import { Dispatch, SetStateAction, useState } from 'react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { GetStaticProps, NextPage } from 'next'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    // For SEO
    host: process.env.BASE_URL!,
    url: new URL('/contact', process.env.BASE_URL).href,
  },
})

const RegularForm = ({
  agreed,
  setAgreed,
}: {
  agreed: boolean
  setAgreed: Dispatch<SetStateAction<boolean>>
}) => (
  <form
    action="/api/amazon/send-email"
    method="POST"
    className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 print:col-span-2 print:gap-x-8"
  >
    <div className="sm:col-span-2 print:col-span-2">
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
        Full name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="full-name"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2 print:col-span-2">
      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
        Company
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2 print:col-span-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2 print:col-span-2">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <div className="mt-1">
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          defaultValue={''}
        />
      </div>
    </div>
    <div className="sm:col-span-2 print:col-span-2">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={clsx(
              agreed ? 'bg-primary-600' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={clsx(
                agreed ? 'translate-x-5' : 'translate-x-0',
                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
        </div>
        <div className="ml-3">
          <p className="text-base text-gray-500">
            By selecting this, you agree to the{' '}
            <a href="#" className="font-medium text-gray-700 underline cursor-not-allowed">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-gray-700 underline cursor-not-allowed">
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <div className="sm:col-span-2 print:col-span-2">
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Send
      </button>
    </div>
  </form>
)

const Postcard = () => (
  <form
    action="/api/amazon/send-email"
    method="POST"
    className="grid w-full grid-cols-2 grid-rows-6 p-2 border-2 border-gray-900 divide-x gap-y-6 gap-x-8 h-[26rem]"
  >
    <div className="flex flex-col col-span-1 row-span-full">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="flex-grow block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        defaultValue={''}
      />
    </div>
    <div className="col-span-1 pl-8 row-span-full">
      <div className={clsx('relative row-span-2', 'h-28', 'grid grid-cols-3')}>
        <button
          type="submit"
          className={clsx(
            'col-end-[-1] col-span-1',
            'h-28',
            'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          )}
        >
          Send
        </button>
      </div>
      <div className="row-span-1 py-8"></div>
      <div className="row-span-1">
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
          Full name
        </label>
        <div>
          <input
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="full-name"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <div>
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1 py-4"></div>
    </div>
  </form>
)

const ContactPage: NextPage<{ host: string; url: string }> = ({ host, url }) => {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <NextSeo
        title="Contact"
        canonical={url}
        openGraph={{
          title: 'guitton.co | Contact',
          url: url,
          type: 'profile',
          profile: {
            firstName: 'Louis',
            lastName: 'Guitton',
            gender: 'male',
            username: 'louis_guitton',
          },
        }}
        additionalMetaTags={[
          { property: 'article:published_time', content: new Date(2019, 5, 15).toISOString() },
        ]}
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
            name: 'contact',
            item: url,
          },
        ]}
      />

      <main>
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl print:text-4xl">
              Send me a postcard
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              You can just say Hi, or Thanks or share an interesting opportunity.
            </p>
          </div>
          <div className="mt-12 sm:hidden print:hidden">
            <RegularForm agreed={agreed} setAgreed={setAgreed} />
          </div>
          <div className="hidden mt-12 sm:block print:block">
            <Postcard />
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactPage
