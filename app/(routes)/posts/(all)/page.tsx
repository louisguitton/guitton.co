import clsx from "clsx";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PostCategory from "../../../../components/PostCategory";
import { getAllPosts } from "../../../../lib/posts";

export const metadata: Metadata = {
  metadataBase: new URL("/posts", process.env.BASE_URL),
  title: "Blog",
  openGraph: {
    title: "guitton.co | Blog",
  },
};

const ListPostsPage = () => {
  const allBlogs = getAllPosts();

  return (
    <div className="col-span-12 md:col-span-8">
      <div className="relative overflow-hidden border-b-2 border-primary">
        <h1 className="px-3 py-1.5 bg-primary text-white uppercase text-sm inline-block font-medium">
          Blog Posts
        </h1>
      </div>

      {allBlogs.map((p, index, row) => {
        const isLast = index + 1 === row.length;
        return (
          <div
            key={p.slug}
            className={clsx(
              "flex flex-col sm:flex-row print:flex-row items-center py-5",
              !isLast && "border-b border-gray-900"
            )}
          >
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
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="text-sm opacity-50">{p.summary}</p>
              <span className="relative flex items-center mt-3 text-xs opacity-90">
                <PostCategory post={p} />
                <span className="ml-1">
                  {moment(p.date).format("MMMM DD, YYYY")}
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPostsPage;
