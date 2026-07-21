import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from '@/lib/projects-db';

import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import DeleteButton from '@/components/DeleteButton'; 
import Link from 'next/link';
export const dynamic = 'force-dynamic';


export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const params = await searchParams;

  const query = params?.query || '';

  const currentPage = Number(params?.page) || 1;


  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );


  const totalPages = await fetchProjectsPages(
    query
  );


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
      <Link
      href="/projects/create"
      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      New Project
    </Link>

      <ProjectSearch />


      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (

          <article
            key={project.id}
            className="rounded-lg border p-6 shadow-sm bg-white"
          >

            <h2 className="text-xl font-bold">
              {project.title}
            </h2>


            <p className="mt-2 text-slate-600">
              {project.description}
            </p>


            <p className="mt-3 text-sm">
              <strong>Type:</strong> {project.type}
            </p>


            <div className="mt-3">

              <strong>
                Technologies:
              </strong>


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
            <div className="mt-4 flex gap-2">
            <Link
              href={`/projects/${project.id}/edit`}
              className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 text-sm"
            >
              Edit
            </Link>
            <DeleteButton id={project.id} />
          </div>
          </article>

        ))}

      </section>


      <Pagination totalPages={totalPages} />


    </main>
  );
}