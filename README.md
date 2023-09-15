# guitton.co

Urgent:

- [ ] migrate to app router

  - [x] creating app directory
  - [x] creating root layout
  - [x] migrating next/head
  - [x] fix GA tracking
  - [x] migrate to contentlayer
  - [ ] migrating pages

    - [x] home page
    - [x] contact page
    - [x] resume page
    - [x] posts list page
    - [x] post detail page
    - [ ] about page
    - [ ] anatomy??

  - [ ] migrating routing hooks
  - [ ] migrating data fetching hooks
  - [x] styling

- [x] add shadcn
- [ ] add Freelance Services page
- [ ] add Sanity + portable text for Blog, keep MDX compatibility for old posts

High:

- [ ] add CRM
  - [ ] add newsletter signup pointing to Hubspot for Blog
  - [ ] replace contact form with leadgen form pointing to Hubspot for Freelance services
- [ ] add mentions links to footer:
  - [ ] <https://www.reddit.com/search.json?sort=new&q=site:guitton.co> OR author:laguitte OR selftext:"guitton.co"
  - [ ] <https://news.ycombinator.com/from?site=guitton.co>
  - [ ] <https://twitter.com/search?q=%22guitton.co%22%20OR%20%22louis%20guitton%22%20-from%3Alouis_guitton%20-%40louis_guitton%20-bag%20-purse%20-from%3Alouisguitton&src=typed_query&f=live>
- add "Download CV" CTA for resume
- add past work page
- [ ] add precommit hooks
- [ ] milk tailwind-nextjs-starter-blog typescript code for more goodies
- [ ] generate rss.xml <https://github.com/leerob/leerob.io/blob/main/scripts/generate-rss.mjs>
  - [ ] compare with <https://guitton.co/index.xml>

Future:

- add Speaking page
- add Engineering Manager Handbook sections or tutos behind paywall like "Machine Learning Flashbards"
- add Search page
- add Mentions page
- [ ] add 2048 as native and easter-egg on 404 page
- Tests
  - [ ] add test: HTTPS page has internal links to HTTP
  - [ ] add test: link to broken page 404
  - [ ] add test: H1 tag missing or empty -> easy with jest <https://nextjs.org/docs/testing#jest-and-react-testing-library>
  - [ ] add test: logevent when clicking on featured post or getting 404

## References

Next + Tailwind + MDX

- <https://github.com/timlrx/tailwind-nextjs-starter-blog#extend--customize>

Note on MDX support:

- mdx v1 libraries such as `next-mdx-remote`
- mdx v2 libraries such as `mdx-bundler`

Next + markdown

- <https://github.com/shadcn/next-contentlayer>
- <https://github.com/vercel/next.js/blob/canary/examples/blog-starter>
- <https://github.com/timlrx/tailwind-nextjs-starter-blog>
- <https://nextjs.org/learn/basics/dynamic-routes/render-markdown>
- <https://github.com/forestryio/next-blog-forestry>

## Notes on JSON Resume implementation

- types were adapted from code generated from the jsonschema available at <https://github.com/jsonresume/resume-schema/blob/master/schema.json> using <https://tryjsonschematypes.appspot.com/#typescript>
- components were adapted from <https://github.com/phoinixi/jsonresume-theme-stackoverflow/tree/master/theme/partials>
- styles were adapted from <https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/master/style.css>
