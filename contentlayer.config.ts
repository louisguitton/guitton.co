import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { s } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean" },
    categories: {
      type: "list",
      of: {
        type: "string",
      },
    },
    series: {
      type: "list",
      of: {
        type: "string",
      },
    },
    keywords: {
      type: "list",
      of: {
        type: "string",
      },
    },
    views: { type: "number" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.substring(11),
    },
    date: {
      type: "date",
      resolve: (doc) => doc._raw.flattenedPath.substring(0, 10),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        new URL(
          `/posts/${doc._raw.flattenedPath.substring(11)}`,
          process.env.BASE_URL
        ).href,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkToc, { maxDepth: 3, tight: true }], remarkGfm],
    rehypePlugins: [
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
    ],
  },
});
