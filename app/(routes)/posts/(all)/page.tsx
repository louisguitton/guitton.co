import PostCategory from "@/components/blog/PostCategory";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import clsx from "clsx";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("/posts", process.env.BASE_URL),
  title: "Blog",
  openGraph: {
    title: "guitton.co | Blog",
  },
};

const ListPostsPage = () => {
  const posts: Post[] = (allPosts as Post[]).sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="col-span-12 md:col-span-8">
      <PageIntro eyebrow="Blog" title="Last articles and news">
        <p>I write about Data, Machine Learning, Code, Projects or Ideas</p>
      </PageIntro>
      <Container>
        {posts.map((post) => {
          return (
            <div
              key={post.slug}
              className={clsx(
                "flex flex-col sm:flex-row print:flex-row items-center py-5"
              )}
            >
              <a className="relative w-full h-40 overflow-hidden sm:w-1/3 print:w-1/3">
                <Image
                  className="object-none transition duration-300 ease-out transform scale-100 sm:object-cover print:object-cover hover:scale-105"
                  src={post.image}
                  layout="fill"
                  alt={post.title}
                />
              </a>
              <div className="w-full pt-2 pl-5 sm:pt-0 sm:w-2/3 print:pt-0 print:w-2/3">
                <h2 className="relative mb-3 text-xl font-bold leading-tight">
                  <Link href={post.url}>{post.title}</Link>
                </h2>
                <p className="text-sm opacity-50">{post.summary}</p>
                <span className="relative flex items-center mt-3 text-xs opacity-90">
                  <PostCategory post={post} />
                  <time dateTime={post.date} className="ml-1">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                </span>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default ListPostsPage;
