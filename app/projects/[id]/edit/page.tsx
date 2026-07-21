// app/projects/[id]/edit/page.tsx
import { getProjectById, updateProject } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  // 1. Obtener el ID de la URL
  const params = await props.params;
  const id = params.id;

  // 2. Cargar el proyecto desde la base de datos
  const project = await getProjectById(id);

  // 3. Si no existe, mostrar página 404
  if (!project) {
    notFound();
  }

  // 4. Convertir el array de tecnologías a string para el input
  const technologiesString = Array.isArray(project.technologies)
    ? project.technologies.join(', ')
    : '';

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>

      <form action={updateProject.bind(null, id)} className="flex flex-col gap-4">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            required
            defaultValue={project.title}
            className="border rounded w-full p-2"
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            defaultValue={project.description}
            className="border rounded w-full p-2"
          />
        </div>

        {/* Tipo de proyecto */}
        <div>
          <label htmlFor="type" className="block font-medium">
            Type
          </label>
          <select
            id="type"
            name="type"
            required
            defaultValue={project.type}
            className="border rounded w-full p-2"
          >
            <option value="school">School</option>
            <option value="personal">Personal</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        {/* Tecnologías */}
        <div>
          <label htmlFor="technologies" className="block font-medium">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            required
            defaultValue={technologiesString}
            className="border rounded w-full p-2"
          />
        </div>

        {/* Link (opcional) */}
        <div>
          <label htmlFor="link" className="block font-medium">
            Link (optional)
          </label>
          <input
            id="link"
            name="link"
            defaultValue={project.link || ''}
            placeholder="https://..."
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Update Project
        </button>
      </form>
    </main>
  );
}