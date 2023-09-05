"use client";
import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "../ui/button";

export const ContactFormMobile = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <form
      action="/api/amazon/send-email"
      method="POST"
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 print:col-span-2 print:gap-x-8"
    >
      <div className="sm:col-span-2 print:col-span-2">
        <label
          htmlFor="full-name"
          className="block text-sm font-medium text-gray-700"
        >
          Full name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="full-name"
            className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="sm:col-span-2 print:col-span-2">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="sm:col-span-2 print:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="sm:col-span-2 print:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2 print:col-span-2">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={clsx(
                agreed ? "bg-primary" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={clsx(
                  agreed ? "translate-x-5" : "translate-x-0",
                  "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
          </div>
          <div className="ml-3">
            <p className="text-base text-gray-500">
              By selecting this, you agree to the{" "}
              <a
                href="#"
                className="font-medium text-gray-700 underline cursor-not-allowed"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-medium text-gray-700 underline cursor-not-allowed"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2 print:col-span-2">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
