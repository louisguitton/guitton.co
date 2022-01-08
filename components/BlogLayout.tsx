import { CalendarIcon, CollectionIcon } from '@heroicons/react/solid'
import moment from 'moment'
import Image from 'next/image'
import { Blog } from '../lib/types'

// Ref: https://tailwindcss.com/docs/typography-plugin
const BlogLayout: React.FC<{ post: Blog }> = ({ post, children }) => {
  return (
    <article className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose">
        <div className="relative w-full h-96">
          <Image
            src={post.image}
            layout="fill"
            alt={post.title}
            className="object-cover object-center"
          />
        </div>
        <h1 className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="flex mt-8 text-xl leading-8 text-gray-500">
          <span className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-1" /> {moment(post.date).format('MMMM DD, YYYY')}
          </span>
          <span className="px-2" />
          <span className="flex items-center font-semibold">
            <CollectionIcon className="w-5 h-5 mr-1" />
            {post.categories?.join(' - ')}
          </span>
        </p>
      </div>
      <div className="mx-auto mt-6 prose prose-indigo">{children}</div>
    </article>
  )
}

export default BlogLayout
