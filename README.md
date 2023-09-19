# guitton.co

Urgent:

- [ ] add CRM

  - [ ] add newsletter signup pointing to Hubspot for Blog
  - [ ] replace contact form with leadgen form pointing to Hubspot for Freelance services

- [ ] remove headlessui in favor of shadcn

High:

- [ ] add "Download CV" CTA for resume
- [ ] add precommit hooks

Future:

- [ ] get inspired by tailwind-nextjs-starter-blog
  - [ ] add siteMetadata once and reuse it
  - [ ] add RSS feed
  - [ ] add Algolia search
- [ ] add Speaking page
- [ ] add Engineering Manager Handbook sections or tutos behind paywall like "Machine Learning Flashbards"
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

- v1 was `next-mdx-remote`
- v2 was `mdx-bundler`
- v3 is `contentlayer`

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
