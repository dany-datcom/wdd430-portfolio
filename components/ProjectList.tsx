import ProjectCard from "./ProjectCard";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

interface ProjectListProps {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
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