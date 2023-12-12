import { Container } from "@/components/layout/Container";
import clsx from "clsx";
import Image from "next/image";

function Hero() {
  return (
    <Container
      as="section"
      className="sm:grid sm:grid-cols-12 sm:gap-8 print:grid print:grid-cols-12 print:gap-8 pt-12"
    >
      <div className="sm:col-span-6 print:col-span-6">
        <h1>
          <span
            className={clsx(
              "flex mt-1",
              "text-4xl sm:text-5xl print:text-5xl",
              "font-extrabold tracking-tight"
            )}
          >
            <span className="block text-gray-900">Louis&nbsp;</span>
            <span className="inline-block text-primary">Guitton</span>
          </span>
          <span className="block text-sm font-semibold text-gray-500">
            {/* for SEO we need a space here */}
            <span className="hidden">&nbsp;-&nbsp;</span>
            ex VP of Engineering at <b>OneFootball</b>
          </span>
        </h1>
        <p className="mt-3 text-sm text-gray-500 sm:mt-5 print:mt-5">
          I am the ex-VP of Engineering at OneFootball Labs in Berlin, Germany.
          I am experienced with Natural Language Processing, Recommenders
          Systems, MVP Building and the Flow blockchain. I team up with clients
          to design and build transformative digital solutions, in particular in
          the Sustainability space.
        </p>
      </div>
      <button
        className={clsx(
          "relative mt-12 sm:mt-0 sm:col-span-6 sm:flex sm:items-center print:mt-0 print:col-span-6 print:flex print:items-center",
          "rounded-full shadow-lg h-56 w-56",
          "mx-auto",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        )}
      >
        <Image
          layout="fill"
          src="/images/louis.jpg"
          className="rounded-full"
          alt="Profile picture"
        />
      </button>
    </Container>
  );
}

export default Hero;
