import { FC } from "react";
import Keywords from "./Keywords";
import { Section } from "./Section";
import { Skill } from "./types";

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  if (skills.length) {
    return (
      <Section name="skills">
        <div className="grid w-full grid-cols-1 gap-1">
          {skills.map((skill, i) => {
            return (
              <div key={i} className="overflow-hidden grid grid-cols-6">
                <h3 className="font-semibold col-span-2">{skill.name}</h3>
                <div className="col-span-4">
                  <Keywords keywords={skill.keywords} itemIndex={i} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    );
  }
  return <></>;
};

export default Skills;
