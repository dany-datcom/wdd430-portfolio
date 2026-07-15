import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';
import ProjectSkeleton from '@/components/ProjectSkeleton';

export const dynamic = 'force-dynamic';

export default function SchoolProjectsPage() {
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          School Projects
        </h1>

        <p className="text-slate-600">
          Projects completed as part of my education.
        </p>
      </div>

      <Suspense fallback={<ProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}