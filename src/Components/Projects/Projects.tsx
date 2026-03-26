import { Section } from "../Section/Section";
import { projects } from "../../data/projects";
import { SingleProject } from "./SingleProject";

const Projects = () => {
  return (
    <Section sectionName="projekty">
      <ul>
        {projects.map((project, index) => {
          return <SingleProject key={index} project={project} index={index} />;
        })}
      </ul>
    </Section>
  );
};

export { Projects };
