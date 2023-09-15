import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allPosts.map((post) => ({
    url: `https://guitton.co/posts/${post.slug}`,
    lastModified: post.lastmod,
  }));

  const routes = ["/", "/contact", "/posts", "/resume", "/about"].map(
    (route) => ({
      url: `https://guitton.co${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogs];
}
