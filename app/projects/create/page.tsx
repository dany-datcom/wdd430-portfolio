// app/projects/create/page.tsx
import { createProject } from '@/lib/actions';

export default function CreateProjectPage() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>

      <form action={createProject} className="flex flex-col gap-4">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            required
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
            className="border rounded w-full p-2"
          />
        </div>

        {/* Tipo de proyecto */}
        <div>
          <label htmlFor="type" className="block font-medium">
            Type
          </label>
          <select id="type" name="type" required className="border rounded w-full p-2">
            <option value="">Select type</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        {/* Tecnologías (separadas por coma) */}
        <div>
          <label htmlFor="technologies" className="block font-medium">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            required
            placeholder="Next.js, TypeScript, Tailwind"
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
            placeholder="https://..."
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Project
        </button>
      </form>
    </main>
  );
}