import clsx from "clsx";
import { Post } from "contentlayer/generated";
import { FC } from "react";

interface Dictionary<T> {
  [Key: string]: T;
}

const colors: Dictionary<string> = {
  Data: "bg-violet-500",
  Code: "bg-sky-500",
  ML: "bg-fuchsia-500",
  Ideas: "bg-red-500",
  Projects: "bg-amber-500",
  Web3: "bg-emerald-500",
};

const PostCategory: FC<{ post: Post; className?: string }> = ({
  post,
  className,
  ...rest
}) => {
  if (post.categories) {
    return (
      <span
        className={clsx(
          className,
          "px-2 py-0.5",
          colors[post.categories[0]],
          "inline relative",
          "text-white text-xs uppercase"
        )}
        {...rest}
      >
        {post.categories[0]}
      </span>
    );
  }
  return <></>;
};

export default PostCategory;
