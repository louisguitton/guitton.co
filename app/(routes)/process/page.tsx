import { PageIntro } from "@/components/layout/PageIntro";
import { Metadata } from "next";
import { Build, Deliver, Discover } from "./components/Content";
import LogoCloud from "./components/LogoCloud";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My process" title="How I work">
        <p>
          I partner with my customers to{" "}
          <b>
            design, create, operate and accelerate capabilities and solutions
          </b>{" "}
          that generate the greatest possible impact. I&apos;m particularly
          interested in <b>creating environmental impact</b>. So I&apos;m
          concentrating on putting my knowledge at the service of 2 fields of
          application: CleanTech and AgriTech.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base prose">
          <p>
            I&apos;m the former VP of Engineering at OneFootball Labs, and
            I&apos;m also a freelance engineer. I&apos;ve been working with tech
            and data since 2014, and have 3 entrepreuneurial experiences. Both
            entrepreneur and developer, I bring together complex skills: AI,
            deep tech, digital growth.
          </p>
          <p>
            I develop custom web applications. I design cutting-edge systems
            that transform my customers&apos; core businesses.
          </p>
        </div>
      </PageIntro>
      <LogoCloud />
      <div className="space-y-24 [counter-reset:section] sm:space-y-32 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      {/* TODO: add CRM form */}
    </>
  );
}
