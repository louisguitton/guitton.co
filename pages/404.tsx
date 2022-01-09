import Link from 'next/link'

// Ref: https://tailwindui.com/components/marketing/feedback/404-pages
export default function Custom404() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 print:grid print:place-items-center">
      <div className="mx-auto max-w-max">
        <main className="sm:flex print:flex">
          <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl print:text-5xl">404</p>
          <div className="sm:ml-6 print:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6 print:border-l print:border-gray-200 print:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl print:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6 print:border-l print:border-transparent print:pl-6">
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Go back home
                </a>
              </Link>

              <Link href="https://louisguitton.github.io/2055/">
                <a className="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Play a game
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
