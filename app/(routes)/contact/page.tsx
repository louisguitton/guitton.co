// Ref: https://tailwindui.com/components/marketing/sections/contact-sections
import { ContactFormMobile } from "@/components/forms/ContactFormMobile";
import { Postcard } from "@/components/forms/Postcard";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("/contact", process.env.BASE_URL),
  title: "Contact",
  openGraph: {
    title: "guitton.co | Contact",
  },
};

const ContactPage = () => {
  return (
    <main>
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl print:text-4xl">
            Send me a postcard
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            You can just say Hi, or Thanks or share an interesting opportunity.
          </p>
        </div>
        <div className="mt-12 sm:hidden print:hidden">
          <ContactFormMobile />
        </div>
        <div className="hidden mt-12 sm:block print:block">
          <Postcard />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
