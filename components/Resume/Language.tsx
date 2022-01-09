// Ref: https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/master/style.css
import clsx from 'clsx'
import { FC } from 'react'
import { Section } from './Section'

type Language = {
  fluency: string
  language: string
}

const Language: FC<{ languages: Language[] }> = ({ languages }) => {
  if (languages) {
    return (
      <Section name="languages">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3">
          {languages.map((language, i) => {
            return (
              <div key={i} className="block col-span-1">
                {language.language && <h3 className="font-semibold">{language.language}</h3>}
                <div className="pb-2 pr-2 overflow-hidden">
                  {language.fluency && (
                    <div className="mb-2 fluency">
                      <em className="py-1 pl-1 font-normal">{language.fluency}</em>
                      <div
                        className={clsx(
                          'relative h-2 border border-gray-400',
                          ['basic', 'beginner'].includes(language.fluency.toLowerCase()) &&
                            'w-[2.5rem] bg-red-400',
                          language.fluency.toLowerCase() == 'intermediate' &&
                            'w-[5rem] bg-amber-300',
                          ['advanced', 'fluent'].includes(language.fluency.toLowerCase()) &&
                            'w-[7.5rem] bg-green-500',
                          ['native speaker', 'master'].includes(language.fluency.toLowerCase()) &&
                            'w-[10rem] bg-emerald-500'
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    )
  }
  return <></>
}

export default Language
