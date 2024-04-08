import { StylizedImage } from "app/(routes)/process/components/StylizedImage";
import { Newspaper, Sun, Wifi } from "lucide-react";
import imageLaptop from "public/images/freelance/launch.jpg";

const features = [
  {
    name: "Precision Livestock Farming platform with IoT.",
    description:
      "For the french HVAC manufacturer Sodistra, I have developed the product strategy of a precision livestock farming platform leveraging IoT and Computer Vision.",
    icon: Wifi,
  },
  {
    name: "Digital Twin of Solar Carport.",
    description:
      "For the french solar installer IDEX and the french EV-charger manufacturer Sparklin, I have developed a reference architecture for a digital twin of a solar carport allowing to monitor performance in real-time and trigger EV charging dynamically.",
    icon: Sun,
  },
  {
    name: "News tagging with Knowledge Graphs.",
    description:
      "For OneFootball, I have designed, built and maintained a news tagging platform using Knowledge Graphs, unlocking growth through multi-lingual and automated news tagging and enabling new features like recommendations.",
    icon: Newspaper,
  },
];

export default function ThreeProjects() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Relevant Experiences
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My recent projects are relevant to GROPYUS
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="w-full flex-none lg:w-[45rem]">
              <StylizedImage
                {...imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
