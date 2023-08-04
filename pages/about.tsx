import { Button } from "@/components/ui/button";
import { CheckIcon, PaperClipIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import moment from "moment";
import type { GetStaticProps, NextPage } from "next";
import { BreadcrumbJsonLd, NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    // For SEO
    host: process.env.BASE_URL!,
    url: new URL("/about", process.env.BASE_URL).href,
  },
});

const AboutPage: NextPage<{ host: string; url: string }> = ({ host, url }) => {
  const { data, error } = useSWR<
    {
      createdAt: string;
      url: string;
      title: string;
      repository: string;
      repositoryDescription: string;
    }[]
  >("/api/github/contributions?limit=5", fetcher);
  let githubState: ReactElement = <></>;
  if (error) githubState = <div>failed to load</div>;
  if (!data) githubState = <div>loading...</div>;
  if (data) {
    githubState = (
      <ul>
        {data.map((contrib, i) => {
          return (
            <a
              key={i}
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <li className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-gray-400" />
                  <span>
                    {contrib.title} on <b>{contrib.repository}</b>
                  </span>
                </span>
                <span className="font-light text-gray-500">
                  {moment(contrib.createdAt).format("MMMM DD, YYYY")}
                </span>
              </li>
            </a>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <NextSeo
        title="About"
        canonical={url}
        openGraph={{
          title: "guitton.co | About",
          url: url,
          type: "profile",
          profile: {
            firstName: "Louis",
            lastName: "Guitton",
            gender: "male",
            username: "louis_guitton",
          },
        }}
        additionalMetaTags={[
          {
            property: "article:published_time",
            content: new Date(2019, 5, 14).toISOString(),
          },
          {
            property: "article:modified_time",
            content: new Date().toISOString(),
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "guitton.co",
            item: host,
          },
          {
            position: 2,
            name: "about",
            item: url,
          },
        ]}
      />

      <section id="about-card" className="pb-4">
        <div className="overflow-hidden shadow sm:rounded-lg print:rounded-lg">
          <div className="px-4 py-5 sm:px-6 print:px-6">
            <h1 className="text-lg font-medium leading-6 text-gray-900">
              About me
            </h1>
            <p className="max-w-2xl mt-1 text-sm text-gray-500">
              No, I&apos;m not Louis Vuitton.
            </p>
          </div>
          <div className="px-4 py-5 border-t border-gray-200 sm:px-6 print:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 print:grid-cols-2">
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900">Louis Guitton</dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900">admin@guitton.co</dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Occupation
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Software Engineer and occasional Blogger
                </dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Interests</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  NLP, MLOps, RecSys, Python, SSG, Blockchain
                </dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Born in</dt>
                <dd className="mt-1 text-sm text-gray-900">🇫🇷 France</dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Residence</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul>
                    <li>🇩🇪 Berlin, Germany (current)</li>
                    <li>🇫🇷 Paris, France</li>
                    <li>🇸🇬 Singapore, Singapore</li>
                    <li>🇬🇧 Brighton, United Kingdom</li>
                  </ul>
                </dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Educated at
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul>
                    <li>
                      <a
                        href="https://www.slideshare.net/louisguitton5/presentation-mines-paristech-50518444"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mines ParisTech - Paris, France
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bginette.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ginette - Versailles, France
                      </a>
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="sm:col-span-1 print:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Part of</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul>
                    <li>OneFootball Medienliga team - ⚽️ football team</li>
                    <li>
                      Entrepreneur First BE1 - 🦡 startup incubator alumni
                    </li>
                    <li>Blogging for Devs - blogger community</li>
                    <li>Scott&apos;s Bass Lesson - 🎸 online bass school</li>
                  </ul>
                </dd>
              </div>
              <div className="sm:col-span-2 print:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm prose text-gray-900">
                  I am a Software Engineer from France living in Berlin. I have{" "}
                  <i>freelance</i> and <i>entrepreneurial</i> experience. I have
                  experience with Natural Language Processing in Python, and let
                  my curiosity guide me to other topics.
                  <ol>
                    In general, I look for opportunities where I can:
                    <li>learn and grow as an engineer</li>
                    <li>influence the technology around me</li>
                  </ol>
                  This is, for example, why I enjoy open source so much.
                </dd>
              </div>
              <div className="sm:col-span-2 print:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul
                    role="list"
                    className="border border-gray-200 divide-y divide-gray-200 rounded-md"
                  >
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex items-center flex-1 w-0">
                        <PaperClipIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex-1 w-0 ml-2 truncate">Resumé</span>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <Link href={"/resume"}>
                          <Button>Open</Button>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div
            className={clsx(
              "px-4 py-5 border-t border-gray-200 sm:px-6 print:px-6",
              "grid grid-cols-1 sm:grid-cols-12 gap-10 print:grid-cols-12"
            )}
          >
            <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
              <Image
                layout="fill"
                src="/images/ef_countdown.jpg"
                alt="Entrepreneur First"
                className="object-contain"
              />
            </div>
            <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
              <Image
                layout="fill"
                src="/images/in_my_room.jpg"
                alt="Playing Music"
                className="object-contain"
              />
            </div>
            <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
              <Image
                layout="fill"
                src="/images/singapore.jpg"
                alt="Singapore"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="feed" className="pb-4 prose max-w-none">
        <h2>Latest Open Source Contributions</h2>
        {githubState}
      </section>
      <section id="freelance" className="prose">
        <h2>Freelance Services</h2>
        Since 2015, I offer freelance services on the side of my main job.
        <ol>
          <li>
            {" "}
            <em>Data Solutions</em>: Built data stack for entrepreneurship NGO
            and fintech startup. Deliver airflow workshop for automotive digital
            lab.
          </li>
          <li>
            <em>Teaching</em>: Built and taught ML and IoT classes for
            engineering MBA in Paris.
          </li>
          <li>
            <em>Websites or MVPs</em>: Built 10+ websites for friends and family
            with either (in order of complexity) Google Sites, Wordpress, Hugo,
            NextJS.
          </li>
        </ol>
        If you&apos;re interested in my services,{" "}
        <Link href={"/contact"}>feel free to reach out</Link>.
      </section>
    </>
  );
};

export default AboutPage;
