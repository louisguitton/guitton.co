import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import { resume } from "../../../lib/resume";
// import { resume } from "../../../lib/resume-em";
// import { resume } from "../../../lib/resume-gpu";
// import { resume } from "../../../lib/resume-sa";
import PrintButton from "./components/PrintButton";
import Basics from "./components/jsonresume/Basics";
import Certificates from "./components/jsonresume/Certificates";
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
    <Container>
      <PrintButton />
      <div>
        <Basics basics={resume.basics} />
        <Skills skills={resume.skills} />
        <Work works={resume.work} />
        <Certificates certificates={resume.certificates} />
        <Education educations={resume.education} />
        <Projects projects={resume.projects} />
        <Language languages={resume.languages} />
      </div>
    </Container>
  );
};

export default Resume;
