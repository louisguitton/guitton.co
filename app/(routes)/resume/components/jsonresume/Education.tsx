import { FC } from "react";
import Keywords from "./Keywords";
import Location from "./Location";
import { Section } from "./Section";
import TimedHeader from "./TimedHeader";
import { Education } from "./types";

const Education: FC<{ educations: Education[] }> = ({ educations }) => {
  if (educations.length) {
    return (
      <Section name="education">
        {educations.map((education, i) => {
          return (
            <section key={i} className="min-w-full text-xs">
              <TimedHeader
                name={`${education.studyType} ${education.area}`}
                org={education.institution}
                startDate={education.startDate}
                endDate={education.endDate}
              />
              <Location location={education.location} />
              <Keywords keywords={education.courses} itemIndex={i} />
            </section>
          );
        })}
      </Section>
    );
  }
  return <></>;
};

export default Education;
