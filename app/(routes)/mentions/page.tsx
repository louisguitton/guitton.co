import { PageIntro } from "@/components/layout/PageIntro";
import {
  faHackerNews,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { isExternal } from "util/types";

export const metadata: Metadata = {
  title: "Mentions",
  description: "The online mentions of guitton.co",
  robots: {
    index: false,
  },
};

const mentions = [
  {
    name: "Reddit",
    href: "https://www.reddit.com/search.json?sort=new&q=site:guitton.co%20OR%20author:laguitte%20OR%20selftext:%22guitton.co%22",
    icon: faReddit,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/search?q=%22guitton.co%22%20-from%3Alouis_guitton%20-%40louis_guitton%20-bag%20-purse%20-from%3Alouisguitton&src=typed_query&f=live",
    icon: faTwitter,
  },
  {
    name: "Hackernews",
    href: "https://news.ycombinator.com/from?site=guitton.co",
    icon: faHackerNews,
  },
];

export default function Mentions() {
  return (
    <>
      <PageIntro eyebrow="guitton.co" title="Online mentions">
        <ul>
          {mentions.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={clsx(
                  "text-sm font-medium text-gray-500 hover:text-gray-700 hover:text-primary",
                  "flex space-x-1 items-center"
                )}
                target={isExternal(item.href) ? "_blank" : "_self"}
              >
                {item.icon && (
                  <FontAwesomeIcon icon={item.icon} className={"w-4 h-4"} />
                )}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </PageIntro>
    </>
  );
}
