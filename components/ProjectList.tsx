import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className="grid gap-4">
      {projects.map((p, i) => (
        <ProjectCard key={i} title={p} />
      ))}
    </div>
  );
}   