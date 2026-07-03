type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <p className="mb-4">{description}</p>

      <div className="mb-4">
        <strong>Technologies:</strong>
        <ul className="list-disc list-inside">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <a
        href={link}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}