export default function Loading() {
  return (
    <main className="space-y-6 animate-pulse">
      <div>
        <div className="h-10 w-64 rounded bg-slate-200" />

        <div className="mt-3 h-4 w-96 rounded bg-slate-200" />
      </div>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-lg border p-6 shadow-sm bg-white"
          >
            <div className="h-6 w-40 rounded bg-slate-200" />

            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>

            <div className="mt-4 h-4 w-32 rounded bg-slate-200" />
          </div>
        ))}

      </section>
    </main>
  );
}