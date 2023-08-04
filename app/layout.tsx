import { cn } from "@/lib/utils";
import { bg, px } from "@/styles/constants";
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@/styles/socials.css";
import { Metadata } from "next";
import { SocialProfileJsonLd } from "next-seo";
import Footer from "../components/Footer";
import GAScript from "../components/GAScript";
import Header from "../components/Header";

export const metadata: Metadata = {
  viewport: "initial-scale=1.0, width=device-width",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
  title: "guitton.co | not Louis Vuitton",
  description:
    "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
  openGraph: {
    title: "guitton.co",
    description:
      "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/louis.jpg",
        width: 224,
        height: 224,
        alt: "Louis Guitton",
        type: "image/jpg",
      },
    ],
    siteName: "guitton.co",
  },
  twitter: {
    creator: "@louis_guitton",
    site: "@louis_guitton",
    card: "summary_large_image",
    title: "guitton.co",
    description:
      "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
    images: "/images/louis.jpg",
  },
  keywords: [
    "blog",
    "nlp",
    "machine learning",
    "data engineering",
    "python",
    "blockchain",
  ],
  authors: [{ name: "Louis Guitton", url: "https://guitton.co" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col",
          "h-screen",
          "max-w-screen-md mx-auto",
          bg
        )}
      >
        <Header />
        <main className={cn("flex-grow", px)}>{children}</main>
        <Footer />
        <GAScript />
        <SocialProfileJsonLd
          useAppDir={true}
          type="Person"
          name="Louis Guitton"
          // App currently does not support Next.js Data Fetching methods like getStaticProps or getServerSideProps.
          // Ref: https://nextjs.org/docs/advanced-features/custom-app#caveats
          url="https://guitton.co"
          sameAs={[
            "https://github.com/louisguitton",
            "https://twitter.com/louis_guitton",
            "https://discordapp.com/users/217929937842208768",
            "https://stackoverflow.com/users/3823815/louis-guitton",
            "https://linkedin.com/in/louisguitton/",
            "https://goodreads.com/user/show/58757583-louis",
          ]}
        />
      </body>
    </html>
  );
}
