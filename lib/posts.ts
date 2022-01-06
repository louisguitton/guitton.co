/**
 * References:
 * - https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.js
 * - https://www.section.io/engineering-education/static-nextjs-markdown-blog-typescript-mdx-tailwindcss/
 */
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { BlogFrontMatter, Blog } from "./types";
import { remark } from "remark";
import html from "remark-html";

// TODO: be smarter (recursive or other)
const postsDirectory = join(process.cwd(), "content/posts");
console.log(postsDirectory);


/** Get file names under /posts */
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((path) => /\.mdx?$/.test(path));
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getPostBySlug(fileName: string): Blog {
  const id = fileName.replace(/\.mdx?$/, '')
  const fullPath = join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const typedData = data as BlogFrontMatter;
  // TODO: add lodash.pick to select only the fields needed
  return { id, ...typedData, content };
}

export function getAllPosts(): Blog[] {
  const fileNames = getPostSlugs();
  const posts = fileNames
    .map((fileName) => getPostBySlug(fileName))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));  
  return posts;
}






// import remarkGfm from 'remark-gfm';
