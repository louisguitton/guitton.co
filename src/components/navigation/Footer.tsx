// Ref: https://devdojo.com/tails/app#_ Footer 3

import { Container } from "@/components/layout/Container";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

function isExternal(href: string) {
  return href.startsWith("http");
}

const navigation: {
  [key: string]: {
    name: string;
    href: string;
    indented?: boolean;
    icon?: IconDefinition;
  }[];
} = {
  site: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Imprint", href: "/impressum" },
    { name: "Résumé", href: "/resume" },
    { name: "Process", href: "/process" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/louis_guitton",
      icon: faTwitter,
    },
    { name: "Github", href: "https://github.com/louisguitton", icon: faGithub },
    {
      name: "Stackoverflow",
      href: "https://stackoverflow.com/users/3823815/louis-guitton",
      icon: faStackOverflow,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/louisguitton/",
      icon: faLinkedin,
    },
  ],
  other: [
    { name: "Awesome Tutos", href: "https://awesome-tutos.guitton.co" },
    { name: "2055", href: "https://louisguitton.github.io/2055/" },
    {
      name: "dbt-metadata-utils",
      href: "https://dbt-metadata-utils.guitton.co",
    },
  ],
};

const Footer: React.FC = () => {
  return (
    <Container
      as="footer"
      className="px-1 pt-12 w-full sm:px-8 print:px-8 print:hidden"
      aria-labelledby="footer-heading"
    >
      <div
        className={clsx("grid grid-cols-4 gap-8", "border-t border-gray-200")}
      >
        <div className={clsx("col-span-4", "text-sm text-gray-500", "pt-8")}>
          Made in 🇩🇪 Berlin with TypeScript, NextJS, TailwindCSS, and Vercel.
        </div>
        {Object.entries(navigation).map(([key, value]) => {
          return (
            <nav
              aria-labelledby="footer-navigation"
              className={clsx("col-span-1", "flex flex-col", "space-y-2")}
              key={key}
            >
              <p
                className={clsx(
                  "mb-1",
                  "text-xs font-semibold tracking-wider text-gray-400 uppercase"
                )}
              >
                {key}
              </p>
              {value.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "text-sm font-medium text-gray-500 hover:text-gray-700 hover:text-primary",
                    item.indented && "pl-5",
                    "flex space-x-1 items-center"
                  )}
                  target={isExternal(item.href) ? "_blank" : "_self"}
                >
                  {item.icon && (
                    <FontAwesomeIcon icon={item.icon} className={"w-4 h-4"} />
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          );
        })}
        <div className="col-span-4">
          <p className="mb-6 text-sm text-gray-500">
            © Copyright 2024 Louis Guitton. All Rights Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
