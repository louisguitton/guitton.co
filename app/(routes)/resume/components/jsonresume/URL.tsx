import { FC } from "react";

const URL: FC<{ website?: string }> = ({ website }) => {
  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-400 underline hover:text-blue-800 visited:text-purple-600"
      >
        {website}
      </a>
    );
  }
  return <></>;
};

export default URL;
