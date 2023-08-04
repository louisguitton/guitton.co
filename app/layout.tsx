import { cn } from "@/lib/utils";
import { bg, px } from "@/styles/constants";
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@/styles/socials.css";
import { SocialProfileJsonLd } from "next-seo";
import Footer from "../components/Footer";
import GAScript from "../components/GAScript";
import Header from "../components/Header";

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
