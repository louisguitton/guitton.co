import WorkInquiries from "@/components/forms/WorkInquiries";
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
      <div className="mt-24 sm:mt-32 lg:mt-40 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="relative px-6 py-24 overflow-hidden bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-24 xl:py-32">
          <p className="text-base font-semibold leading-7 text-center text-white">
            Contact me
          </p>
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-lg leading-8 text-center text-gray-300">
            I can&apos; wait to hear from you
          </p>
          <WorkInquiries />
          {/* background */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                {/* https://uigradients.com/#Tranquil */}
                <stop stopColor="#ef629f" />
                <stop offset={1} stopColor="#eecda3" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
