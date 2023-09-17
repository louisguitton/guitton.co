"use client";
// Ref: https://tailwindui.com/components/application-ui/navigation/navbars#component-aaed25b299f2015d2c4276b98d463cee
// Ref: https://headlessui.dev/react/disclosure
import { Container } from "@/components/layout/Container";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/posts" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <Container
      as="header"
      className="px-1 sm:px-8 print:px-8 print:hidden w-full"
    >
      <Disclosure as="div" aria-labelledby="primary-navigation">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center space-x-2">
                  <ShoppingBagIcon className="w-8 h-8 fill-primary" />
                  <span
                    className={clsx(
                      "hidden sm:block print:block",
                      "text-xl font-black text-gray-900",
                      "select-none"
                    )}
                  >
                    guitton<span className="text-primary">.</span>co
                  </span>
                </Link>
                <nav className="hidden sm:ml-6 sm:flex sm:space-x-8 print:ml-6 print:flex print:space-x-8">
                  {navigation.map((nav) => {
                    return (
                      <Link
                        key={nav.name}
                        href={nav.href}
                        className={clsx(
                          "inline-flex  px-1 pt-1",
                          "text-sm font-medium",
                          "border-b-2",
                          pathname == nav.href
                            ? " text-gray-900 border-primary"
                            : "text-gray-500  border-transparent hover:border-gray-300 hover:text-gray-700"
                        )}
                      >
                        {nav.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="flex -mr-2 sm:hidden print:hidden">
                <Disclosure.Button
                  className={clsx(
                    "inline-flex justify-center p-2",
                    "text-gray-400 rounded-md",
                    "hover:text-gray-500 hover:bg-gray-100",
                    "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  )}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel
              as="nav"
              className={clsx("sm:hidden print:hidden", "pt-2 pb-3 space-y-1")}
            >
              {navigation.map((nav) => {
                return (
                  <Disclosure.Button
                    key={nav.name}
                    as="a"
                    href={nav.href}
                    className={clsx(
                      "block py-2 pl-3 pr-4",
                      "text-base font-medium",
                      "border-l-4",
                      pathname == nav.href
                        ? "bg-secondary border-primary text-primary"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    {nav.name}
                  </Disclosure.Button>
                );
              })}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Container>
  );
};

export default Header;
