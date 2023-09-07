import { Metadata } from "next";
import FeaturedPosts from "../../../components/FeaturedPosts";
import Hero from "../../../components/Hero";
import { getAllPosts } from "../../../lib/posts";
import { Post, PostView } from "../../../lib/types";

export const metadata: Metadata = {
  metadataBase: new URL("/", process.env.BASE_URL),
  title: "Home",
  openGraph: {
    title: "guitton.co | Home",
  },
};

const featuredPosts: PostView[] = [
  {
    page: "/posts/fastapi-monitoring/",
    views: 6078,
    since: "Last 12 months",
  },
  {
    page: "/posts/dbt-artifacts/",
    views: 2590,
    since: "Last 12 months",
  },
  {
    page: "/posts/football-strava/",
    views: 500,
    since: "Last 12 months",
  },
];
const allBlogs = getAllPosts();
const posts: Post[] = [];
featuredPosts.forEach((featuredPost) => {
  const p = allBlogs.find(
    (post) => `/posts/${post.slug}/` == featuredPost.page
  );
  if (p)
    posts.push({
      ...p,
      views: featuredPost.views,
    });
});

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
