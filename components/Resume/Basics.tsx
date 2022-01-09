import { IconName } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLinkIcon, MailIcon, DeviceMobileIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Basics } from '../../types/resume/Basics'
import URL from './URL'

const Basics: FC<{ basics: Basics }> = ({ basics }) => {
  return (
    <>
      {/* header */}
      <header className="grid grid-cols-1 sm:grid-cols-5 print:grid-cols-5">
        <div className="col-span-4 space-y-1">
          <h1 className="text-5xl font-thin">{basics.name}</h1>
          <h2 className="text-2xl font-light text-gray-800">{basics.label}</h2>
          <span>{`${basics.location.city}, ${basics.location.countryCode}`}</span>
          <div className="flex flex-col space-y-1 sm:space-x-3 sm:flex-row print:space-x-3 print:flex-row">
            {/* website */}
            <div className="flex space-x-0.5">
              <ExternalLinkIcon className="w-4 h-4" />
              <URL website={basics.website} />
            </div>

            {/* email */}
            <div className="flex space-x-0.5">
              <MailIcon className="w-4 h-4" />
              <a
                href={`mailto:${basics.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-800 visited:text-purple-600"
              >
                {basics.email}
              </a>
            </div>

            {/* phone */}
            <div className="flex space-x-0.5">
              <DeviceMobileIcon className="w-4 h-4" />
              <a
                href={`tel:${basics.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-800 visited:text-purple-600"
              >
                {basics.phone}
              </a>
            </div>
          </div>
          {basics.profiles ? (
            <div className="flex flex-col space-y-1 sm:space-x-3 sm:flex-row print:space-x-3 print:flex-row">
              {basics.profiles.map((profile, i) => {
                return (
                  <div key={i} className="flex space-x-0.5 items-center">
                    <FontAwesomeIcon
                      icon={['fab', profile.network as IconName]}
                      className={clsx('w-4 h-4', profile.network)}
                    />
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-800 visited:text-purple-600"
                    >
                      {profile.username}
                    </a>
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="relative col-span-1 col-end-[-1] h-40">
          <Image
            src={basics.image}
            alt="Profile Picture"
            layout="fill"
            className="object-contain rounded-xl "
          />
        </div>
      </header>

      <section className="w-11/12">
        <div className="min-w-full px-4 py-5 mt-4 text-xs prose text-blue-900 bg-blue-50">
          {basics.summary}
        </div>
      </section>
    </>
  )
}

export default Basics