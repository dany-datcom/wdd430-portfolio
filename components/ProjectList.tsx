import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
}