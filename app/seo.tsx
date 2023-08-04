import { Metadata } from "next";

export const seoMetadata: Metadata = {
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
