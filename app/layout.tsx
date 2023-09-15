import GAScript from "@/lib/ga/GAScript";
import { cn } from "@/lib/utils";
import { bg, px } from "@/styles/constants";
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@/styles/socials.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";
import { SocialProfileJsonLd } from "next-seo";
import Footer from "../components/Footer";
import Header from "../components/Header";
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://guitton.co"),
  title: {
    default: "Louis Guitton",
    template: "%s | Louis Guitton",
  },
  description: "Not Louis Vuitton but a developer and writer.",
  openGraph: {
    title: "Louis Guitton",
    description: "Not Louis Vuitton but a developer and writer.",
    url: "https://guitton.co",
    siteName: "Louis Guitton",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Louis Guitton",
    card: "summary_large_image",
  },
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
