import { FC } from "react";
import ItemDetails from "./ItemDetails";
import Keywords from "./Keywords";
import { Section } from "./Section";
import { Project } from "./types";

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  if (projects.length) {
    return (
      <Section name="projects">
        <div className="grid grid-cols-1 gap-2">
          {projects.map((project, i) => {
            return (
              <section key={i} className="min-w-full">
                <div className="grid grid-cols-6 gap-2">
                  <div className="text-xs font-semibold col-span-1">
                    {project.name}
                  </div>
                  <div className="col-span-5">
                    <ItemDetails
                      summary={project.summary}
                      highlights={project.highlights}
                      itemIndex={i}
                    />
                  </div>
                </div>

                <Keywords keywords={project.keywords} itemIndex={i} />
              </section>
            );
          })}
        </div>
      </Section>
    );
  }
  return <></>;
};

export default Projects;
