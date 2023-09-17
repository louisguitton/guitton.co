import PostCategory from "@/components/blog/PostCategory";
import YoutubeEmbed from "@/components/blog/YoutubeEmbed";
import { Container } from "@/components/layout/Container";
import { CalendarIcon, CollectionIcon } from "@heroicons/react/solid";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  YoutubeEmbed,
};

// Ref: https://tailwindcss.com/docs/typography-plugin
const BlogLayout: React.FC<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <Container
      as="article"
      className="relative px-4 sm:px-6 lg:px-8 print:px-8 pt-12"
    >
      <div className="text-lg">
        <div className="relative w-full h-96">
          <Image
            src={post.image}
            layout="fill"
            alt={post.title}
            className="object-contain object-center"
          />
        </div>
        <h1 className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl print:text-4xl">
          {post.title}
        </h1>
        <p className="flex mt-8 text-xl leading-8 text-gray-500">
          <time dateTime={post.date} className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-1" />{" "}
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <span className="px-2" />
          <span className="flex items-center font-semibold">
            <CollectionIcon className="w-5 h-5 mr-1" />
            <PostCategory post={post} />
          </span>
        </p>
      </div>
      <div className="mx-auto mt-6 prose prose-indigo">
        <MDXContent components={mdxComponents} />
      </div>
    </Container>
  );
};

export default BlogLayout;
