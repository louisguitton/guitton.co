// Ref: https://swr.vercel.app/docs/with-nextjs
import FeaturedPosts from '../components/FeaturedPosts'
import Hero from '../components/Hero'
import { FeaturedPostsData, Post } from '../lib/types'
import useSWR, { SWRConfig } from 'swr'
import fetcher from '../lib/fetcher'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getGoogleAnalyticsFeaturedPosts } from '../lib/google'
import { cacheConfig } from '../lib/constants'
import { NextSeo } from 'next-seo'
import { getAllPosts } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const results = await getGoogleAnalyticsFeaturedPosts('365daysAgo')
  return {
    props: {
      allBlogs: getAllPosts(),
      // SWR fallback data
      fallback: {
        '/api/ga/featured-posts?startDate=365daysAgo': results,
      },
      // For SEO
      url: new URL('/', process.env.BASE_URL).href,
    },
    // revalidate is in seconds, Ref: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
    revalidate: cacheConfig.backend,
  }
}

const FeaturedSection: React.FC<{ allBlogs: Post[] }> = ({ allBlogs }) => {
  const { data: featuredPosts } = useSWR<FeaturedPostsData>(
    '/api/ga/featured-posts?startDate=365daysAgo'
  )
  if (!featuredPosts) {
    return <div>Loading ...</div>
  }

  const posts: Post[] = []
  featuredPosts.forEach((featuredPost) => {
    const p = allBlogs.find((post) => `/posts/${post.slug}/` == featuredPost.page)
    if (p)
      posts.push({
        ...p,
        views: featuredPost.views,
      })
  })

  return <FeaturedPosts posts={posts} />
}

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  allBlogs,
  fallback,
  url,
}) => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical={url}
        openGraph={{
          title: 'guitton.co | Home',
          url: url,
        }}
        additionalMetaTags={[
          { property: 'article:published_time', content: new Date(2019, 5, 14).toISOString() },
          { property: 'article:modified_time', content: new Date().toISOString() },
        ]}
      />

      <Hero />
      {/* References:
        - https://swr.vercel.app/docs/global-configuration
        - https://swr.vercel.app/docs/options#options
      */}
      <SWRConfig
        value={{
          fallback,
          fetcher,
          // refreshInterval is in ms
          refreshInterval: cacheConfig.frontend * 1000,
        }}
      >
        <FeaturedSection allBlogs={allBlogs} />
      </SWRConfig>
    </>
  )
}

export default Index
