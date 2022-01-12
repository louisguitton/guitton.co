import { FC } from 'react'

const SectionHeader: FC = ({ children }) => {
  return (
    <header className="relative">
      <h2 className="block pb-1 pr-4 text-sm font-semibold text-orange-600 uppercase">
        {children}
      </h2>
    </header>
  )
}

export const Section: FC<{ name: string }> = ({ name, children }) => {
  return (
    <section className="mb-3 bg-white">
      <SectionHeader>{name.toUpperCase()}</SectionHeader>

      <section id={name} className="flex flex-wrap">
        {children}
      </section>
    </section>
  )
}
