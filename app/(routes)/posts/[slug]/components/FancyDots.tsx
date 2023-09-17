import clsx from 'clsx'

const FancyDots = ({ className }: { className: string }) => (
  <svg
    className={clsx('absolute transform', className)}
    width={404}
    height={404}
    fill="none"
    viewBox="0 0 404 404"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="85737c0e-0916-41d7-917f-596dc7edfa27"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
      </pattern>
    </defs>
    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
  </svg>
)

export default FancyDots
