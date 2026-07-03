import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">My Projects</h2>
        <ProjectList />
      </main>

      <Footer />
    </div>
  );
}