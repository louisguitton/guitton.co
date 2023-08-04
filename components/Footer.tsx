// Ref: https://devdojo.com/tails/app#_ Footer 3

import { IconName } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Link from 'next/link'
import { px } from '../@/styles/constants'

function isExternal(href: string) {
  return href.startsWith('http')
}

const navigation: {
  [key: string]: { name: string; href: string; indented?: boolean; icon?: string }[]
} = {
  site: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume', indented: true },
    { name: 'Blog', href: '/posts' },
    { name: 'Contact', href: '/contact' },
  ],
  api: [
    { name: '/api/ga/featured-posts', href: '/api/ga/featured-posts' },
    { name: '/api/ga/page-views', href: '/api/ga/page-views' },
    { name: '/api/github/contributions', href: '/api/github/contributions' },
    { name: '/api/github/stars', href: '/api/github/stars' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/louis_guitton', icon: 'twitter' },
    { name: 'Github', href: 'https://github.com/louisguitton', icon: 'github' },
    {
      name: 'Discord',
      href: 'https://discordapp.com/users/217929937842208768',
      icon: 'discord',
    },
    {
      name: 'Stackoverflow',
      href: 'https://stackoverflow.com/users/3823815/louis-guitton',
      icon: 'stack-overflow',
    },
  ],
  other: [
    { name: 'Awesome Tutos', href: 'https://awesome-tutos.guitton.co' },
    { name: '2055', href: 'https://louisguitton.github.io/2055/' },
    { name: 'dbt-metadata-utils', href: 'https://dbt-metadata-utils.guitton.co' },
    // TODO: { name: "Feed", href: "#" },
  ],
}

const Footer: React.FC = () => {
  return (
    <footer className={clsx(px, 'pt-12', 'print:hidden')} aria-labelledby="footer-heading">
      <div className={clsx('grid grid-cols-4 gap-8', 'border-t border-gray-200')}>
        <div className={clsx('col-span-4', 'text-sm text-gray-500', 'pt-8')}>
          Made in 🇩🇪 Berlin with TypeScript, NextJS, TailwindCSS, and Vercel.
        </div>
        {Object.entries(navigation).map(([key, value]) => {
          return (
            <nav
              aria-labelledby="footer-navigation"
              className={clsx('col-span-1', 'flex flex-col', 'space-y-2')}
              key={key}
            >
              <p
                className={clsx(
                  'mb-1',
                  'text-xs font-semibold tracking-wider text-gray-400 uppercase'
                )}
              >
                {key}
              </p>
              {value.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={clsx(
                      'text-sm font-medium text-gray-500 hover:text-gray-700 hover:text-primary',
                      item.indented && 'pl-5',
                      'flex space-x-1 items-center'
                    )}
                    target={isExternal(item.href) ? '_blank' : '_self'}
                  >
                    {item.icon && (
                      <FontAwesomeIcon
                        icon={['fab', item.icon as IconName]}
                        className={clsx('w-4 h-4', item.icon)}
                      />
                    )}
                    <span>{item.name}</span>
                  </a>
                </Link>
              ))}
            </nav>
          )
        })}
        <div className="col-span-4">
          <p className="mb-6 text-sm text-gray-500">
            © Copyright 2022 Louis Guitton. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
