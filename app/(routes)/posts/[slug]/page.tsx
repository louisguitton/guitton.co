import BlogLayout from "app/(routes)/posts/[slug]/components/BlogLayout";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import { notFound } from "next/navigation";

// ref: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const url = new URL(post.url, process.env.BASE_URL);
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    robots: { index: !post.draft },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastmod,
      expirationTime: undefined,
      section: post.categories ? post.categories[0] : undefined,
      authors: ["https://guitton.co/about"],
      tags: post.categories,
      images: [
        {
          url: post.image,
          alt: post.title,
          // TODO: add width & height otherwise it falls back to next-seo.config.ts
        },
      ],
    },
  };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      {/*
      References:
        - Google has excellent content on JSON-LD https://developers.google.com/search/docs/advanced/structured-data/article
        - Double check the generated JSON-LD integrates well (for Breadcrumbs, rating stars, prices, ...) https://search.google.com/test/rich-results
        - JSON-LD reference https://schema.org/Article
        - next-seo ref https://github.com/garmeeh/next-seo#article-1
      */}
      <ArticleJsonLd
        useAppDir={true}
        url={post.url}
        title={post.title}
        images={[post.image]}
        datePublished={post.date}
        dateModified={post.lastmod}
        authorName={["Louis Guitton"]}
        description={post.summary}
        publisherName="guitton.co"
        publisherLogo="/images/louis.jpg"
      />
      <BlogLayout post={post} />
    </>
  );
};

export default PostLayout;
