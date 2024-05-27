import { PageIntro } from "@/components/layout/PageIntro";
import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import { Metadata } from "next";
import { Fragment } from "react";
import LogoCloud from "../process/components/LogoCloud";

export const metadata: Metadata = {
  title: "Our Pricing",
  description:
    "We offer 3 standard packages for the maximum clarity on scope and pricing.",
};

type Tiers = "Discovery Call" | "Technical Discovery" | "Iteration Delivery";
const tiers: {
  name: Tiers;
  id: string;
  href: string;
  price: string;
  description: string;
  mostPopular: boolean;
}[] = [
  {
    name: "Discovery Call",
    id: "tier-basic",
    href: "#",
    price: "€100",
    description:
      "We have a 1h call where I help you refine your idea. I follow-up with a quote.",
    mostPopular: false,
  },
  {
    name: "Technical Discovery",
    id: "tier-essential",
    href: "#",
    price: "€1 000",
    description:
      "I design your application. We have 1 session to iterate per client feedback.",
    mostPopular: false,
  },
  {
    name: "Iteration Delivery",
    id: "tier-premium",
    href: "#",
    price: "€10 000",
    description: "I develop and deliver the application to the team.",
    mostPopular: true,
  },
];

const sections: {
  name: string;
  features: {
    name: string;
    tiers: {
      [key in Tiers]: string | boolean;
    };
  }[];
}[] = [
  {
    name: "Format",
    features: [
      {
        name: "Fast delivery",
        tiers: {
          "Discovery Call": "3 days",
          "Technical Discovery": "21 days",
          "Iteration Delivery": "30 days",
        },
      },
      {
        name: "Include revisions",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": "1",
          "Iteration Delivery": "2",
        },
      },
      {
        name: "Extra fast delivery available",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": "7 days delivery + €1 000",
          "Iteration Delivery": false,
        },
      },
    ],
  },
  {
    name: "Features",
    features: [
      {
        name: "Include technical calls",
        tiers: {
          "Discovery Call": true,
          "Technical Discovery": true,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Include technical documentation",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": true,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Include source code",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
    ],
  },
  {
    name: "Extra Services",
    features: [
      {
        name: "Compatible with App design",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Compatible with Database integration",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Compatible with Cloud deployment",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Compatible with AI model fine-tuning",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
      {
        name: "Compatible with Additional revisions",
        tiers: {
          "Discovery Call": false,
          "Technical Discovery": false,
          "Iteration Delivery": true,
        },
      },
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <PageIntro eyebrow="My prices" title="Compare Packages">
        <p>
          I will <b>build an AI solution</b> for you leveraging <b>NLP</b> or{" "}
          <b>Computer Vision</b>, that will transform your core business. I
          partner with my customers to design, create, operate and accelerate
          capabilities that generate the greatest possible impact.
        </p>
        <p className="prose mt-4">
          I offer different packages:
          <ul>
            <li>
              <b>Project-based</b>: I work for a lump sum upon completion of the
              project
            </li>
            <li>
              <b>Retainer-based</b>: I am willing to offer hours of availability
              each month for a retainer
            </li>
            <li>
              <b>Cascading rate</b>: I will give you an upfront estimate of the
              time needed to complete a given project, and if we go over this
              initial estimate, I will work at a different rate (not necessarily
              superior) for subsequent hours
            </li>
          </ul>
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={cn(
                tier.mostPopular
                  ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200"
                  : "",
                "p-8"
              )}
            >
              <h3
                id={tier.id}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-2 flex items-baseline gap-x-1",
                  tier.mostPopular ? "text-primary" : "text-gray-900"
                )}
              >
                <span className="text-4xl font-bold">{tier.price}</span>
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-900"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-primary"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <span className="text-sm leading-6 text-gray-500">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{
                    marginLeft: `${
                      (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                    }%`,
                  }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="text-sm font-semibold leading-7 text-gray-900">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div
                        className={cn(
                          "flex items-baseline gap-x-1",
                          tier.mostPopular ? "text-primary" : "text-gray-900"
                        )}
                      >
                        <span className="text-4xl font-bold">{tier.price}</span>
                      </div>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cn(
                          sectionIdx === 0 ? "pt-8" : "pt-16",
                          "pb-4 text-sm font-semibold leading-6 text-gray-900"
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-sm font-normal leading-6 text-gray-900"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <div className="text-center text-sm leading-6 text-gray-500">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-primary"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LogoCloud />
    </>
  );
}
