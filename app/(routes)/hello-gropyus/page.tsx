import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/button";
import { Post, allPosts } from "contentlayer/generated";
import { Linkedin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import FeaturedPosts from "../(home)/components/FeaturedPosts";
import LogoCloud from "../process/components/LogoCloud";
import FourFeatures from "./components/FourFeatures";
import ThreeContent from "./components/ThreeContent";
import ThreeProjects from "./components/ThreeProjects";

export const metadata: Metadata = {
  title: "Hi I'm Louis Guitton",
  description:
    "I'm a technology, data and product leader who has created, scaled, and maintained award-winning products.",
};

export default function Process() {
  const featuredPosts = ["/posts/graphs-and-language/", "/posts/wikidata/"];
  const posts: Post[] = [];
  featuredPosts.forEach((featuredPost) => {
    const p = allPosts.find((post) => `/posts/${post.slug}/` == featuredPost);
    if (p) posts.push(p);
  });

  return (
    <>
      <PageIntro eyebrow="Hi GROPYUS," title="I'm Louis Guitton">
        <div className="prose text-xl">
          <p>
            I am an <b>engineering and data leader</b> who has created, scaled
            and maintained deep-tech products and teams.
          </p>
          <p>
            I am currently self-employed, supporting clients working on{" "}
            <b>Environmental Impact products</b> as a freelance Solutions
            Architect. Previously, I spent five years helping{" "}
            <a href="https://company.onefootball.com/">OneFootball</a> grow,
            guiding their adoption of <i>Machine Learning</i>,{" "}
            <i>Natural Language Processing</i> and <i>Knowledge Graphs</i>.
          </p>
          <p>
            After starting my career at Bosch and EDF in the energy sector, I
            honed my Machine Learning skills at startups like Dojo Madness
            (Bayes Esports) and OneFootball. Today, I have focused my career on
            leveraging my tech skills to generate an{" "}
            <b>outsized environmental impact</b> and helping well-positioned
            teams <b>adopt cutting-edge technologies</b> to thrive.
          </p>
          <div className="grid grid-cols-2 text-center items-center">
            <Link href={"https://www.linkedin.com/in/louisguitton/"}>
              <Button className="text-lg">
                <Linkedin className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
                Connect on LinkedIn
              </Button>
            </Link>
            <Link href={"/Louis_Guitton_Resume.pdf"} className="text-base">
              View Résumé
            </Link>
          </div>
        </div>
      </PageIntro>
      <LogoCloud />
      <div className="[counter-reset:section] space-y-12">
        <ThreeProjects />
        <FourFeatures />
        <ThreeContent />
      </div>
      <FeaturedPosts posts={posts} />
    </>
  );
}
