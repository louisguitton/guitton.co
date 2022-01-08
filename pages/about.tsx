import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import type { GetStaticProps, NextPage } from 'next'
import { PaperClipIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    // For SEO
    host: process.env.BASE_URL!,
    url: new URL('/about', process.env.BASE_URL).href,
  },
})

const AboutPage: NextPage<{ host: string; url: string }> = ({ host, url }) => {
  return (
    <>
      <NextSeo
        title="About"
        canonical={url}
        openGraph={{
          title: 'guitton.co | About',
          url: url,
          type: 'profile',
          profile: {
            firstName: 'Louis',
            lastName: 'Guitton',
            gender: 'male',
            username: 'louis_guitton',
          },
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
            name: 'about',
            item: url,
          },
        ]}
      />

      <div className="overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">About me</h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">No, I'm not Louis Vuitton.</p>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">Louis Guitton</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900">admin@guitton.co</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Occupation</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Software Engineer and occasional Blogger
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Interests</dt>
              <dd className="mt-1 text-sm text-gray-900">
                NLP, MLOps, RecSys, Python, SSG, Blockchain
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Born in</dt>
              <dd className="mt-1 text-sm text-gray-900">🇫🇷 France</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Residence</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul>
                  <li>🇩🇪 Berlin, Germany (current)</li>
                  <li>🇫🇷 Paris, France</li>
                  <li>🇸🇬 Singapore, Singapore</li>
                  <li>🇬🇧 Brighton, United Kingdom</li>
                </ul>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Educated at</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul>
                  <li>
                    <a
                      href="https://www.slideshare.net/louisguitton5/presentation-mines-paristech-50518444"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mines ParisTech - Paris, France
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bginette.com/" target="_blank" rel="noopener noreferrer">
                      Ginette - Versailles, France
                    </a>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Part of</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul>
                  <li>OneFootball Medienliga team - ⚽️ football team</li>
                  <li>Entrepreneur First BE1 - 🦡 startup incubator alumni</li>
                  <li>Blogging for Devs - blogger community</li>
                  <li>Scott's Bass Lesson - 🎸 online bass school</li>
                </ul>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm prose text-gray-900">
                I am a Software Engineer from France living in Berlin. I have <i>freelance</i> and{' '}
                <i>entrepreneurial</i> experience. I have experience with Natural Language
                Processing in Python, and let my curiosity guide me to other topics.
                <ol>
                  In general, I look for opportunities where I can:
                  <li>learn and grow as an engineer</li>
                  <li>influence the technology around me</li>
                </ol>
                This is, for example, why I enjoy open source so much.
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul
                  role="list"
                  className="border border-gray-200 divide-y divide-gray-200 rounded-md"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex items-center flex-1 w-0">
                      <PaperClipIcon
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="flex-1 w-0 ml-2 truncate">resume.pdf</span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <button
                        disabled
                        className="font-medium cursor-not-allowed text-primary-600 hover:text-primary-500"
                      >
                        Download
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div
          className={clsx(
            'px-4 py-5 border-t border-gray-200 sm:px-6',
            'grid grid-cols-1 sm:grid-cols-12 gap-10'
          )}
        >
          <div className="relative w-auto h-60 sm:col-span-4">
            <Image
              layout="fill"
              src="/images/ef_countdown.jpg"
              alt="Entrepreneur First"
              className="object-contain"
            />
          </div>
          <div className="relative w-auto h-60 sm:col-span-4">
            <Image
              layout="fill"
              src="/images/in_my_room.jpg"
              alt="Playing Music"
              className="object-contain"
            />
          </div>
          <div className="relative w-auto h-60 sm:col-span-4">
            <Image
              layout="fill"
              src="/images/singapore.jpg"
              alt="Singapore"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
