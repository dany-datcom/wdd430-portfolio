import { getProjects } from '@/lib/projects-db';

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Projects
        </h1>

        <p className="text-slate-600">
          A collection of my school and open source projects.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-lg border p-6 shadow-sm bg-white"
          >
            <h2 className="text-xl font-bold">
              {project.title}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {project.description}
            </p>

            <p className="mt-3 text-sm">
              <strong>Type:</strong> {project.type}
            </p>

            <div className="mt-3">
              <strong>Technologies:</strong>

              <ul className="list-disc ml-5">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 mt-4 inline-block"
              >
                View Project
              </a>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}