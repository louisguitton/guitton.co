# guitton.co

Urgent:

- [ ] migrate to app router

  - [x] creating app directory
  - [x] creating root layout
  - [x] migrating next/head
  - [ ] migrating pages

    - [x] home page
    - [x] contact page
    - [x] resume page
    - [ ] posts list page
    - [ ] post detail page
    - [ ] about page
    - [ ] anatomy??

  - [ ] migrating routing hooks
  - [ ] migrating data fetching hooks
  - [x] styling

- [x] add shadcn
- [ ] add Freelance Services page
- [ ] add CRM
  - [ ] add newsletter signup pointing to Hubspot for Blog
  - [ ] replace contact form with leadgen form pointing to Hubspot for Freelance services
- [ ] add Sanity + portable text for Blog, keep MDX compatibility for old posts

High:

- add "Download CV" CTA for resume
- add past work page

Future:

- add Speaking page
- add Engineering Manager Handbook sections behind paywall like "Machine Learning Flashbards"
- add Search page
- add Mentions page

## References

Next + Tailwind + MDX

- <https://github.com/timlrx/tailwind-nextjs-starter-blog#extend--customize>

Note on MDX support:

- mdx v1 libraries such as `next-mdx-remote`
- mdx v2 libraries such as `mdx-bundler`

Next + markdown

- <https://github.com/vercel/next.js/blob/canary/examples/blog-starter>
- <https://github.com/timlrx/tailwind-nextjs-starter-blog>
- <https://nextjs.org/learn/basics/dynamic-routes/render-markdown>
- <https://github.com/forestryio/next-blog-forestry>

## Notes on JSON Resume implementation

- types were adapted from code generated from the jsonschema available at <https://github.com/jsonresume/resume-schema/blob/master/schema.json> using <https://tryjsonschematypes.appspot.com/#typescript>
- components were adapted from <https://github.com/phoinixi/jsonresume-theme-stackoverflow/tree/master/theme/partials>
- styles were adapted from <https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/master/style.css>

## TODO

Critical path:

- [ ] add precommit hooks
- [ ] milk tailwind-nextjs-starter-blog typescript code for more goodies
- [ ] generate rss.xml <https://github.com/leerob/leerob.io/blob/main/scripts/generate-rss.mjs>
  - [ ] compare with <https://guitton.co/index.xml>

Nice to haves:

- [ ] add next auth + stripe + add tutos as info product
      use <https://gumroad.com/> instead?
      next-auth requirements: - email sending service (SES or mailgrid) - database (supabase) -> next-auth prisma adapter (makes session based authentication seamless)
- [ ] think of a pricing strategy (e.g. the ML/NLP bundle is separate and more expensive with stuff like the explainable recsys (Pareto archive + graph) and the referent graphs and the seeded topic models)
- [ ] research SEO implications of this: <https://developers.google.com/search/docs/advanced/structured-data/paywalled-content> and <https://developers.google.com/search/docs/advanced/structured-data/course> and <https://developers.google.com/search/docs/advanced/structured-data/product>
- [ ] add tutos
  - [ ] add <https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2018-07-22-design.md> as tuto
  - [ ] add <https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2019-10-12-project-management.md> as tuto
  - [ ] add <https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2020-04-14-cloud-cost-optimisation.md>
  - [ ] add <https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2020-05-09-ml-engineer-stack.md>
- [ ] add breadcrumbs <https://tailwindui.com/components/application-ui/navigation/breadcrumbs>
- [ ] add SSG support for tweets and gists
- [ ] add 2048 as native and easter-egg on 404 page

Next steps

- [ ] add search page for the lolz <https://docs.google.com/presentation/d/1Iqb4rz1txVASXHpdjwogbiDvetVkjI9GMa7lQoIh7j4/edit#slide=id.g10a562423c5_0_4>
- [ ] add mentions page that combines:
  - [ ] <https://www.reddit.com/search.json?sort=new&q=site:guitton.co> OR author:laguitte OR selftext:"guitton.co"
  - [ ] <https://news.ycombinator.com/from?site=guitton.co>
  - [ ] <https://twitter.com/search?q=%22guitton.co%22%20OR%20%22louis%20guitton%22%20-from%3Alouis_guitton%20-%40louis_guitton%20-bag%20-purse%20-from%3Alouisguitton&src=typed_query&f=live>

Tests

- [ ] add test: HTTPS page has internal links to HTTP
- [ ] add test: link to broken page 404
- [ ] add test: H1 tag missing or empty -> easy with jest <https://nextjs.org/docs/testing#jest-and-react-testing-library>
- [ ] add test: logevent when clicking on featured post or getting 404

Add github last modified query:

```gql
{
  repository(owner: "louisguitton", name: "guitton.co") {
    object(expression: "rewrite") {
      ... on Commit {
        history(path: "README.md", first: 1) {
          edges {
            node {
              commitUrl
              committedDate
            }
          }
        }
      }
    }
  }
}
```

- Add post about OF academy module I did about communication
- add post about flow wallets <https://www.youtube.com/watch?v=4xJvcnSZYLA&t=3188s>
- add post about office hours
- call youtube API to get captions of video, then index the document in search (maybe post NER)
