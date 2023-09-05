import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Button } from "../ui/button";

export const Postcard = () => (
  <form
    action="/api/amazon/send-email"
    method="POST"
    className="grid w-full grid-cols-2 grid-rows-6 p-2 border-2 border-gray-900 divide-x gap-y-6 gap-x-8 h-[26rem]"
  >
    <div className="flex flex-col col-span-1 row-span-full">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="flex-grow block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        defaultValue={""}
      />
    </div>
    <div className="col-span-1 pl-8 row-span-full">
      <div className={clsx("relative row-span-2", "h-28", "grid grid-cols-3")}>
        <Button
          type="submit"
          className={cn(
            "col-end-[-1] col-span-1",
            "h-28",
            "inline-flex items-center justify-center px-6 py-3"
          )}
        >
          Send
        </Button>
      </div>
      <div className="row-span-1 py-8"></div>
      <div className="row-span-1">
        <label
          htmlFor="full-name"
          className="block text-sm font-medium text-gray-700"
        >
          Full name
        </label>
        <div>
          <input
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="full-name"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <div>
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="row-span-1 py-4"></div>
    </div>
  </form>
);
