/**
 * References:
 * - https://github.com/leerob/leerob.io/blob/main/scripts/generate-sitemap.mjs
 * - https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/scripts/generate-sitemap.js
 */
import fs from 'fs'
import prettier from 'prettier'
import globby from 'globby'
import { getAllPosts } from '../lib/posts'
import moment from 'moment'

const main = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby(['pages/*.tsx', '!pages/_*.tsx', '!pages/api'])
  const pageFragments = pages
    .map((page) => {
      const path = page
        .replace('pages/', '/')
        .replace('content/posts', '/posts')
        .replace('public/', '/')
        .replace('.tsx', '')
        .replace('.mdx', '')
        .replace('.md', '')
        .replace('/feed.xml', '')
      const route = path === '/index' ? '' : path
      if (page === `pages/404.js` || page === `pages/posts/[...slug].js`) {
        return
      }
      return `
              <url>
                  <loc>https://guitton.co${route}</loc>
              </url>
          `
    })
    .sort()

  const posts = await getAllPosts()
  const postFragments = posts.map((p) => {
    const route = `/posts/${p.slug}`
    return `
      <url>
          <loc>https://guitton.co${route}</loc>
          <lastmod>${moment(p.lastmod).format()}</lastmod>
      </url>
  `
  })

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pageFragments.concat(postFragments).join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
}

main()
