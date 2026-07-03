import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with Next.js and TypeScript to showcase my software development projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/TU_USUARIO/wdd430-portfolio",
  },
  {
    title: "Parking Management QA Project",
    description:
      "A project where I performed manual testing, API testing, and UI validation for a parking management system.",
    technologies: ["Postman", "Jira", "Testiny", "Mailtrap"],
    link: "https://github.com/TU_USUARIO",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Dany Jimenez
        </h1>

        <p className="text-xl mt-4 text-gray-600">
          Software Developer | QA Engineer | IT Support
        </p>

        <p className="mt-6 max-w-3xl mx-auto">
          Welcome to my portfolio. I am currently studying Software
          Development while gaining professional experience in Quality
          Assurance and IT Support. My goal is to build reliable and scalable
          software solutions.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}