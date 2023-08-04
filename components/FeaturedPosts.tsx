import clsx from 'clsx'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../lib/types'
import { EyeIcon } from '@heroicons/react/outline'
import { logEvent } from './GAScript'
import PostCategory from './PostCategory'

const FeaturedPost: React.FC<{ post: Post; className?: string }> = ({
  post,
  className,
  ...rest
}) => {
  return (
    (<Link
      href={`/posts/${post.slug}`}
      passHref
      className={clsx(
        className,
        'relative flex flex-col items-start justify-end',
        'px-5 pb-5',
        'overflow-hidden bg-gray-800 cursor-pointer group'
      )}
      onClick={() => logEvent('featured_post_clicked', undefined, post.slug)}
      {...rest}>

      <Image
        src={post.image}
        layout="fill"
        alt={post.title}
        className="absolute inset-0 object-cover object-center transition duration-300 ease-out transform scale-100 group-hover:scale-105"
      />
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-90" />
      <PostCategory post={post} className="mb-3" />
      <span className="relative mb-3 text-xl font-bold leading-tight text-white">
        {post.title}
      </span>
      <span className="relative flex text-xs text-white opacity-90">
        <span className="mr-2">{moment(post.date).format('MMMM Do, YYYY')}</span>·
        <span className="ml-2 font-semibold align-middle has-tooltip">
          {post.views} <EyeIcon className="inline-block w-4 h-4 ml-1" />
          <span className="mt-4 -ml-16 text-xs tooltip w-28">(since 1 year)</span>
        </span>
      </span>

    </Link>)
  );
}

const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className="relative pt-16 pb-10">
      <div className="flex justify-between w-full pb-5">
        <h2 className={clsx('px-3 py-2 bg-gray-800', 'text-sm font-medium text-white uppercase')}>
          Most Read Articles
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-1">
        {posts.map((post) => (
          <FeaturedPost
            key={post.slug}
            post={post}
            className="col-span-12 h-96 md:col-span-6 lg:col-span-4 print:col-span-4"
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts
