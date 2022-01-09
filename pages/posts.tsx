import { GetStaticProps, NextPage } from "next";
import { BreadcrumbJsonLd, NextSeo } from "next-seo";
import Link from "next/link";
import moment from "moment";
import clsx from "clsx";
import Image from "next/image";
import { Blog } from "../lib/types";
import { getAllPosts } from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    allBlogs: getAllPosts(),
    // For SEO
    host: process.env.BASE_URL!,
    url: new URL("/posts", process.env.BASE_URL).href,
  },
});

const ListPostsPage: NextPage<{
  allBlogs: Blog[];
  host: string;
  url: string;
}> = ({ allBlogs, host, url }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        canonical={url}
        openGraph={{
          title: "guitton.co | Blog",
          url: url,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "guitton.co",
            item: host,
          },
          {
            position: 2,
            name: "blog",
            item: url,
          },
        ]}
      />

      <div className="col-span-12 md:col-span-8">
        <div className="relative overflow-hidden border-b-2 border-primary-500">
          <h2 className="px-3 py-1.5 bg-primary-500 text-white uppercase text-sm inline-block font-medium">
            Blog Posts
          </h2>
        </div>

        {allBlogs.map((p, index, row) => {
          const isLast = index + 1 === row.length;
          return (
            <div
              key={p.slug}
              className={clsx(
                "flex flex-col sm:flex-row print:flex-row items-center py-5",
                !isLast && "border-b border-gray-900"
              )}>
              <a className="relative w-full h-40 overflow-hidden sm:w-1/3 print:w-1/3">
                <Image
                  className="object-none transition duration-300 ease-out transform scale-100 sm:object-cover print:object-cover hover:scale-105"
                  src={p.image}
                  layout="fill"
                  alt={p.title}
                />
              </a>
              <div className="w-full pt-2 pl-5 sm:pt-0 sm:w-2/3 print:pt-0 print:w-2/3">
                <h2 className="relative mb-3 text-xl font-bold leading-tight">
                  <Link href={`/posts/${p.slug}`}>
                    <a>{p.title}</a>
                  </Link>
                </h2>
                <p className="text-sm opacity-50">{p.summary}</p>
                <span className="relative flex mt-3 text-xs opacity-90">
                  <span className="mr-1 font-semibold">
                    {p.categories?.join(" - ")}
                  </span>
                  ·
                  <span className="ml-1">
                    {moment(p.date).format("MMMM DD, YYYY")}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListPostsPage;
