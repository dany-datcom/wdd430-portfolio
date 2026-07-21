// app/components/DeleteButton.tsx
'use client';

import { deleteProject } from '@/lib/actions';

export default function DeleteButton({ id }: { id: number }) {
  return (
    <form
      action={async () => {
        if (confirm('Are you sure you want to delete this project?')) {
          await deleteProject(String(id));
        }
      }}
    >
      <button
        type="submit"
        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 text-sm"
      >
        Delete
      </button>
    </form>
  );
}