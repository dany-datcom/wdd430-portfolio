export default function ProjectSkeleton() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[1,2,3].map((item) => (
        <div
          key={item}
          className="rounded-lg border p-6 bg-white"
        >
          <div className="h-6 w-40 rounded bg-slate-200" />

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </section>
  );
}