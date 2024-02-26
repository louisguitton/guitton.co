import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import { resume } from "../../../lib/resume-gpu";
import PrintButton from "../resume/components/PrintButton";
import Basics from "../resume/components/jsonresume/Basics";
import Education from "../resume/components/jsonresume/Education";
import Language from "../resume/components/jsonresume/Language";
import Projects from "../resume/components/jsonresume/Projects";
import Skills from "../resume/components/jsonresume/Skills";
import Work from "../resume/components/jsonresume/Work";

export const metadata: Metadata = {
  metadataBase: new URL("/resume-gpu", process.env.BASE_URL),
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
        <Work works={resume.work} />
        <Projects projects={resume.projects} />
        <Education educations={resume.education} />
        <Skills skills={resume.skills} />
        <Language languages={resume.languages} />
      </div>
    </Container>
  );
};

export default Resume;
