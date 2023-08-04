"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Oops.
          </p>
          <p className="mb-4 text-lg font-light text-left text-gray-500 dark:text-gray-400">
            {error.name}: {error.message} <br />
            <br />
            {error.stack}
          </p>
          <Button onClick={reset}>Reessayer</Button>
        </div>
      </div>
    </section>
  );
}
