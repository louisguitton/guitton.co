import { FC } from "react";
import { Section } from "./Section";
import { Certificate } from "./types";

const Certificates: FC<{ certificates: Certificate[] }> = ({
  certificates,
}) => {
  if (certificates.length) {
    return (
      <Section name="certificates">
        {certificates.map((certificate, i) => {
          return (
            <section key={i} className="min-w-full text-xs">
              <header className="grid grid-cols-1 sm:grid-cols-5 print:grid-cols-5">
                <div className="float-left break-normal sm:col-span-4 print:col-span-4">
                  <div className="inline font-semibold">{certificate.name}</div>
                  <div className="inline pl-1 font-normal text-gray-600">
                    from {certificate.issuer}
                  </div>
                  <a
                    href={certificate.url}
                    className="inline pl-1 text-xs text-blue-400 underline hover:text-blue-800 visited:text-purple-600"
                  >
                    show credential
                  </a>
                </div>
                <div className="sm:col-end-[-1] print:col-end-[-1] font-bold text-gray-800 text-right">
                  {certificate.date}
                </div>
              </header>
            </section>
          );
        })}
      </Section>
    );
  }
  return <></>;
};

export default Certificates;
