import { FC } from 'react'

const Keywords: FC<{ keywords?: string[]; itemIndex: number }> = ({ keywords, itemIndex }) => {
  if (keywords && keywords.length) {
    return (
      <ul className="flex flex-wrap my-2 text-xs bg-transparent">
        {keywords.map((keyword, j) => (
          <li
            key={`${itemIndex}-${j}`}
            className="mb-1 mr-1 block p-0.5 text-xs text-blue-900 bg-gray-100 border border-blue-100 hover:bg-gray-200 flex-nowrap"
          >
            {keyword}
          </li>
        ))}
      </ul>
    )
  }
  return <></>
}

export default Keywords
