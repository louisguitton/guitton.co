import clsx from 'clsx'
import { FC } from 'react'
import { BlogFrontMatter } from '../lib/types'

interface Dictionary<T> {
  [Key: string]: T
}

const colors: Dictionary<string> = {
  Data: 'bg-purple-500',
  Code: 'bg-pink-500',
  ML: 'bg-green-500',
  Ideas: 'bg-red-500',
  Projects: 'bg-amber-500',
}

const PostCategory: FC<{ post: BlogFrontMatter }> = ({ post }) => {
  if (post.categories) {
    return (
      <span
        className={clsx(
          'px-2 py-0.5',
          colors[post.categories[0]],
          'inline relative',
          'text-white text-xs uppercase'
        )}
      >
        {post.categories[0]}
      </span>
    )
  }
  return <></>
}

export default PostCategory
