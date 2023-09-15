import clsx from "clsx";
import { FC } from "react";

// Ref: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
const YoutubeEmbed: FC<{ embedId: string; className?: string }> = ({
  embedId,
  className,
  ...rest
}) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className={clsx(className, "w-full aspect-video")}
      {...rest}
    />
  );
};

export default YoutubeEmbed;
