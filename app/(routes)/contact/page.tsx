// Ref: https://tailwindui.com/components/marketing/sections/contact-sections
import { ContactFormMobile } from "@/components/forms/ContactFormMobile";
import { Postcard } from "@/components/forms/Postcard";
import { PageIntro } from "@/components/layout/PageIntro";
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
    <div>
      <PageIntro eyebrow="Contact me" title="Send me a postcard">
        <p>I can&apos;t wait to hear from you.</p>
      </PageIntro>
      <div className="relative max-w-xl mx-auto">
        <div className="mt-12 sm:hidden print:hidden">
          <ContactFormMobile />
        </div>
        <div className="hidden mt-12 sm:block print:block">
          <Postcard />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
