import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import GATrack from "../components/GATrack";
import { seoMetadata } from "./seo";

export const metadata: Metadata = {
  ...seoMetadata,
  alternates: { canonical: "https://guitton.co/404" },
};

// Ref: https://tailwindui.com/components/marketing/feedback/404-pages
export default async function Custom404() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 print:grid print:place-items-center">
      <div className="mx-auto max-w-max">
        <main className="sm:flex print:flex">
          <p className="text-4xl font-extrabold text-primary sm:text-5xl print:text-5xl">
            404
          </p>
          <div className="sm:ml-6 print:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6 print:border-l print:border-gray-200 print:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl print:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6 print:border-l print:border-transparent print:pl-6">
              <Link href="/">
                <Button>Go back home</Button>
              </Link>

              <Link href="https://louisguitton.github.io/2055/">
                <Button variant="secondary">Play a game</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <GATrack action="404_page_reached" category="engagement" />
    </div>
  );
}
