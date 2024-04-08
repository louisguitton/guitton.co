import { Boxes, Code, Infinity, Rocket } from "lucide-react";

const features = [
  {
    name: "Full Stack Development",
    description:
      "I'm fluent in TypeScript, NextJS, PostgreSQL and other modern web technologies required to innovate and launch MVPs.",
    icon: Code,
  },
  {
    name: "Design Thinking",
    description:
      "I am a IBM-certified Enterprise Design Thinking co-creator, innovating in constant 'Observe, Reflect, Make' cycles, and collaborating with Product and Design teams.",
    icon: Infinity,
  },
  {
    name: "Engineering Management",
    description:
      "I have hired, built and managed 4 remote and hybrid teams for engineering, data, product and design of 20 staff.",
    icon: Boxes,
  },
  {
    name: "Entrepreneurship",
    description:
      "I have launched 2 pre-PMF ventures (one within an accelerator and one bootstrapped) and co-founded a joint-venture within a scale-up.",
    icon: Rocket,
  },
];

export default function FourFeatures() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            More than NLP
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Other skills I bring to the table
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            My past experiences and skills offer a unique combination that can
            help GROPYUS thrive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
