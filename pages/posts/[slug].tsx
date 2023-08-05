import { s } from "hastscript";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXComponents } from "mdx/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import BlogLayout from "../../components/BlogLayout";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { getAllPosts } from "../../lib/posts";
import { Blog } from "../../lib/types";

const componentsUsedInPosts: MDXComponents = {
  YoutubeEmbed,
};

type Props = {
  post: Blog;
  content: string;
  host: string;
  url: string;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getAllPosts().map((p) => ({
    params: { slug: p.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = getAllPosts().find((post) => post.slug === params?.slug)!;

  const { code: mdxSource } = await bundleMDX({
    source: post.content,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkToc, { maxDepth: 3, tight: true }],
        remarkGfm,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            content() {
              return [
                // HeroIcon.LinkIcon
                s(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewbox: "0 0 20 20",
                    class: "h-5 w-5 inline ml-1",
                    fill: "currentColor",
                  },
                  [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                      "clip-rule": "evenodd",
                    }),
                  ]
                ),
              ];
            },
          },
        ],
        rehypeCodeTitles,
        [rehypePrismPlus, { ignoreMissing: true }],
      ];
      return options;
    },
  });

  return {
    props: {
      // for content
      post,
      content: mdxSource,
      // For SEO
      host: process.env.BASE_URL!,
      url: new URL(`/posts/${post.slug}`, process.env.BASE_URL).href,
    },
  };
};

const PostPage: NextPage<Props> = ({ post, content, host, url }) => {
  const MDXComponent = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.summary}
        canonical={url}
        noindex={post.draft ? post.draft : false}
        openGraph={{
          title: post.title,
          description: post.summary,
          url: url,
          type: "article",
          article: {
            publishedTime: post.date,
            modifiedTime: post.lastmod,
            expirationTime: undefined,
            section: post.categories ? post.categories[0] : undefined,
            authors: ["https://guitton.co/about"],
            tags: post.categories,
          },
          images: [
            {
              url: post.image,
              alt: post.title,
              // TODO: add width & height otherwise it falls back to next-seo.config.ts
            },
          ],
        }}
      />
      {/*
      References:
        - Google has excellent content on JSON-LD https://developers.google.com/search/docs/advanced/structured-data/article
        - Double check the generated JSON-LD integrates well (for Breadcrumbs, rating stars, prices, ...) https://search.google.com/test/rich-results
        - JSON-LD reference https://schema.org/Article
        - next-seo ref https://github.com/garmeeh/next-seo#article-1
      */}
      <ArticleJsonLd
        url={url}
        title={post.title}
        images={[post.image]}
        datePublished={post.date}
        dateModified={post.lastmod}
        authorName={["Louis Guitton"]}
        description={post.summary}
        publisherName="guitton.co"
        publisherLogo="/images/louis.jpg"
      />
      {/* double check the generated JSON-LD in https://search.google.com/test/rich-results */}
      <BreadcrumbJsonLd
        // TODO: add support to next-seo for multiple breadcrumb trails
        // currently it overrides with the last one
        itemListElements={[
          {
            position: 1,
            name: "guitton.co",
            item: host,
          },
          {
            position: 2,
            name: "blog",
            item: new URL(`/posts`, host).href,
          },
          {
            position: 3,
            name: post.title,
            item: url,
          },
        ]}
      />

      <BlogLayout post={post}>
        <MDXComponent components={componentsUsedInPosts} />
      </BlogLayout>
    </>
  );
};

export default PostPage;
