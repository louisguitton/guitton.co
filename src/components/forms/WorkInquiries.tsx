"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Spinner from "../input-and-actions/Spinner";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";

export const formSchema = z.object({
  "first-name": z.string().min(2).max(50),
  "last-name": z.string().min(2).max(50),
  email: z.string().email(),
  company: z.string().min(2).max(50),
  message: z.string().optional(),
  // TODO: validate that consent is true
  consent: z.boolean(),
});

const WorkInquiries = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { consent: true },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="first-name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white block text-sm font-semibold leading-6">
                    First name
                  </FormLabel>
                  <FormControl className="mt-2.5">
                    <Input
                      type="text"
                      autoComplete="given-name"
                      {...field}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Louis"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last-name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white block text-sm font-semibold leading-6">
                    Last name
                  </FormLabel>
                  <FormControl className="mt-2.5">
                    <Input
                      {...field}
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Vuitton"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel className="block text-sm font-semibold leading-6 text-white">
                    Company
                  </FormLabel>
                  <FormControl className="mt-2.5">
                    <Input
                      type="text"
                      autoComplete="organization"
                      {...field}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="LVMH"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </FormLabel>
                  <FormControl className="mt-2.5">
                    <Input
                      type="email"
                      autoComplete="email"
                      {...field}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="data@lvmh.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel className="block text-sm font-semibold leading-6 text-white">
                    Message
                  </FormLabel>
                  <FormControl className="mt-2.5">
                    <Textarea
                      {...field}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Tell me a bit more about your project here."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex-grow flex flex-row items-center justify-between rounded-lg p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base text-white">
                      Privacy policy
                    </FormLabel>
                    <FormDescription className="text-base text-gray-300">
                      You agree to your data being processed by my website
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            {form.formState.isSubmitting ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Let&apos;s talk
              </button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default WorkInquiries;
