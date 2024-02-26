import { Post, allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { PostView } from "../../../lib/types";
import FeaturedPosts from "./components/FeaturedPosts";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  metadataBase: new URL("/", process.env.BASE_URL),
  title: "Home",
  openGraph: {
    title: "guitton.co | Home",
  },
};

// https://analytics.google.com/analytics/web/#/p256193208/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..selmet%3D%5B%22screenPageViews%22%5D%26_r.explorerCard..seldim%3D%5B%22unifiedPagePathScreen%22%5D%26_u.dateOption%3Dlast12Months%26_u.comparisonOption%3Ddisabled%26_r.explorerCard..rowsPerPage%3D25&r=all-pages-and-screens&ruid=all-pages-and-screens,life-cycle,engagement&collectionId=life-cycle
const featuredPosts: PostView[] = [
  {
    page: "/posts/graphs-and-language/",
    views: 50,
    since: "Last 12 months",
  },
  {
    page: "/posts/fastapi-monitoring/",
    views: 4150,
    since: "Last 12 months",
  },
  {
    page: "/posts/dbt-artifacts/",
    views: 1650,
    since: "Last 12 months",
  },
];
const posts: Post[] = [];
featuredPosts.forEach((featuredPost) => {
  const p = allPosts.find(
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
