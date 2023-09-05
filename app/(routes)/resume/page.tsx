import { Metadata } from "next";
import { resume } from "../../../lib/resume";
import PrintButton from "./components/PrintButton";
import Basics from "./components/jsonresume/Basics";
import Education from "./components/jsonresume/Education";
import Language from "./components/jsonresume/Language";
import Projects from "./components/jsonresume/Projects";
import Skills from "./components/jsonresume/Skills";
import Work from "./components/jsonresume/Work";

export const metadata: Metadata = {
  metadataBase: new URL("/resume", process.env.BASE_URL),
  title: "Resumé",
  description:
    "My CV is generated based on data that follows the Jsonschema at https://jsonresume.org/. It is then passed to ReactJS components.",
  openGraph: {
    title: "guitton.co | Resumé",
    description:
      "My CV is generated based on data that follows the Jsonschema at https://jsonresume.org/. It is then passed to ReactJS components.",
  },
};

const Resume = () => {
  return (
    <div>
      <PrintButton />
      <div className="py-1"></div>
      <div className="max-w-2xl mx-auto">
        <Basics basics={resume.basics} />
        <Work works={resume.work} />
        <Projects projects={resume.projects} />
        <Education educations={resume.education} />
        <Skills skills={resume.skills} />
        <Language languages={resume.languages} />
      </div>
    </div>
  );
};

export default Resume;
